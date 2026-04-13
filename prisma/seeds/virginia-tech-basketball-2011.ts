import type { TeamSeed } from "./types";

export const virginiaTechBasketball2011: TeamSeed = {
  slug: "virginia-tech-basketball-2011",
  name: "Virginia Tech Hokies",
  season: "2010-2011",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2010-2011 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"malcolm-delaney",firstName:"Malcolm",lastName:"Delaney",birthYear:1989,hometown:"United States",highSchool:"United States",
      bio:"Senior. All-ACC.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Pro Player",location:"Overseas",statusNote:"NBA stint with Hawks. EuroLeague MVP.",sourceUrl:"https://en.wikipedia.org/wiki/Malcolm_Delaney"},
      membership:{role:"PLAYER",jerseyNumber:23,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:19.5,reboundsPerGame:4,assistsPerGame:5.5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:19.5,reboundsPerGame:4,assistsPerGame:5.5}],
      careerEvents:[],
    },
    {
      slug:"dorenzo-hudson",firstName:"Dorenzo",lastName:"Hudson",birthYear:1989,hometown:"United States",highSchool:"United States",
      bio:"Senior guard.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"4-year starter. Played overseas briefly.",sourceUrl:"https://en.wikipedia.org/wiki/Dorenzo_Hudson"},
      membership:{role:"PLAYER",jerseyNumber:5,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:15,reboundsPerGame:4,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:15,reboundsPerGame:4,assistsPerGame:2}],
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
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2010-2011", yearLabel: "2010-2011", sortOrder: 203 },
      ],
      careerEvents: [],
    },
  ],
};
