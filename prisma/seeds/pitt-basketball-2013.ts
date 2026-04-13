import type { TeamSeed } from "./types";

export const pittBasketball2013: TeamSeed = {
  slug: "pitt-basketball-2013",
  name: "Pittsburgh Panthers",
  season: "2012-2013",
  sport: "Men's Basketball",
  school: "University of Pittsburgh",
  conference: "ACC",
  accomplishment: "2012-2013 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/221.png",
  mascotName: "Panther",
  people: [
    {
      slug: "jamie-dixon",
      firstName: "Jamie",
      lastName: "Dixon",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "328-123 at Pitt. 11 NCAA Tournaments. Left for TCU.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Now HC at TCU.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jamie_Dixon",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2016" },
      seasonStats: [
        { level: "COACHING", teamName: "Pittsburgh Panthers", season: "2012-2013", yearLabel: "2012-2013", sortOrder: 205 },
      ],
      careerEvents: [],
    },
  ],
};
