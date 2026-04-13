import type { TeamSeed } from "./types";

export const georgiaTechBasketball2020: TeamSeed = {
  slug: "georgia-tech-basketball-2020",
  name: "Georgia Tech Yellow Jackets",
  season: "2019-2020",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2019-2020 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug: "josh-pastner",
      firstName: "Josh",
      lastName: "Pastner",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Former Memphis HC. Led GT to 2021 ACC Tournament title.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2024.",
        sourceUrl: "https://en.wikipedia.org/wiki/Josh_Pastner",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2017-2024" },
      seasonStats: [
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2019-2020", yearLabel: "2019-2020", sortOrder: 212 },
      ],
      careerEvents: [],
    },
  ],
};
