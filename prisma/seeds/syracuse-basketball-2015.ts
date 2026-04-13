import type { TeamSeed } from "./types";

export const syracuseBasketball2015: TeamSeed = {
  slug: "syracuse-basketball-2015",
  name: "Syracuse Orange",
  season: "2014-2015",
  sport: "Men's Basketball",
  school: "Syracuse University",
  conference: "ACC",
  accomplishment: "2014-2015 Season",
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
        { level: "COACHING", teamName: "Syracuse Orange", season: "2014-2015", yearLabel: "2014-2015", sortOrder: 207 },
      ],
      careerEvents: [],
    },
  ],
};
