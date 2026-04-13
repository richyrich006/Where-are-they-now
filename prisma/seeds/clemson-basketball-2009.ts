import type { TeamSeed } from "./types";

export const clemsonBasketball2009: TeamSeed = {
  slug: "clemson-basketball-2009",
  name: "Clemson Tigers",
  season: "2008-2009",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2008-2009 Season",
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2008-2009", yearLabel: "2008-2009", sortOrder: 201 },
      ],
      careerEvents: [],
    },
  ],
};
