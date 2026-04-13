import type { TeamSeed } from "./types";

export const clemsonBasketball2025: TeamSeed = {
  slug: "clemson-basketball-2025",
  name: "Clemson Tigers",
  season: "2024-2025",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2024-2025 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"chase-hunter",firstName:"Chase",lastName:"Hunter",birthYear:2001,hometown:"United States",highSchool:"United States",
      bio:"5th-yr senior after Elite Eight.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Pro Player",location:"United States",statusNote:"Returned after Elite Eight run.",sourceUrl:"https://en.wikipedia.org/wiki/Chase_Hunter"},
      membership:{role:"PLAYER",jerseyNumber:1,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:14.5,reboundsPerGame:3.5,assistsPerGame:5},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:14.5,reboundsPerGame:3.5,assistsPerGame:5}],
      careerEvents:[],
    },
    {
      slug:"ian-schieffelin",firstName:"Ian",lastName:"Schieffelin",birthYear:2002,hometown:"United States",highSchool:"United States",
      bio:"Senior forward. Do-everything player.",
      status:{occupationType:"STUDENT",currentTitle:"2025 Draft prospect",location:"Clemson, SC",statusNote:"Versatile forward. 2025 draft prospect.",sourceUrl:"https://en.wikipedia.org/wiki/Ian_Schieffelin"},
      membership:{role:"PLAYER",jerseyNumber:5,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12,reboundsPerGame:8,assistsPerGame:3.5},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12,reboundsPerGame:8,assistsPerGame:3.5}],
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2024-2025", yearLabel: "2024-2025", sortOrder: 217 },
      ],
      careerEvents: [],
    },
  ],
};
