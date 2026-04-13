import type { TeamSeed } from "./types";

export const miamiBasketball2020: TeamSeed = {
  slug: "miami-basketball-2020",
  name: "Miami Hurricanes",
  season: "2019-2020",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2019-2020 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "chris-lykes", firstName: "Chris", lastName: "Lykes", birthYear: 1999, hometown: "United States", highSchool: "United States",
      bio: "Junior before injury.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Overseas", statusNote: "5'7 scorer. Transferred to Arkansas.", sourceUrl: "https://en.wikipedia.org/wiki/Chris_Lykes" },
      membership: { role: "PLAYER", jerseyNumber: 0, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 16, reboundsPerGame: 3, assistsPerGame: 3.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 16, reboundsPerGame: 3, assistsPerGame: 3.5 }],
      careerEvents: [],
    },
    {
      slug: "jim-larranaga",
      firstName: "Jim",
      lastName: "Larranaga",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Led Miami to the 2023 Final Four (first in history) at age 73. Also led George Mason to 2006 Final Four.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Retired after 2024 season.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jim_Larranaga",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2012-2024" },
      seasonStats: [
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2019-2020", yearLabel: "2019-2020", sortOrder: 212 },
      ],
      careerEvents: [],
    },
  ],
};
