import type { TeamSeed } from "./types";

export const louisvilleBasketball2015: TeamSeed = {
  slug: "louisville-basketball-2015",
  name: "Louisville Cardinals",
  season: "2014-2015",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2014-2015 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "montrezl-harrell", firstName: "Montrezl", lastName: "Harrell", birthYear: 1994, hometown: "United States", highSchool: "United States",
      bio: "Junior star. #32 pick.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "United States", statusNote: "#32 pick. 2020 NBA 6MOY.", sourceUrl: "https://en.wikipedia.org/wiki/Montrezl_Harrell" },
      membership: { role: "PLAYER", jerseyNumber: 24, position: "Forward", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 15.5, reboundsPerGame: 9, assistsPerGame: 1 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 15.5, reboundsPerGame: 9, assistsPerGame: 1 }],
      careerEvents: [],
    },
    {
      slug: "terry-rozier", firstName: "Terry", lastName: "Rozier", birthYear: 1994, hometown: "United States", highSchool: "United States",
      bio: "Freshman. Future #16 pick and NBA starter.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Charlotte, NC", statusNote: "#16 pick by Celtics. Starting PG for Hornets. $97M contract.", sourceUrl: "https://en.wikipedia.org/wiki/Terry_Rozier" },
      membership: { role: "PLAYER", jerseyNumber: 0, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 6, reboundsPerGame: 2.5, assistsPerGame: 2 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 6, reboundsPerGame: 2.5, assistsPerGame: 2 }],
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
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2014-2015", yearLabel: "2014-2015", sortOrder: 207 },
      ],
      careerEvents: [],
    },
  ],
};
