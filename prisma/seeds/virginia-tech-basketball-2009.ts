import type { TeamSeed } from "./types";

export const virginiaTechBasketball2009: TeamSeed = {
  slug: "virginia-tech-basketball-2009",
  name: "Virginia Tech Hokies",
  season: "2008-2009",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2008-2009 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"malcolm-delaney",firstName:"Malcolm",lastName:"Delaney",birthYear:1989,hometown:"United States",highSchool:"United States",
      bio:"Sophomore guard. Future EuroLeague star.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Pro Player",location:"Overseas",statusNote:"Played for Hawks. Won EuroLeague MVP. Long career in Europe.",sourceUrl:"https://en.wikipedia.org/wiki/Malcolm_Delaney"},
      membership:{role:"PLAYER",jerseyNumber:23,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:14,reboundsPerGame:3,assistsPerGame:4.5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:14,reboundsPerGame:3,assistsPerGame:4.5}],
      careerEvents:[],
    },
    {
      slug:"jeff-allen-vt",firstName:"Jeff",lastName:"Allen",birthYear:1987,hometown:"United States",highSchool:"United States",
      bio:"Senior forward.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Played overseas.",sourceUrl:"https://en.wikipedia.org/wiki/Jeff_Allen"},
      membership:{role:"PLAYER",jerseyNumber:0,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12,reboundsPerGame:7,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12,reboundsPerGame:7,assistsPerGame:1.5}],
      careerEvents:[],
    },
    {
      slug: "seth-greenberg",
      firstName: "Seth",
      lastName: "Greenberg",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Energetic coach who made VT competitive but couldn't break through to NCAA Tournament consistently.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Now ESPN analyst.",
        sourceUrl: "https://en.wikipedia.org/wiki/Seth_Greenberg",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2012" },
      seasonStats: [
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2008-2009", yearLabel: "2008-2009", sortOrder: 201 },
      ],
      careerEvents: [],
    },
  ],
};
