import type { TeamSeed } from "./types";

export const clemsonBasketball2022: TeamSeed = {
  slug: "clemson-basketball-2022",
  name: "Clemson Tigers",
  season: "2021-2022",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2021-2022 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"pj-hall-clemson",firstName:"PJ",lastName:"Hall",birthYear:2002,hometown:"United States",highSchool:"United States",
      bio:"Freshman center emerging.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Center (two-way)",location:"Charlotte, NC",statusNote:"Now Hornets two-way contract. 2024 Elite Eight star.",sourceUrl:"https://en.wikipedia.org/wiki/PJ_Hall"},
      membership:{role:"PLAYER",jerseyNumber:24,position:"Center",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:8,reboundsPerGame:4,assistsPerGame:0.5},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:8,reboundsPerGame:4,assistsPerGame:0.5}],
      careerEvents:[],
    },
    {
      slug: "brad-brownell",
      firstName: "Brad",
      lastName: "Brownell",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Longest-tenured ACC coach. Led Clemson to first Elite Eight since 1980 in 2024.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Clemson.",
        sourceUrl: "https://en.wikipedia.org/wiki/Brad_Brownell",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2011-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Clemson Tigers", season: "2021-2022", yearLabel: "2021-2022", sortOrder: 214 },
      ],
      careerEvents: [],
    },
  ],
};
