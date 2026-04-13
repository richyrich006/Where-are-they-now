import type { TeamSeed } from "./types";

export const wakeForestBasketball2020: TeamSeed = {
  slug: "wake-forest-basketball-2020",
  name: "Wake Forest Demon Deacons",
  season: "2019-2020",
  sport: "Men's Basketball",
  school: "Wake Forest University",
  conference: "ACC",
  accomplishment: "2019-2020 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  mascotName: "Demon Deacon",
  people: [
    {
      slug:"brandon-childress",firstName:"Brandon",lastName:"Childress",birthYear:1997,hometown:"United States",highSchool:"United States",
      bio:"Senior captain.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Son of NFL player Randall Childress.",sourceUrl:"https://en.wikipedia.org/wiki/Brandon_Childress"},
      membership:{role:"PLAYER",jerseyNumber:0,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:13,reboundsPerGame:2.5,assistsPerGame:4},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:13,reboundsPerGame:2.5,assistsPerGame:4}],
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
        { level: "COACHING", teamName: "Wake Forest Demon Deacons", season: "2019-2020", yearLabel: "2019-2020", sortOrder: 212 },
      ],
      careerEvents: [],
    },
  ],
};
