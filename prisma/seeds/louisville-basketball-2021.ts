import type { TeamSeed } from "./types";

export const louisvilleBasketball2021: TeamSeed = {
  slug: "louisville-basketball-2021",
  name: "Louisville Cardinals",
  season: "2020-2021",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2020-2021 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "david-johnson-lou", firstName: "David", lastName: "Johnson", birthYear: 1999, hometown: "United States", highSchool: "United States",
      bio: "Junior who declared for draft.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "United States", statusNote: "#29 pick by Raptors.", sourceUrl: "https://en.wikipedia.org/wiki/David_Johnson" },
      membership: { role: "PLAYER", jerseyNumber: 13, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 13, reboundsPerGame: 4.5, assistsPerGame: 4 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 13, reboundsPerGame: 4.5, assistsPerGame: 4 }],
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
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2020-2021", yearLabel: "2020-2021", sortOrder: 213 },
      ],
      careerEvents: [],
    },
  ],
};
