import type { TeamSeed } from "./types";

export const syracuseBasketball2019: TeamSeed = {
  slug: "syracuse-basketball-2019",
  name: "Syracuse Orange",
  season: "2018-2019",
  sport: "Men's Basketball",
  school: "Syracuse University",
  conference: "ACC",
  accomplishment: "2018-2019 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/183.png",
  mascotName: "Orange",
  people: [
    {
      slug: "jim-boeheim",
      firstName: "Jim",
      lastName: "Boeheim",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Legendary coach with 1,015 career wins. 2003 champion. 2-3 zone architect. Retired after 47 seasons.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Retired 2023. Head Coach Emeritus at Syracuse.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jim_Boeheim",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2023" },
      seasonStats: [
        { level: "COACHING", teamName: "Syracuse Orange", season: "2018-2019", yearLabel: "2018-2019", sortOrder: 211 },
      ],
      careerEvents: [],
    },
  ],
};
