import { prisma } from "./prisma";

const personWithStatus = {
  currentStatus: true,
  careerEvents: { orderBy: { year: "asc" as const } },
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

export async function getTeamCount() {
  return prisma.team.count();
}

export async function getPersonCount() {
  return prisma.person.count();
}
