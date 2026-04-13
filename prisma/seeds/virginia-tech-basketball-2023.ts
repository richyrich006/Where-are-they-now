import type { TeamSeed } from "./types";

export const virginiaTechBasketball2023: TeamSeed = {
  slug: "virginia-tech-basketball-2023",
  name: "Virginia Tech Hokies",
  season: "2022-2023",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2022-2023 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug: "mike-young",
      firstName: "Mike",
      lastName: "Young",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Wofford legend who has maintained VT as an NCAA Tournament program.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Virginia Tech.",
        sourceUrl: "https://en.wikipedia.org/wiki/Mike_Young",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2020-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2022-2023", yearLabel: "2022-2023", sortOrder: 215 },
      ],
      careerEvents: [],
    },
  ],
};
