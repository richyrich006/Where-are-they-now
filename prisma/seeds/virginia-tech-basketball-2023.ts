import type { TeamSeed } from "./types";

export const virginiaTechBasketball2023: TeamSeed = {
  slug: "virginia-tech-basketball-2023",
  name: "Virginia Tech Hokies",
  season: "2022-2023",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2022-2023 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"hunter-cattoor",firstName:"Hunter",lastName:"Cattoor",birthYear:2000,hometown:"United States",highSchool:"United States",
      bio:"Senior shooter.",
      status:{occupationType:"STUDENT",currentTitle:"College Player",location:"United States",statusNote:"VT's career 3-point leader.",sourceUrl:"https://en.wikipedia.org/wiki/Hunter_Cattoor"},
      membership:{role:"PLAYER",jerseyNumber:0,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:13,reboundsPerGame:3.5,assistsPerGame:3},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:13,reboundsPerGame:3.5,assistsPerGame:3}],
      careerEvents:[],
    },
    {
      slug:"grant-basile",firstName:"Grant",lastName:"Basile",birthYear:1999,hometown:"United States",highSchool:"United States",
      bio:"Grad transfer from Wright State.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Productive grad transfer.",sourceUrl:"https://en.wikipedia.org/wiki/Grant_Basile"},
      membership:{role:"PLAYER",jerseyNumber:21,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:14.5,reboundsPerGame:5.5,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:14.5,reboundsPerGame:5.5,assistsPerGame:1.5}],
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
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2022-2023", yearLabel: "2022-2023", sortOrder: 215 },
      ],
      careerEvents: [],
    },
  ],
};
