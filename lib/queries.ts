import { prisma } from "./prisma";

const personWithStatus = {
  currentStatus: true,
  careerEvents: { orderBy: { year: "asc" as const } },
  seasonStats: { orderBy: { sortOrder: "asc" as const } },
  memberships: {
    include: {
      team: true,
    },
  },
};

export async function getFeaturedPlayers() {
  return prisma.person.findMany({
    where: { isFeatured: true },
    include: { currentStatus: true, memberships: { include: { team: true } } },
    orderBy: { lastName: "asc" },
  });
}

export async function getAllPlayers() {
  return prisma.person.findMany({
    include: { currentStatus: true, memberships: { include: { team: true } } },
    orderBy: [{ lastName: "asc" }, { firstName: "asc" }],
  });
}

export async function getPlayerBySlug(slug: string) {
  return prisma.person.findUnique({
    where: { slug },
    include: personWithStatus,
  });
}

export async function getAllPlayerSlugs() {
  const people = await prisma.person.findMany({ select: { slug: true } });
  return people.map((p) => p.slug);
}

export async function getTeamBySlug(slug: string) {
  return prisma.team.findUnique({
    where: { slug },
    include: {
      memberships: {
        include: {
          person: {
            include: { currentStatus: true },
          },
        },
        orderBy: [{ role: "asc" }, { jerseyNumber: "asc" }],
      },
    },
  });
}

export async function getAllTeamSlugs() {
  const teams = await prisma.team.findMany({ select: { slug: true } });
  return teams.map((t) => t.slug);
}

export async function searchPeople(query: string) {
  const q = `%${query}%`;
  return prisma.person.findMany({
    where: {
      OR: [
        { firstName: { contains: query } },
        { lastName: { contains: query } },
        { currentStatus: { currentTitle: { contains: query } } },
        { currentStatus: { currentEmployer: { contains: query } } },
        { memberships: { some: { team: { school: { contains: query } } } } },
      ],
    },
    include: { currentStatus: true, memberships: { include: { team: true } } },
    orderBy: { lastName: "asc" },
  });
}

export async function getRemarkableStories() {
  const [pro, unique, coach] = await Promise.all([
    prisma.person.findFirst({
      where: { isFeatured: true, currentStatus: { occupationType: "ACTIVE_PRO_ATHLETE" } },
      include: { currentStatus: true },
    }),
    prisma.person.findFirst({
      where: { isFeatured: true, currentStatus: { occupationType: "OTHER" } },
      include: { currentStatus: true },
    }),
    prisma.person.findFirst({
      where: { isFeatured: true, currentStatus: { occupationType: "COACH" } },
      include: { currentStatus: true },
    }),
  ]);
  return [pro, unique, coach].filter((p) => p !== null);
}

export async function getAllTeams() {
  return prisma.team.findMany({
    include: {
      _count: { select: { memberships: true } },
    },
    orderBy: { season: "desc" },
  });
}

export async function getTeamsBySchool(school: string) {
  return prisma.team.findMany({
    where: { school },
    include: {
      _count: { select: { memberships: true } },
    },
    orderBy: { season: "desc" },
  });
}

export async function getAllSchools() {
  const teams = await prisma.team.findMany({
    select: { school: true, logoUrl: true, sport: true, _count: { select: { memberships: true } } },
    orderBy: { school: "asc" },
  });
  const schoolMap = new Map<
    string,
    { logoUrl: string | null; sports: Set<string>; teamCount: number; playerCount: number }
  >();
  for (const t of teams) {
    const existing = schoolMap.get(t.school);
    if (existing) {
      existing.sports.add(t.sport);
      existing.teamCount++;
      existing.playerCount += t._count.memberships;
    } else {
      schoolMap.set(t.school, {
        logoUrl: t.logoUrl,
        sports: new Set([t.sport]),
        teamCount: 1,
        playerCount: t._count.memberships,
      });
    }
  }
  return Array.from(schoolMap.entries()).map(([school, data]) => ({
    school,
    logoUrl: data.logoUrl,
    sports: Array.from(data.sports),
    teamCount: data.teamCount,
    playerCount: data.playerCount,
    slug: school.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  }));
}

