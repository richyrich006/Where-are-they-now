import type { TeamSeed } from "./types";

export const wakeForestBasketball2022: TeamSeed = {
  slug: "wake-forest-basketball-2022",
  name: "Wake Forest Demon Deacons",
  season: "2021-2022",
  sport: "Men's Basketball",
  school: "Wake Forest University",
  conference: "ACC",
  accomplishment: "2021-2022 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  mascotName: "Demon Deacon",
  people: [
    {
      slug:"jake-laravia",firstName:"Jake",lastName:"LaRavia",birthYear:2001,hometown:"United States",highSchool:"United States",
      bio:"Sophomore. #19 pick by Grizzlies.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Forward",location:"Memphis, TN",statusNote:"#19 pick by Grizzlies in 2022. NBA rotation player.",sourceUrl:"https://en.wikipedia.org/wiki/Jake_LaRavia"},
      membership:{role:"PLAYER",jerseyNumber:0,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:14.5,reboundsPerGame:6.5,assistsPerGame:3.5},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:14.5,reboundsPerGame:6.5,assistsPerGame:3.5}],
      careerEvents:[],
    },
    {
      slug:"alondes-williams-wf",firstName:"Alondes",lastName:"Williams",birthYear:1999,hometown:"United States",highSchool:"United States",
      bio:"Grad transfer. All-ACC.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Pro Player",location:"United States",statusNote:"All-ACC as grad transfer from Oklahoma.",sourceUrl:"https://en.wikipedia.org/wiki/Alondes_Williams"},
      membership:{role:"PLAYER",jerseyNumber:10,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:18.5,reboundsPerGame:6.5,assistsPerGame:5},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:18.5,reboundsPerGame:6.5,assistsPerGame:5}],
      careerEvents:[],
    },
    {
      slug: "steve-forbes",
      firstName: "Steve",
      lastName: "Forbes",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Built Wake Forest back into NCAA Tournament team. Won 2023 ACC Tournament.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Wake Forest.",
        sourceUrl: "https://en.wikipedia.org/wiki/Steve_Forbes",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2021-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Wake Forest Demon Deacons", season: "2021-2022", yearLabel: "2021-2022", sortOrder: 214 },
      ],
      careerEvents: [],
    },
  ],
};
