import type { TeamSeed } from "./types";

export const pittBasketball2020: TeamSeed = {
  slug: "pitt-basketball-2020",
  name: "Pittsburgh Panthers",
  season: "2019-2020",
  sport: "Men's Basketball",
  school: "University of Pittsburgh",
  conference: "ACC",
  accomplishment: "2019-2020 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/221.png",
  mascotName: "Panther",
  people: [
    {
      slug: "jeff-capel",
      firstName: "Jeff",
      lastName: "Capel",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Former Duke assistant and Oklahoma HC. Rebuilding Pitt.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Pittsburgh.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jeff_Capel",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2019-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Pittsburgh Panthers", season: "2019-2020", yearLabel: "2019-2020", sortOrder: 212 },
      ],
      careerEvents: [],
    },
  ],
};