export async function getTeamCount() {
  return prisma.team.count();
}

export async function getPersonCount() {
  return prisma.person.count();
}

export async function getOnThisDayEvents(month: number, day: number) {
  const events = await prisma.careerEvent.findMany({
    where: { month, day },
    include: {
      person: {
        include: {
          currentStatus: true,
          memberships: { include: { team: true }, take: 1 },
        },
      },
    },
    orderBy: { year: "desc" },
    take: 12,
  });
  return events;
}

export async function getPlayerLocations() {
  const locations = await prisma.playerLocation.findMany({
    include: {
      person: {
        include: {
          currentStatus: true,
          memberships: { include: { team: true }, take: 1 },
        },
      },
    },
  });
  return locations;
}

export type PlayerFilter = {
  occupation?: string;
  school?: string;
  league?: string;
  query?: string;
};

export async function getFilteredPlayers(filter: PlayerFilter) {
  const where: Record<string, unknown> = {};

  if (filter.occupation || filter.league) {
    const statusWhere: Record<string, unknown> = {};
    if (filter.occupation) statusWhere.occupationType = filter.occupation;
    if (filter.league) statusWhere.league = { contains: filter.league };
    where.currentStatus = statusWhere;
  }

  if (filter.school) {
    where.memberships = { some: { team: { school: filter.school } } };
  }

  if (filter.query) {
    where.OR = [
      { firstName: { contains: filter.query } },
      { lastName: { contains: filter.query } },
      { currentStatus: { currentEmployer: { contains: filter.query } } },
      { currentStatus: { currentTitle: { contains: filter.query } } },
    ];
  }

  return prisma.person.findMany({
    where,
    include: {
      currentStatus: true,
      memberships: { include: { team: true }, take: 1 },
    },
    orderBy: [{ lastName: "asc" }, { firstName: "asc" }],
    take: 200,
  });
}

export async function getRecentUpdates(limit = 10) {
  const updates = await prisma.playerUpdate.findMany({
    orderBy: { detectedAt: "desc" },
    take: limit,
  });
  if (updates.length === 0) return [];

  const personIds = [...new Set(updates.map((u) => u.personId))];
  const people = await prisma.person.findMany({
    where: { id: { in: personIds } },
    select: { id: true, slug: true, firstName: true, lastName: true },
  });
  const personMap = new Map(people.map((p) => [p.id, p]));

  return updates.map((u) => ({
    ...u,
    person: personMap.get(u.personId) ?? null,
  }));
}

// ── Coach queries ──────────────────────────────────────────────────────────

export async function getAllCoaches() {
  const coaches = await prisma.person.findMany({
    where: {
      memberships: {
        some: {
          role: { in: ["HEAD_COACH", "ASSISTANT_COACH"] },
        },
      },
    },
    include: {
      currentStatus: true,
      memberships: {
        where: { role: { in: ["HEAD_COACH", "ASSISTANT_COACH"] } },
        include: { team: true },
        orderBy: { team: { season: "desc" } },
      },
    },
    orderBy: { lastName: "asc" },
  });
  return coaches;
}

export async function getCoachBySlug(slug: string) {
  const coach = await prisma.person.findUnique({
    where: { slug },
    include: {
      currentStatus: true,
      careerEvents: { orderBy: { year: "asc" } },
      seasonStats: { orderBy: { sortOrder: "asc" } },
      memberships: {
        where: { role: { in: ["HEAD_COACH", "ASSISTANT_COACH"] } },
        include: {
          team: {
            include: {
              memberships: {
                where: { role: "PLAYER" },
                include: {
                  person: { include: { currentStatus: true } },
                },
              },
            },
          },
        },
        orderBy: { team: { season: "asc" } },
      },
    },
  });
  if (!coach || coach.memberships.length === 0) return null;
  return coach;
}

