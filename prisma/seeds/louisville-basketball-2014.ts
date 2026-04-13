import type { TeamSeed } from "./types";

export const louisvilleBasketball2014: TeamSeed = {
  slug: "louisville-basketball-2014",
  name: "Louisville Cardinals",
  season: "2013-2014",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2013-2014 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "russ-smith", firstName: "Russ", lastName: "Smith", birthYear: 1991, hometown: "United States", highSchool: "United States",
      bio: "Senior. AAC POY. Russdiculous.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Italy", statusNote: "61 PPG in China. UofL Hall of Fame 2025.", sourceUrl: "https://en.wikipedia.org/wiki/Russ_Smith" },
      membership: { role: "PLAYER", jerseyNumber: 2, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 18, reboundsPerGame: 3.5, assistsPerGame: 3.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 18, reboundsPerGame: 3.5, assistsPerGame: 3.5 }],
      careerEvents: [],
    },
    {
      slug: "montrezl-harrell", firstName: "Montrezl", lastName: "Harrell", birthYear: 1994, hometown: "United States", highSchool: "United States",
      bio: "Sophomore. Future NBA 6MOY.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "United States", statusNote: "2020 NBA 6MOY. 10 NBA seasons. Now Big 3.", sourceUrl: "https://en.wikipedia.org/wiki/Montrezl_Harrell" },
      membership: { role: "PLAYER", jerseyNumber: 24, position: "Forward", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 15, reboundsPerGame: 8.5, assistsPerGame: 0.8 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 15, reboundsPerGame: 8.5, assistsPerGame: 0.8 }],
      careerEvents: [],
    },
    {
      slug: "rick-pitino",
      firstName: "Rick",
      lastName: "Pitino",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Hall of Fame coach who won the 2013 title (vacated). First coach to win championships at two schools.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2017. Now HC at St. John's — back-to-back Big East champs.",
        sourceUrl: "https://en.wikipedia.org/wiki/Rick_Pitino",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2017" },
      seasonStats: [
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2013-2014", yearLabel: "2013-2014", sortOrder: 206 },
      ],
      careerEvents: [],
    },
  ],
};
