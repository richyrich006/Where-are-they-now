import type { TeamSeed } from "./types";

export const georgiaTechBasketball2009: TeamSeed = {
  slug: "georgia-tech-basketball-2009",
  name: "Georgia Tech Yellow Jackets",
  season: "2008-2009",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2008-2009 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug: "paul-hewitt",
      firstName: "Paul",
      lastName: "Hewitt",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Led Georgia Tech to the 2004 title game but program declined.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2011. Later coached at George Mason.",
        sourceUrl: "https://en.wikipedia.org/wiki/Paul_Hewitt",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2011" },
      seasonStats: [
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2008-2009", yearLabel: "2008-2009", sortOrder: 201 },
      ],
      careerEvents: [],
    },
  ],
};
