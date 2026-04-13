import type { TeamSeed } from "./types";

export const miamiBasketball2011: TeamSeed = {
  slug: "miami-basketball-2011",
  name: "Miami Hurricanes",
  season: "2010-2011",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2010-2011 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "durand-scott", firstName: "Durand", lastName: "Scott", birthYear: 1990, hometown: "United States", highSchool: "United States",
      bio: "Sophomore guard.",
      status: { occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "United States", statusNote: "4-year starter at Miami.", sourceUrl: "https://en.wikipedia.org/wiki/Durand_Scott" },
      membership: { role: "PLAYER", jerseyNumber: 1, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 12, reboundsPerGame: 3.5, assistsPerGame: 3.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 12, reboundsPerGame: 3.5, assistsPerGame: 3.5 }],
      careerEvents: [],
    },
    {
      slug: "frank-haith",
      firstName: "Frank",
      lastName: "Haith",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Coach who built Miami into an ACC contender before leaving for Missouri.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Now HC at Tulsa.",
        sourceUrl: "https://en.wikipedia.org/wiki/Frank_Haith",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2011" },
      seasonStats: [
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2010-2011", yearLabel: "2010-2011", sortOrder: 203 },
      ],
      careerEvents: [],
    },
  ],
};
