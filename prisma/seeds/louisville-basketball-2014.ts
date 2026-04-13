import type { TeamSeed } from "./types";

export const louisvilleBasketball2014: TeamSeed = {
  slug: "louisville-basketball-2014",
  name: "Louisville Cardinals",
  season: "2013-2014",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2013-2014 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "rick-pitino",
      firstName: "Rick",
      lastName: "Pitino",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Hall of Fame coach who won the 2013 title (vacated). First coach to win championships at two schools.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2017. Now HC at St. John's — back-to-back Big East champs.",
        sourceUrl: "https://en.wikipedia.org/wiki/Rick_Pitino",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2017" },
      seasonStats: [
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2013-2014", yearLabel: "2013-2014", sortOrder: 206 },
      ],
      careerEvents: [],
    },
  ],
};
