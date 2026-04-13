import type { TeamSeed } from "./types";

export const miamiBasketball2024: TeamSeed = {
  slug: "miami-basketball-2024",
  name: "Miami Hurricanes",
  season: "2023-2024",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2023-2024 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "matthew-cleveland", firstName: "Matthew", lastName: "Cleveland", birthYear: 2003, hometown: "United States", highSchool: "United States",
      bio: "Junior guard. ACC All-Conference.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "United States", statusNote: "Declared for 2024 NBA Draft after Junior year.", sourceUrl: "https://en.wikipedia.org/wiki/Matthew_Cleveland" },
      membership: { role: "PLAYER", jerseyNumber: 2, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 14, reboundsPerGame: 5, assistsPerGame: 3 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 14, reboundsPerGame: 5, assistsPerGame: 3 }],
      careerEvents: [],
    },
    {
      slug: "norchad-omier", firstName: "Norchad", lastName: "Omier", birthYear: 2001, hometown: "United States", highSchool: "United States",
      bio: "Nicaraguan center. Transferred to Baylor.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Forward", location: "United States", statusNote: "Transferred to Baylor after Final Four. 2024 draft prospect.", sourceUrl: "https://en.wikipedia.org/wiki/Norchad_Omier" },
      membership: { role: "PLAYER", jerseyNumber: 15, position: "Forward", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 12, reboundsPerGame: 8, assistsPerGame: 1 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 12, reboundsPerGame: 8, assistsPerGame: 1 }],
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
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2023-2024", yearLabel: "2023-2024", sortOrder: 216 },
      ],
      careerEvents: [],
    },
  ],
};
