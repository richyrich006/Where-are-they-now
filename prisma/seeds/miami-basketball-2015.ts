import type { TeamSeed } from "./types";

export const miamiBasketball2015: TeamSeed = {
  slug: "miami-basketball-2015",
  name: "Miami Hurricanes",
  season: "2014-2015",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2014-2015 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "sheldon-mcclellan", firstName: "Sheldon", lastName: "McClellan", birthYear: 1992, hometown: "United States", highSchool: "United States",
      bio: "Junior transfer from Texas.",
      status: { occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "United States", statusNote: "Played briefly for Wizards. Overseas career.", sourceUrl: "https://en.wikipedia.org/wiki/Sheldon_McClellan" },
      membership: { role: "PLAYER", jerseyNumber: 10, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 12, reboundsPerGame: 4, assistsPerGame: 1.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 12, reboundsPerGame: 4, assistsPerGame: 1.5 }],
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
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2014-2015", yearLabel: "2014-2015", sortOrder: 207 },
      ],
      careerEvents: [],
    },
  ],
};
