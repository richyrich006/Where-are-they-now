import type { TeamSeed } from "./types";

export const bostonCollegeBasketball2010: TeamSeed = {
  slug: "boston-college-basketball-2010",
  name: "Boston College Eagles",
  season: "2009-2010",
  sport: "Men's Basketball",
  school: "Boston College",
  conference: "ACC",
  accomplishment: "2009-2010 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/103.png",
  mascotName: "Eagle",
  people: [
    {
      slug: "al-skinner",
      firstName: "Al",
      lastName: "Skinner",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "247-164 at BC. 6 NCAA Tournaments. BC's golden era.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2010. Retired from coaching.",
        sourceUrl: "https://en.wikipedia.org/wiki/Al_Skinner",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2010" },
      seasonStats: [
        { level: "COACHING", teamName: "Boston College Eagles", season: "2009-2010", yearLabel: "2009-2010", sortOrder: 202 },
      ],
      careerEvents: [],
    },
  ],
};
