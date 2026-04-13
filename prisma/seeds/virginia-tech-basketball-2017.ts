import type { TeamSeed } from "./types";

export const virginiaTechBasketball2017: TeamSeed = {
  slug: "virginia-tech-basketball-2017",
  name: "Virginia Tech Hokies",
  season: "2016-2017",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2016-2017 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"zach-leday",firstName:"Zach",lastName:"LeDay",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Senior. All-ACC.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Pro Player",location:"Overseas",statusNote:"EuroLeague champion with Olympiacos.",sourceUrl:"https://en.wikipedia.org/wiki/Zach_LeDay"},
      membership:{role:"PLAYER",jerseyNumber:32,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:16,reboundsPerGame:7.5,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:16,reboundsPerGame:7.5,assistsPerGame:2}],
      careerEvents:[],
    },
    {
      slug:"ahmed-hill",firstName:"Ahmed",lastName:"Hill",birthYear:1996,hometown:"United States",highSchool:"United States",
      bio:"Junior shooter.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"Georgia",statusNote:"Became key starter.",sourceUrl:"https://en.wikipedia.org/wiki/Ahmed_Hill"},
      membership:{role:"PLAYER",jerseyNumber:13,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:10.5,reboundsPerGame:3,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:10.5,reboundsPerGame:3,assistsPerGame:1.5}],
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
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2016-2017", yearLabel: "2016-2017", sortOrder: 209 },
      ],
      careerEvents: [],
    },
  ],
};