export async function getCoachingTree(coachPersonId: number) {
  // Find all players who played for this coach
  const coachTeams = await prisma.teamMembership.findMany({
    where: {
      personId: coachPersonId,
      role: { in: ["HEAD_COACH", "ASSISTANT_COACH"] },
    },
    select: { teamId: true },
  });
  const teamIds = coachTeams.map((t) => t.teamId);
  if (teamIds.length === 0) return { players: [], coaches: [] };

  // All players who played on those teams
  const playerMemberships = await prisma.teamMembership.findMany({
    where: {
      teamId: { in: teamIds },
      role: "PLAYER",
    },
    select: { personId: true, teamId: true },
  });

  const playerIds = [...new Set(playerMemberships.map((m) => m.personId))];
  if (playerIds.length === 0) return { players: [], coaches: [] };

  // Full records for those players
  const players = await prisma.person.findMany({
    where: { id: { in: playerIds } },
    include: {
      currentStatus: true,
      memberships: {
        where: { role: { in: ["HEAD_COACH", "ASSISTANT_COACH"] } },
        include: { team: true },
      },
    },
    orderBy: [{ lastName: "asc" }],
  });

  // Split: who became coaches themselves?
  const becameCoaches = players.filter(
    (p) =>
      p.memberships.length > 0 ||
      p.currentStatus?.occupationType === "COACH" ||
      p.currentStatus?.occupationType === "RETIRED_COACH",
  );

  return {
    players,
    coaches: becameCoaches,
  };
}

// ── Teammate graph / six-degrees ────────────────────────────────────────────

export async function getAllPeopleForGraph() {
  return prisma.person.findMany({
    select: {
      id: true,
      slug: true,
      firstName: true,
      lastName: true,
      memberships: {
        select: {
          teamId: true,
          role: true,
          team: { select: { id: true, name: true, season: true, school: true } },
        },
      },
    },
  });
}

export type PathStep = {
  fromPlayer: { slug: string; firstName: string; lastName: string };
  toPlayer: { slug: string; firstName: string; lastName: string };
  via: { id: number; name: string; season: string; school: string };
};

export async function findTeammatePath(
  fromSlug: string,
  toSlug: string,
): Promise<PathStep[] | null> {
  if (fromSlug === toSlug) return [];

  const people = await getAllPeopleForGraph();
  const bySlug = new Map(people.map((p) => [p.slug, p]));
  const byId = new Map(people.map((p) => [p.id, p]));

  const start = bySlug.get(fromSlug);
  const end = bySlug.get(toSlug);
  if (!start || !end) return null;

  // Build team → player ids index
  const teamPlayers = new Map<number, { personId: number; team: PathStep["via"] }[]>();
  for (const p of people) {
    for (const m of p.memberships) {
      const arr = teamPlayers.get(m.teamId) ?? [];
      arr.push({ personId: p.id, team: m.team });
      teamPlayers.set(m.teamId, arr);
    }
  }

  // BFS where nodes are person ids, edges are "shared team"
  // Record the parent + the team used to reach each node
  type Parent = { from: number; via: PathStep["via"] };
  const parent = new Map<number, Parent | null>();
  parent.set(start.id, null);
  const queue: number[] = [start.id];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current === end.id) break;
    const currentPerson = byId.get(current);
    if (!currentPerson) continue;
    for (const m of currentPerson.memberships) {
      const teammates = teamPlayers.get(m.teamId) ?? [];
      for (const t of teammates) {
        if (t.personId === current) continue;
        if (parent.has(t.personId)) continue;
        parent.set(t.personId, { from: current, via: m.team });
        queue.push(t.personId);
        if (t.personId === end.id) {
          queue.length = 0;
          break;
        }
      }
      if (queue.length === 0) break;
    }
  }

  if (!parent.has(end.id)) return null;

  // Reconstruct path
  const steps: PathStep[] = [];
  let cursor: number | null = end.id;
  while (cursor !== null) {
    const par = parent.get(cursor);
    if (!par) break;
    const fromP = byId.get(par.from)!;
    const toP = byId.get(cursor)!;
    steps.unshift({
      fromPlayer: {
        slug: fromP.slug,
        firstName: fromP.firstName,
        lastName: fromP.lastName,
      },
      toPlayer: { slug: toP.slug, firstName: toP.firstName, lastName: toP.lastName },
      via: par.via,
    });
    cursor = par.from;
  }
  return steps;
}
