import type { TeamSeed } from "./types";

export const bostonCollegeBasketball2012: TeamSeed = {
  slug: "boston-college-basketball-2012",
  name: "Boston College Eagles",
  season: "2011-2012",
  sport: "Men's Basketball",
  school: "Boston College",
  conference: "ACC",
  accomplishment: "2011-2012 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/103.png",
  mascotName: "Eagle",
  people: [
    {
      slug: "steve-donahue",
      firstName: "Steve",
      lastName: "Donahue",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Struggled to maintain BC's success.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2014. Later coached at Penn.",
        sourceUrl: "https://en.wikipedia.org/wiki/Steve_Donahue",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2011-2014" },
      seasonStats: [
        { level: "COACHING", teamName: "Boston College Eagles", season: "2011-2012", yearLabel: "2011-2012", sortOrder: 204 },
      ],
      careerEvents: [],
    },
  ],
};
