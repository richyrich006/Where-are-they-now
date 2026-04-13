import type { TeamSeed } from "./types";

export const clemsonBasketball2010: TeamSeed = {
  slug: "clemson-basketball-2010",
  name: "Clemson Tigers",
  season: "2009-2010",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2009-2010 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug: "oliver-purnell",
      firstName: "Oliver",
      lastName: "Purnell",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Coached Clemson to the NCAA Tournament before leaving for DePaul.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Now retired from coaching.",
        sourceUrl: "https://en.wikipedia.org/wiki/Oliver_Purnell",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2010" },
      seasonStats: [
        { level: "COACHING", teamName: "Clemson Tigers", season: "2009-2010", yearLabel: "2009-2010", sortOrder: 202 },
      ],
      careerEvents: [],
    },
  ],
};
