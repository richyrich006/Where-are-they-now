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
    select: { school: true, logoUrl: true, sport: true },
    orderBy: { school: "asc" },
  });
  const schoolMap = new Map<string, { logoUrl: string | null; sports: Set<string> }>();
  for (const t of teams) {
    const existing = schoolMap.get(t.school);
    if (existing) {
      existing.sports.add(t.sport);
    } else {
      schoolMap.set(t.school, { logoUrl: t.logoUrl, sports: new Set([t.sport]) });
    }
  }
  return Array.from(schoolMap.entries()).map(([school, data]) => ({
    school,
    logoUrl: data.logoUrl,
    sports: Array.from(data.sports),
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
