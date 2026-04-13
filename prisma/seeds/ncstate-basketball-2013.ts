import type { TeamSeed } from "./types";

export const ncstateBasketball2013: TeamSeed = {
  slug: "ncstate-basketball-2013",
  name: "NC State Wolfpack",
  season: "2012-2013",
  sport: "Men's Basketball",
  school: "North Carolina State University",
  conference: "ACC",
  accomplishment: "2012-2013 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/152.png",
  mascotName: "Wolfpack",
  people: [
    {
      slug: "mark-gottfried",
      firstName: "Mark",
      lastName: "Gottfried",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Led NC State to 4 NCAA Tournaments in 6 seasons before being fired.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired mid-2017 season. Later coached at Cal State Northridge.",
        sourceUrl: "https://en.wikipedia.org/wiki/Mark_Gottfried",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2012-2017" },
      seasonStats: [
        { level: "COACHING", teamName: "NC State Wolfpack", season: "2012-2013", yearLabel: "2012-2013", sortOrder: 205 },
      ],
      careerEvents: [],
    },
  ],
};
