import type { TeamSeed } from "./types";

export const louisvilleBasketball2023: TeamSeed = {
  slug: "louisville-basketball-2023",
  name: "Louisville Cardinals",
  season: "2022-2023",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2022-2023 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "kenny-payne",
      firstName: "Kenny",
      lastName: "Payne",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Former Kentucky assistant and NBA coach who went 12-52 in 2 seasons.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2024. Now associate HC at Arkansas under Calipari.",
        sourceUrl: "https://en.wikipedia.org/wiki/Kenny_Payne",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2023-2024" },
      seasonStats: [
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2022-2023", yearLabel: "2022-2023", sortOrder: 215 },
      ],
      careerEvents: [],
    },
  ],
};
