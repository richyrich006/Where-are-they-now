import type { TeamSeed } from "./types";

export const miamiBasketball2016: TeamSeed = {
  slug: "miami-basketball-2016",
  name: "Miami Hurricanes",
  season: "2015-2016",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2015-2016 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "sheldon-mcclellan", firstName: "Sheldon", lastName: "McClellan", birthYear: 1992, hometown: "United States", highSchool: "United States",
      bio: "Senior. Team's go-to scorer.",
      status: { occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "United States", statusNote: "Played for Wizards.", sourceUrl: "https://en.wikipedia.org/wiki/Sheldon_McClellan" },
      membership: { role: "PLAYER", jerseyNumber: 10, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 15, reboundsPerGame: 4.5, assistsPerGame: 2 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 15, reboundsPerGame: 4.5, assistsPerGame: 2 }],
      careerEvents: [],
    },
    {
      slug: "angel-rodriguez", firstName: "Angel", lastName: "Rodriguez", birthYear: 1992, hometown: "United States", highSchool: "United States",
      bio: "Grad transfer from Kansas State.",
      status: { occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "Puerto Rico", statusNote: "Played in Puerto Rico's BSN.", sourceUrl: "https://en.wikipedia.org/wiki/Angel_Rodriguez" },
      membership: { role: "PLAYER", jerseyNumber: 13, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 12, reboundsPerGame: 3, assistsPerGame: 4.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 12, reboundsPerGame: 3, assistsPerGame: 4.5 }],
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
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2015-2016", yearLabel: "2015-2016", sortOrder: 208 },
      ],
      careerEvents: [],
    },
  ],
};
