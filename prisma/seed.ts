import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import type { TeamSeed, PersonSeed } from "./seeds/types";
import { dukeBasketball2010 } from "./seeds/duke-basketball-2010";
import { dukeBasketball2011 } from "./seeds/duke-basketball-2011";
import { dukeBasketball2012 } from "./seeds/duke-basketball-2012";
import { dukeBasketball2013 } from "./seeds/duke-basketball-2013";
import { dukeBasketball2014 } from "./seeds/duke-basketball-2014";
import { dukeBasketball2015 } from "./seeds/duke-basketball-2015";
import { uscFootball2005 } from "./seeds/usc-football-2005";
import { montverdeAcademy2020 } from "./seeds/montverde-academy-2020";
import { alabamaFootball2015 } from "./seeds/alabama-football-2015";
import { floridaBasketball2004 } from "./seeds/florida-basketball-2004";
import { floridaBasketball2005 } from "./seeds/florida-basketball-2005";
import { kentuckyBasketball2016 } from "./seeds/kentucky-basketball-2016";
import { kentuckyBasketball2017 } from "./seeds/kentucky-basketball-2017";
import { kentuckyBasketball2018 } from "./seeds/kentucky-basketball-2018";
import { kentuckyBasketball2019 } from "./seeds/kentucky-basketball-2019";
import { kentuckyBasketball2020 } from "./seeds/kentucky-basketball-2020";
import { kentuckyBasketball2021 } from "./seeds/kentucky-basketball-2021";
import { kentuckyBasketball2022 } from "./seeds/kentucky-basketball-2022";
import { kentuckyBasketball2023 } from "./seeds/kentucky-basketball-2023";
import { kentuckyBasketball2024 } from "./seeds/kentucky-basketball-2024";
import { kentuckyBasketball2025 } from "./seeds/kentucky-basketball-2025";
import { kentuckyBasketball2026 } from "./seeds/kentucky-basketball-2026";
import { dukeBasketball2001 } from "./seeds/duke-basketball-2001";
import { dukeBasketball2002 } from "./seeds/duke-basketball-2002";
import { dukeBasketball2003 } from "./seeds/duke-basketball-2003";
import { dukeBasketball2004 } from "./seeds/duke-basketball-2004";
import { dukeBasketball2005 } from "./seeds/duke-basketball-2005";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_PATH ?? "./dev.db" });
const prisma = new PrismaClient({ adapter } as any);

const allTeams: TeamSeed[] = [
  dukeBasketball2001,
  dukeBasketball2002,
  dukeBasketball2003,
  dukeBasketball2004,
  dukeBasketball2005,
  dukeBasketball2010,
  dukeBasketball2011,
  dukeBasketball2012,
  dukeBasketball2013,
  dukeBasketball2014,
  dukeBasketball2015,
  kentuckyBasketball2016,
  kentuckyBasketball2017,
  kentuckyBasketball2018,
  kentuckyBasketball2019,
  kentuckyBasketball2020,
  kentuckyBasketball2021,
  kentuckyBasketball2022,
  kentuckyBasketball2023,
  kentuckyBasketball2024,
  kentuckyBasketball2025,
  kentuckyBasketball2026,
  uscFootball2005,
  montverdeAcademy2020,
  alabamaFootball2015,
  floridaBasketball2004,
  floridaBasketball2005,
];

async function seedTeam(teamSeed: TeamSeed) {
  const teamData = {
    name: teamSeed.name,
    season: teamSeed.season,
    sport: teamSeed.sport,
    school: teamSeed.school,
    conference: teamSeed.conference ?? null,
    accomplishment: teamSeed.accomplishment ?? null,
    logoUrl: teamSeed.logoUrl ?? null,
    mascotName: teamSeed.mascotName ?? null,
  };

  const team = await prisma.team.upsert({
    where: { slug: teamSeed.slug },
    update: teamData,
    create: { slug: teamSeed.slug, ...teamData },
  });

  console.log(`\n🏟️  Seeding ${team.name} (${team.season})...`);

  for (const p of teamSeed.people) {
    await seedPerson(p, team.id);
  }

  console.log(`✅ Seeded ${teamSeed.people.length} people for ${team.name} (${team.season})`);
}

async function seedPerson(p: PersonSeed, teamId: number) {
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
    asOfDate: new Date("2026-04-01"),
    sourceUrl: p.status.sourceUrl ?? null,
    linkedInUrl: p.status.linkedInUrl ?? null,
  };

  await prisma.currentStatus.upsert({
    where: { personId: person.id },
    update: statusData,
    create: { personId: person.id, ...statusData },
  });

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
    where: { personId_teamId: { personId: person.id, teamId } },
    update: membershipData,
    create: { personId: person.id, teamId, ...membershipData },
  });

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

  console.log(`  ✓ ${p.firstName} ${p.lastName}`);
}

async function main() {
  for (const teamSeed of allTeams) {
    await seedTeam(teamSeed);
  }

  console.log(`\n🎉 All teams seeded successfully!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
