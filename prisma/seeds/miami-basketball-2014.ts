import type { TeamSeed } from "./types";

export const miamiBasketball2014: TeamSeed = {
  slug: "miami-basketball-2014",
  name: "Miami Hurricanes",
  season: "2013-2014",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2013-2014 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "rion-brown", firstName: "Rion", lastName: "Brown", birthYear: 1990, hometown: "United States", highSchool: "United States",
      bio: "Senior guard and veteran leader.",
      status: { occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "United States", statusNote: "Played overseas briefly.", sourceUrl: "https://en.wikipedia.org/wiki/Rion_Brown" },
      membership: { role: "PLAYER", jerseyNumber: 15, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 13, reboundsPerGame: 4, assistsPerGame: 2 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 13, reboundsPerGame: 4, assistsPerGame: 2 }],
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
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2013-2014", yearLabel: "2013-2014", sortOrder: 206 },
      ],
      careerEvents: [],
    },
  ],
};
