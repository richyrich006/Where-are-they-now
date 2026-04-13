import type { TeamSeed } from "./types";

export const virginiaTechBasketball2022: TeamSeed = {
  slug: "virginia-tech-basketball-2022",
  name: "Virginia Tech Hokies",
  season: "2021-2022",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2021-2022 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"keve-aluma",firstName:"Keve",lastName:"Aluma",birthYear:1997,hometown:"United States",highSchool:"United States",
      bio:"Senior captain.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"All-ACC. 4th-year player across Wofford and VT.",sourceUrl:"https://en.wikipedia.org/wiki/Keve_Aluma"},
      membership:{role:"PLAYER",jerseyNumber:22,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:15,reboundsPerGame:7,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:15,reboundsPerGame:7,assistsPerGame:2}],
      careerEvents:[],
    },
    {
      slug:"hunter-cattoor",firstName:"Hunter",lastName:"Cattoor",birthYear:2000,hometown:"United States",highSchool:"United States",
      bio:"Junior sharpshooter.",
      status:{occupationType:"STUDENT",currentTitle:"College Player",location:"United States",statusNote:"Elite 3-point shooter.",sourceUrl:"https://en.wikipedia.org/wiki/Hunter_Cattoor"},
      membership:{role:"PLAYER",jerseyNumber:0,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:10.5,reboundsPerGame:3,assistsPerGame:2.5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:10.5,reboundsPerGame:3,assistsPerGame:2.5}],
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
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2021-2022", yearLabel: "2021-2022", sortOrder: 214 },
      ],
      careerEvents: [],
    },
  ],
};
