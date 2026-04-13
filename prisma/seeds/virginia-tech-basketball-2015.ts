import type { TeamSeed } from "./types";

export const virginiaTechBasketball2015: TeamSeed = {
  slug: "virginia-tech-basketball-2015",
  name: "Virginia Tech Hokies",
  season: "2014-2015",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2014-2015 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"ahmed-hill",firstName:"Ahmed",lastName:"Hill",birthYear:1996,hometown:"United States",highSchool:"United States",
      bio:"Freshman guard.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"Georgia",statusNote:"4-year starter under Buzz Williams.",sourceUrl:"https://en.wikipedia.org/wiki/Ahmed_Hill"},
      membership:{role:"PLAYER",jerseyNumber:13,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:6,reboundsPerGame:2.5,assistsPerGame:1},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:6,reboundsPerGame:2.5,assistsPerGame:1}],
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
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2014-2015", yearLabel: "2014-2015", sortOrder: 207 },
      ],
      careerEvents: [],
    },
  ],
};
