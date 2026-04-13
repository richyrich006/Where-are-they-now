import type { TeamSeed } from "./types";

export const virginiaTechBasketball2018: TeamSeed = {
  slug: "virginia-tech-basketball-2018",
  name: "Virginia Tech Hokies",
  season: "2017-2018",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2017-2018 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"nickeil-alexander-walker",firstName:"Nickeil",lastName:"Alexander-Walker",birthYear:1998,hometown:"United States",highSchool:"United States",
      bio:"Freshman star. #17 pick.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Guard",location:"Minneapolis, MN",statusNote:"#17 pick. Shai's cousin. NBA career ongoing.",sourceUrl:"https://en.wikipedia.org/wiki/Nickeil_Alexander-Walker"},
      membership:{role:"PLAYER",jerseyNumber:4,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:16,reboundsPerGame:4,assistsPerGame:3},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:16,reboundsPerGame:4,assistsPerGame:3}],
      careerEvents:[],
    },
    {
      slug:"ahmed-hill",firstName:"Ahmed",lastName:"Hill",birthYear:1996,hometown:"United States",highSchool:"United States",
      bio:"Senior.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"Georgia",statusNote:"4-year player.",sourceUrl:"https://en.wikipedia.org/wiki/Ahmed_Hill"},
      membership:{role:"PLAYER",jerseyNumber:13,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:11.5,reboundsPerGame:3,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:11.5,reboundsPerGame:3,assistsPerGame:1.5}],
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
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2017-2018", yearLabel: "2017-2018", sortOrder: 210 },
      ],
      careerEvents: [],
    },
  ],
};
