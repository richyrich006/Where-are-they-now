import type { TeamSeed } from "./types";

export const louisvilleBasketball2022: TeamSeed = {
  slug: "louisville-basketball-2022",
  name: "Louisville Cardinals",
  season: "2021-2022",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2021-2022 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
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
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2021-2022", yearLabel: "2021-2022", sortOrder: 214 },
      ],
      careerEvents: [],
    },
  ],
};
