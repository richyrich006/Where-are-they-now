import type { TeamSeed } from "./types";

export const louisvilleBasketball2009: TeamSeed = {
  slug: "louisville-basketball-2009",
  name: "Louisville Cardinals",
  season: "2008-2009",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2008-2009 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "terrence-williams-lou", firstName: "Terrence", lastName: "Williams", birthYear: 1987, hometown: "United States", highSchool: "United States",
      bio: "Senior. #11 pick in 2009.",
      status: { occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "United States", statusNote: "#11 pick by Nets. Brief NBA career. Legal issues later.", sourceUrl: "https://en.wikipedia.org/wiki/Terrence_Williams" },
      membership: { role: "PLAYER", jerseyNumber: 1, position: "Forward", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 14, reboundsPerGame: 5, assistsPerGame: 4 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 14, reboundsPerGame: 5, assistsPerGame: 4 }],
      careerEvents: [],
    },
    {
      slug: "earl-clark", firstName: "Earl", lastName: "Clark", birthYear: 1988, hometown: "United States", highSchool: "United States",
      bio: "Junior forward. #14 pick.",
      status: { occupationType: "RETIRED_ATHLETE", currentTitle: "Retired", location: "United States", statusNote: "#14 pick by Suns. 5 NBA seasons.", sourceUrl: "https://en.wikipedia.org/wiki/Earl_Clark" },
      membership: { role: "PLAYER", jerseyNumber: 2, position: "Forward", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 11, reboundsPerGame: 6.5, assistsPerGame: 2 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 11, reboundsPerGame: 6.5, assistsPerGame: 2 }],
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
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2008-2009", yearLabel: "2008-2009", sortOrder: 201 },
      ],
      careerEvents: [],
    },
  ],
};
