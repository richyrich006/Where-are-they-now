import type { TeamSeed } from "./types";

export const clemsonBasketball2023: TeamSeed = {
  slug: "clemson-basketball-2023",
  name: "Clemson Tigers",
  season: "2022-2023",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2022-2023 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"pj-hall-clemson",firstName:"PJ",lastName:"Hall",birthYear:2002,hometown:"United States",highSchool:"United States",
      bio:"Sophomore developing.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Center (two-way)",location:"Charlotte, NC",statusNote:"2024 Elite Eight. Now Hornets.",sourceUrl:"https://en.wikipedia.org/wiki/PJ_Hall"},
      membership:{role:"PLAYER",jerseyNumber:24,position:"Center",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:13,reboundsPerGame:5,assistsPerGame:1},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:13,reboundsPerGame:5,assistsPerGame:1}],
      careerEvents:[],
    },
    {
      slug:"chase-hunter",firstName:"Chase",lastName:"Hunter",birthYear:2001,hometown:"United States",highSchool:"United States",
      bio:"Sophomore PG.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Pro Player",location:"United States",statusNote:"4-year starter. Elite Eight PG.",sourceUrl:"https://en.wikipedia.org/wiki/Chase_Hunter"},
      membership:{role:"PLAYER",jerseyNumber:1,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:10,reboundsPerGame:2.5,assistsPerGame:3.5},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:10,reboundsPerGame:2.5,assistsPerGame:3.5}],
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2022-2023", yearLabel: "2022-2023", sortOrder: 215 },
      ],
      careerEvents: [],
    },
  ],
};
