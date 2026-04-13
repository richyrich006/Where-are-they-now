import type { TeamSeed } from "./types";

export const virginiaTechBasketball2009: TeamSeed = {
  slug: "virginia-tech-basketball-2009",
  name: "Virginia Tech Hokies",
  season: "2008-2009",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2008-2009 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug: "seth-greenberg",
      firstName: "Seth",
      lastName: "Greenberg",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Energetic coach who made VT competitive but couldn't break through to NCAA Tournament consistently.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Now ESPN analyst.",
        sourceUrl: "https://en.wikipedia.org/wiki/Seth_Greenberg",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2012" },
      seasonStats: [
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2008-2009", yearLabel: "2008-2009", sortOrder: 201 },
      ],
      careerEvents: [],
    },
  ],
};
