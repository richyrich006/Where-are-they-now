import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import type { TeamFile, PersonSeed } from "./data/types";

import team2015 from "./data/team-2015";
import team2007 from "./data/team-2007";
import team2008 from "./data/team-2008";
import team2009 from "./data/team-2009";
import team2017 from "./data/team-2017";
import team2018 from "./data/team-2018";
import team2019 from "./data/team-2019";
import team2020 from "./data/team-2020";
import team2021 from "./data/team-2021";
import team2022 from "./data/team-2022";
import team2023 from "./data/team-2023";
import team2024 from "./data/team-2024";
import team2025 from "./data/team-2025";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_PATH ?? "./dev.db" });
const prisma = new PrismaClient({ adapter } as any);

const allTeamFiles: TeamFile[] = [
  team2007,
  team2008,
  team2009,
  team2015,
  team2017,
  team2018,
  team2019,
  team2020,
  team2021,
  team2022,
  team2023,
  team2024,
  team2025,
];

async function main() {
  // ── Create all teams ─────────────────────────────────────────────────────
  const teamMap = new Map<string, { id: number }>();

  for (const tf of allTeamFiles) {
    const t = tf.team;
    const teamData = {
      name: t.name,
      season: t.season,
      sport: t.sport,
      school: t.school,
      conference: t.conference ?? null,
      accomplishment: t.accomplishment ?? null,
      logoUrl: t.logoUrl ?? null,
      mascotName: t.mascotName ?? null,
    };
    const team = await prisma.team.upsert({
      where: { slug: t.slug },
      update: teamData,
      create: { slug: t.slug, ...teamData },
    });
    teamMap.set(t.slug, team);
    console.log(`\n🏀 Team: ${t.name} (${t.season})`);
  }

  // ── Deduplicate people across teams ──────────────────────────────────────
  // A person may appear in multiple team files (e.g. a player who was on
  // 2007 and 2008 teams). We keep the LAST definition for bio/status/stats
  // but create memberships for every team file they appear in.
  const personEntries: { person: PersonSeed; teamSlug: string }[] = [];
  for (const tf of allTeamFiles) {
    for (const p of tf.players) {
      personEntries.push({ person: p, teamSlug: tf.team.slug });
    }
  }

  // Group by slug to find unique people
  const personBySlug = new Map<string, { person: PersonSeed; teamSlugs: string[] }>();
  for (const entry of personEntries) {
    const existing = personBySlug.get(entry.person.slug);
    if (existing) {
      // Keep latest definition but track all team slugs
      existing.person = entry.person;
      if (!existing.teamSlugs.includes(entry.teamSlug)) {
        existing.teamSlugs.push(entry.teamSlug);
      }
    } else {
      personBySlug.set(entry.person.slug, {
        person: entry.person,
        teamSlugs: [entry.teamSlug],
      });
    }
  }

  // ── Seed each person ─────────────────────────────────────────────────────
  let totalPeople = 0;
  for (const { person: p, teamSlugs } of personBySlug.values()) {
    const personData = {
      firstName: p.firstName,
      lastName: p.lastName,
      birthYear: p.birthYear,
      hometown: p.hometown,
      highSchool: p.highSchool ?? null,
      imageUrl: p.imageUrl ?? null,
      collegeImageUrl: p.collegeImageUrl ?? null,
      bio: p.bio ?? null,
      isFeatured: p.isFeatured ?? false,
    };

    const person = await prisma.person.upsert({
      where: { slug: p.slug },
      update: personData,
      create: { slug: p.slug, ...personData },
    });

    const statusData = {
      occupationType: p.status.occupationType,
      currentTitle: p.status.currentTitle ?? null,
      currentEmployer: p.status.currentEmployer ?? null,
      league: p.status.league ?? null,
      location: p.status.location ?? null,
      statusNote: p.status.statusNote ?? null,
      asOfDate: new Date("2026-03-01"),
      sourceUrl: p.status.sourceUrl ?? null,
      linkedInUrl: p.status.linkedInUrl ?? null,
    };

    await prisma.currentStatus.upsert({
      where: { personId: person.id },
      update: statusData,
      create: { personId: person.id, ...statusData },
    });

    // Create membership for each team this person belongs to
    for (const teamSlug of teamSlugs) {
      const team = teamMap.get(teamSlug);
      if (!team) continue;

      const membershipData = {
        role: p.membership.role,
        jerseyNumber: p.membership.jerseyNumber ?? null,
        position: p.membership.position ?? null,
        yearsAtSchool: p.membership.yearsAtSchool ?? null,
        statsNote: p.membership.statsNote ?? null,
        gamesPlayed: p.membership.gamesPlayed ?? null,
        pointsPerGame: p.membership.pointsPerGame ?? null,
        reboundsPerGame: p.membership.reboundsPerGame ?? null,
        assistsPerGame: p.membership.assistsPerGame ?? null,
      };

      await prisma.teamMembership.upsert({
        where: { personId_teamId: { personId: person.id, teamId: team.id } },
        update: membershipData,
        create: { personId: person.id, teamId: team.id, ...membershipData },
      });
    }

    if (p.seasonStats?.length) {
      await prisma.seasonStats.deleteMany({ where: { personId: person.id } });
      for (const stat of p.seasonStats) {
        await prisma.seasonStats.create({
          data: {
            personId: person.id,
            level: stat.level,
            teamName: stat.teamName,
            season: stat.season,
            yearLabel: stat.yearLabel,
            sortOrder: stat.sortOrder,
            gamesPlayed: stat.gamesPlayed ?? null,
            minutesPerGame: stat.minutesPerGame ?? null,
            pointsPerGame: stat.pointsPerGame ?? null,
            reboundsPerGame: stat.reboundsPerGame ?? null,
            assistsPerGame: stat.assistsPerGame ?? null,
            stealsPerGame: stat.stealsPerGame ?? null,
            blocksPerGame: stat.blocksPerGame ?? null,
            fieldGoalPct: stat.fieldGoalPct ?? null,
            threePointPct: stat.threePointPct ?? null,
            freeThrowPct: stat.freeThrowPct ?? null,
            wins: stat.wins ?? null,
            losses: stat.losses ?? null,
            tournamentResult: stat.tournamentResult ?? null,
          },
        });
      }
    }

    if (p.careerEvents) {
      await prisma.careerEvent.deleteMany({ where: { personId: person.id } });
      for (const event of p.careerEvents) {
        await prisma.careerEvent.create({
          data: {
            personId: person.id,
            year: event.year,
            title: event.title,
            eventType: event.eventType ?? null,
            detail: event.detail ?? null,
          },
        });
      }
    }

    console.log(`  ✓ ${p.firstName} ${p.lastName} (${teamSlugs.join(", ")})`);
    totalPeople++;
  }

  console.log(`\n✅ Seeded ${totalPeople} people across ${allTeamFiles.length} teams`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
