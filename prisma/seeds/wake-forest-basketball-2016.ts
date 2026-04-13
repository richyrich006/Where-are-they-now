import type { TeamSeed } from "./types";

export const wakeForestBasketball2016: TeamSeed = {
  slug: "wake-forest-basketball-2016",
  name: "Wake Forest Demon Deacons",
  season: "2015-2016",
  sport: "Men's Basketball",
  school: "Wake Forest University",
  conference: "ACC",
  accomplishment: "2015-2016 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  mascotName: "Demon Deacon",
  people: [
    {
      slug:"john-collins-wf",firstName:"John",lastName:"Collins",birthYear:1997,hometown:"United States",highSchool:"United States",
      bio:"Freshman. Future #19 pick and NBA All-Star candidate.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Forward",location:"United States",statusNote:"#19 pick by Hawks. Averaged 20+ PPG. $125M contract.",sourceUrl:"https://en.wikipedia.org/wiki/John_Collins"},
      membership:{role:"PLAYER",jerseyNumber:20,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:7.3,reboundsPerGame:4,assistsPerGame:0.5},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:7.3,reboundsPerGame:4,assistsPerGame:0.5}],
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
        { level: "COACHING", teamName: "Wake Forest Demon Deacons", season: "2015-2016", yearLabel: "2015-2016", sortOrder: 208 },
      ],
      careerEvents: [],
    },
  ],
};
