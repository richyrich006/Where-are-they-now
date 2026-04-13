import type { TeamSeed } from "./types";

export const wakeForestBasketball2017: TeamSeed = {
  slug: "wake-forest-basketball-2017",
  name: "Wake Forest Demon Deacons",
  season: "2016-2017",
  sport: "Men's Basketball",
  school: "Wake Forest University",
  conference: "ACC",
  accomplishment: "2016-2017 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  mascotName: "Demon Deacon",
  people: [
    {
      slug:"john-collins-wf",firstName:"John",lastName:"Collins",birthYear:1997,hometown:"United States",highSchool:"United States",
      bio:"Sophomore star. #19 pick.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Forward",location:"United States",statusNote:"#19 pick. $125M contract with Hawks/Jazz/Spurs.",sourceUrl:"https://en.wikipedia.org/wiki/John_Collins"},
      membership:{role:"PLAYER",jerseyNumber:20,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:15,reboundsPerGame:7.5,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:15,reboundsPerGame:7.5,assistsPerGame:1.5}],
      careerEvents:[],
    },
    {
      slug:"bryant-crawford",firstName:"Bryant",lastName:"Crawford",birthYear:1996,hometown:"United States",highSchool:"United States",
      bio:"Sophomore guard.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"3-year starter. Played overseas.",sourceUrl:"https://en.wikipedia.org/wiki/Bryant_Crawford"},
      membership:{role:"PLAYER",jerseyNumber:13,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:14,reboundsPerGame:3.5,assistsPerGame:5.5},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:14,reboundsPerGame:3.5,assistsPerGame:5.5}],
      careerEvents:[],
    },
    {
      slug: "danny-manning",
      firstName: "Danny",
      lastName: "Manning",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Former Kansas legend and #1 pick who coached Wake Forest for 6 seasons.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2020. Now assistant at Louisville.",
        sourceUrl: "https://en.wikipedia.org/wiki/Danny_Manning",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2015-2020" },
      seasonStats: [
        { level: "COACHING", teamName: "Wake Forest Demon Deacons", season: "2016-2017", yearLabel: "2016-2017", sortOrder: 209 },
      ],
      careerEvents: [],
    },
  ],
};
