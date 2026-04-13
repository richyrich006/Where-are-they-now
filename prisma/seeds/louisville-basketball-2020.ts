import type { TeamSeed } from "./types";

export const louisvilleBasketball2020: TeamSeed = {
  slug: "louisville-basketball-2020",
  name: "Louisville Cardinals",
  season: "2019-2020",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2019-2020 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "david-johnson-lou", firstName: "David", lastName: "Johnson", birthYear: 1999, hometown: "United States", highSchool: "United States",
      bio: "Sophomore guard. #29 pick.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "United States", statusNote: "#29 pick by Raptors in 2021.", sourceUrl: "https://en.wikipedia.org/wiki/David_Johnson" },
      membership: { role: "PLAYER", jerseyNumber: 13, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 12.5, reboundsPerGame: 4, assistsPerGame: 3.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 12.5, reboundsPerGame: 4, assistsPerGame: 3.5 }],
      careerEvents: [],
    },
    {
      slug: "carlik-jones", firstName: "Carlik", lastName: "Jones", birthYear: 1997, hometown: "United States", highSchool: "United States",
      bio: "Grad transfer from Radford. All-ACC.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "United States", statusNote: "All-ACC as grad transfer. Played for Mavs.", sourceUrl: "https://en.wikipedia.org/wiki/Carlik_Jones" },
      membership: { role: "PLAYER", jerseyNumber: 1, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 16, reboundsPerGame: 4.5, assistsPerGame: 4.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 16, reboundsPerGame: 4.5, assistsPerGame: 4.5 }],
      careerEvents: [],
    },
    {
      slug: "chris-mack",
      firstName: "Chris",
      lastName: "Mack",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Former Xavier HC who reached Sweet 16 in year 1 at Louisville.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Parted ways with Louisville 2022. Coaching candidate.",
        sourceUrl: "https://en.wikipedia.org/wiki/Chris_Mack",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2019-2022" },
      seasonStats: [
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2019-2020", yearLabel: "2019-2020", sortOrder: 212 },
      ],
      careerEvents: [],
    },
  ],
};
