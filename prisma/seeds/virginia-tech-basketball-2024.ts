import type { TeamSeed } from "./types";

export const virginiaTechBasketball2024: TeamSeed = {
  slug: "virginia-tech-basketball-2024",
  name: "Virginia Tech Hokies",
  season: "2023-2024",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2023-2024 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"sean-pedulla",firstName:"Sean",lastName:"Pedulla",birthYear:2001,hometown:"United States",highSchool:"United States",
      bio:"Junior guard. All-ACC candidate.",
      status:{occupationType:"STUDENT",currentTitle:"College Player",location:"United States",statusNote:"Dynamic guard. Transferred from VT.",sourceUrl:"https://en.wikipedia.org/wiki/Sean_Pedulla"},
      membership:{role:"PLAYER",jerseyNumber:3,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:15,reboundsPerGame:3,assistsPerGame:4.5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:15,reboundsPerGame:3,assistsPerGame:4.5}],
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
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2023-2024", yearLabel: "2023-2024", sortOrder: 216 },
      ],
      careerEvents: [],
    },
  ],
};
