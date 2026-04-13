import type { TeamSeed } from "./types";

export const louisvilleBasketball2010: TeamSeed = {
  slug: "louisville-basketball-2010",
  name: "Louisville Cardinals",
  season: "2009-2010",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2009-2010 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "preston-knowles", firstName: "Preston", lastName: "Knowles", birthYear: 1988, hometown: "United States", highSchool: "United States",
      bio: "Junior guard and team leader.",
      status: { occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "United States", statusNote: "Played overseas after Louisville.", sourceUrl: "https://en.wikipedia.org/wiki/Preston_Knowles" },
      membership: { role: "PLAYER", jerseyNumber: 2, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 13, reboundsPerGame: 4, assistsPerGame: 3 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 13, reboundsPerGame: 4, assistsPerGame: 3 }],
      careerEvents: [],
    },
    {
      slug: "peyton-siva", firstName: "Peyton", lastName: "Siva", birthYear: 1990, hometown: "United States", highSchool: "United States",
      bio: "Freshman PG. Future championship captain.",
      status: { occupationType: "COACH", currentTitle: "Dir. Player Development", location: "Louisville, KY", statusNote: "Now Louisville Director of Player Development.", sourceUrl: "https://en.wikipedia.org/wiki/Peyton_Siva" },
      membership: { role: "PLAYER", jerseyNumber: 3, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 7, reboundsPerGame: 2.5, assistsPerGame: 4 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 7, reboundsPerGame: 2.5, assistsPerGame: 4 }],
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
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2009-2010", yearLabel: "2009-2010", sortOrder: 202 },
      ],
      careerEvents: [],
    },
  ],
};
