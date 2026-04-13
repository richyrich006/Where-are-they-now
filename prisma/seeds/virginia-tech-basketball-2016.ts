import type { TeamSeed } from "./types";

export const virginiaTechBasketball2016: TeamSeed = {
  slug: "virginia-tech-basketball-2016",
  name: "Virginia Tech Hokies",
  season: "2015-2016",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2015-2016 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"zach-leday",firstName:"Zach",lastName:"LeDay",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Junior forward. Transfer from USF.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Pro Player",location:"Overseas",statusNote:"Won EuroLeague title with Olympiacos.",sourceUrl:"https://en.wikipedia.org/wiki/Zach_LeDay"},
      membership:{role:"PLAYER",jerseyNumber:32,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12.5,reboundsPerGame:7,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12.5,reboundsPerGame:7,assistsPerGame:1.5}],
      careerEvents:[],
    },
    {
      slug:"seth-allen-vt",firstName:"Seth",lastName:"Allen",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Senior guard. Maryland transfer.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Solid veteran leader.",sourceUrl:"https://en.wikipedia.org/wiki/Seth_Allen"},
      membership:{role:"PLAYER",jerseyNumber:4,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:14,reboundsPerGame:3,assistsPerGame:3.5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:14,reboundsPerGame:3,assistsPerGame:3.5}],
      careerEvents:[],
    },
    {
      slug: "buzz-williams",
      firstName: "Buzz",
      lastName: "Williams",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Transformed VT basketball. Led Hokies to 2019 Sweet 16 — deepest run since 1965.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Now HC at Texas A&M.",
        sourceUrl: "https://en.wikipedia.org/wiki/Buzz_Williams",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2015-2019" },
      seasonStats: [
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2015-2016", yearLabel: "2015-2016", sortOrder: 208 },
      ],
      careerEvents: [],
    },
  ],
};
