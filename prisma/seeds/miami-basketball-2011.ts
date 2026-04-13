import type { TeamSeed } from "./types";

export const miamiBasketball2011: TeamSeed = {
  slug: "miami-basketball-2011",
  name: "Miami Hurricanes",
  season: "2010-2011",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2010-2011 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "frank-haith",
      firstName: "Frank",
      lastName: "Haith",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Coach who built Miami into an ACC contender before leaving for Missouri.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Now HC at Tulsa.",
        sourceUrl: "https://en.wikipedia.org/wiki/Frank_Haith",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2011" },
      seasonStats: [
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2010-2011", yearLabel: "2010-2011", sortOrder: 203 },
      ],
      careerEvents: [],
    },
  ],
};
