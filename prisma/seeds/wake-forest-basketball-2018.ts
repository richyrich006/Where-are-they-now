import type { TeamSeed } from "./types";

export const wakeForestBasketball2018: TeamSeed = {
  slug: "wake-forest-basketball-2018",
  name: "Wake Forest Demon Deacons",
  season: "2017-2018",
  sport: "Men's Basketball",
  school: "Wake Forest University",
  conference: "ACC",
  accomplishment: "2017-2018 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  mascotName: "Demon Deacon",
  people: [
    {
      slug:"bryant-crawford",firstName:"Bryant",lastName:"Crawford",birthYear:1996,hometown:"United States",highSchool:"United States",
      bio:"Junior guard and floor general.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"3-year starter at Wake Forest.",sourceUrl:"https://en.wikipedia.org/wiki/Bryant_Crawford"},
      membership:{role:"PLAYER",jerseyNumber:13,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:15.5,reboundsPerGame:4,assistsPerGame:6},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:15.5,reboundsPerGame:4,assistsPerGame:6}],
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
        { level: "COACHING", teamName: "Wake Forest Demon Deacons", season: "2017-2018", yearLabel: "2017-2018", sortOrder: 210 },
      ],
      careerEvents: [],
    },
  ],
};
