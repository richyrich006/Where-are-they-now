import type { TeamSeed } from "./types";

export const virginiaTechBasketball2025: TeamSeed = {
  slug: "virginia-tech-basketball-2025",
  name: "Virginia Tech Hokies",
  season: "2024-2025",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2024-2025 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"myles-wilmoth",firstName:"Myles",lastName:"Wilmoth",birthYear:2001,hometown:"United States",highSchool:"United States",
      bio:"Senior forward.",
      status:{occupationType:"STUDENT",currentTitle:"College Player",location:"Blacksburg, VA",statusNote:"Key contributor under Mike Young.",sourceUrl:"https://en.wikipedia.org/wiki/Myles_Wilmoth"},
      membership:{role:"PLAYER",jerseyNumber:24,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:11,reboundsPerGame:6,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:11,reboundsPerGame:6,assistsPerGame:1.5}],
      careerEvents:[],
    },
    {
      slug: "mike-young",
      firstName: "Mike",
      lastName: "Young",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Wofford legend who has maintained VT as an NCAA Tournament program.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Virginia Tech.",
        sourceUrl: "https://en.wikipedia.org/wiki/Mike_Young",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2020-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2024-2025", yearLabel: "2024-2025", sortOrder: 217 },
      ],
      careerEvents: [],
    },
  ],
};
