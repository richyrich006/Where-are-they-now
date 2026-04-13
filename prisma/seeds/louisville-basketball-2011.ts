import type { TeamSeed } from "./types";

export const louisvilleBasketball2011: TeamSeed = {
  slug: "louisville-basketball-2011",
  name: "Louisville Cardinals",
  season: "2010-2011",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2010-2011 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "peyton-siva", firstName: "Peyton", lastName: "Siva", birthYear: 1990, hometown: "United States", highSchool: "United States",
      bio: "Sophomore PG developing into leader.",
      status: { occupationType: "COACH", currentTitle: "Dir. Player Development", location: "Louisville, KY", statusNote: "Now Louisville staff.", sourceUrl: "https://en.wikipedia.org/wiki/Peyton_Siva" },
      membership: { role: "PLAYER", jerseyNumber: 3, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 10, reboundsPerGame: 3, assistsPerGame: 5.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 10, reboundsPerGame: 3, assistsPerGame: 5.5 }],
      careerEvents: [],
    },
    {
      slug: "kyle-kuric", firstName: "Kyle", lastName: "Kuric", birthYear: 1989, hometown: "United States", highSchool: "United States",
      bio: "Junior sharpshooter.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Overseas", statusNote: "Long EuroLeague career. Barcelona star.", sourceUrl: "https://en.wikipedia.org/wiki/Kyle_Kuric" },
      membership: { role: "PLAYER", jerseyNumber: 14, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 11, reboundsPerGame: 3.5, assistsPerGame: 1.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 11, reboundsPerGame: 3.5, assistsPerGame: 1.5 }],
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
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2010-2011", yearLabel: "2010-2011", sortOrder: 203 },
      ],
      careerEvents: [],
    },
  ],
};
