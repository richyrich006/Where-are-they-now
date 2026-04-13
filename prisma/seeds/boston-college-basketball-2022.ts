import type { TeamSeed } from "./types";

export const bostonCollegeBasketball2022: TeamSeed = {
  slug: "boston-college-basketball-2022",
  name: "Boston College Eagles",
  season: "2021-2022",
  sport: "Men's Basketball",
  school: "Boston College",
  conference: "ACC",
  accomplishment: "2021-2022 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/103.png",
  mascotName: "Eagle",
  people: [
    {
      slug: "earl-grant",
      firstName: "Earl",
      lastName: "Grant",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Former College of Charleston HC hired to rebuild BC.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Boston College.",
        sourceUrl: "https://en.wikipedia.org/wiki/Earl_Grant",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2022-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Boston College Eagles", season: "2021-2022", yearLabel: "2021-2022", sortOrder: 214 },
      ],
      careerEvents: [],
    },
  ],
};
