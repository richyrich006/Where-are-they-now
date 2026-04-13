import type { TeamSeed } from "./types";

export const louisvilleBasketball2025: TeamSeed = {
  slug: "louisville-basketball-2025",
  name: "Louisville Cardinals",
  season: "2024-2025",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2024-2025 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "chucky-hepburn", firstName: "Chucky", lastName: "Hepburn", birthYear: 2002, hometown: "United States", highSchool: "United States",
      bio: "Wisconsin transfer. Team leader under Pat Kelsey.",
      status: { occupationType: "STUDENT", currentTitle: "College Player", location: "Louisville, KY", statusNote: "Key transfer in Kelsey's rebuild.", sourceUrl: "https://en.wikipedia.org/wiki/Chucky_Hepburn" },
      membership: { role: "PLAYER", jerseyNumber: 0, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 14, reboundsPerGame: 3, assistsPerGame: 4 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 14, reboundsPerGame: 3, assistsPerGame: 4 }],
      careerEvents: [],
    },
    {
      slug: "kasean-pryor", firstName: "Kasean", lastName: "Pryor", birthYear: 2003, hometown: "United States", highSchool: "United States",
      bio: "Junior forward from Connecticut.",
      status: { occupationType: "STUDENT", currentTitle: "College Player", location: "Louisville, KY", statusNote: "Developed into key contributor.", sourceUrl: "https://en.wikipedia.org/wiki/Kasean_Pryor" },
      membership: { role: "PLAYER", jerseyNumber: 4, position: "Forward", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 10, reboundsPerGame: 6, assistsPerGame: 1 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 10, reboundsPerGame: 6, assistsPerGame: 1 }],
      careerEvents: [],
    },
    {
      slug: "pat-kelsey",
      firstName: "Pat",
      lastName: "Kelsey",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Hired from College of Charleston to rebuild the Louisville program.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Louisville.",
        sourceUrl: "https://en.wikipedia.org/wiki/Pat_Kelsey",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2025-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2024-2025", yearLabel: "2024-2025", sortOrder: 217 },
      ],
      careerEvents: [],
    },
  ],
};
