import type { TeamSeed } from "./types";

export const ncstateBasketball2011: TeamSeed = {
  slug: "ncstate-basketball-2011",
  name: "NC State Wolfpack",
  season: "2010-2011",
  sport: "Men's Basketball",
  school: "North Carolina State University",
  conference: "ACC",
  accomplishment: "2010-2011 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/152.png",
  mascotName: "Wolfpack",
  people: [
    {
      slug: "sidney-lowe",
      firstName: "Sidney",
      lastName: "Lowe",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Former NC State point guard from the 1983 championship team who coached his alma mater.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired after 2011. Now a basketball consultant.",
        sourceUrl: "https://en.wikipedia.org/wiki/Sidney_Lowe",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2011" },
      seasonStats: [
        { level: "COACHING", teamName: "NC State Wolfpack", season: "2010-2011", yearLabel: "2010-2011", sortOrder: 203 },
      ],
      careerEvents: [],
    },
  ],
};
