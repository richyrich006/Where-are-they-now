import type { TeamSeed } from "./types";

export const virginiaTechBasketball2020: TeamSeed = {
  slug: "virginia-tech-basketball-2020",
  name: "Virginia Tech Hokies",
  season: "2019-2020",
  sport: "Men's Basketball",
  school: "Virginia Tech",
  conference: "ACC",
  accomplishment: "2019-2020 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  mascotName: "Hokie",
  people: [
    {
      slug:"tyrece-radford",firstName:"Tyrece",lastName:"Radford",birthYear:2000,hometown:"United States",highSchool:"United States",
      bio:"Sophomore guard.",
      status:{occupationType:"STUDENT",currentTitle:"College Player",location:"United States",statusNote:"Transferred to Texas A&M. ACC contributor.",sourceUrl:"https://en.wikipedia.org/wiki/Tyrece_Radford"},
      membership:{role:"PLAYER",jerseyNumber:23,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:11,reboundsPerGame:5,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:11,reboundsPerGame:5,assistsPerGame:2}],
      careerEvents:[],
    },
    {
      slug:"nahiem-alleyne",firstName:"Nahiem",lastName:"Alleyne",birthYear:2000,hometown:"United States",highSchool:"United States",
      bio:"Sophomore guard.",
      status:{occupationType:"STUDENT",currentTitle:"College Player",location:"United States",statusNote:"Played at VT then UConn.",sourceUrl:"https://en.wikipedia.org/wiki/Nahiem_Alleyne"},
      membership:{role:"PLAYER",jerseyNumber:4,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:10,reboundsPerGame:4,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Virginia Tech Hokies",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:10,reboundsPerGame:4,assistsPerGame:2}],
      careerEvents:[],
    },
    {
      slug: "mike-young",
      firstName: "Mike",
      lastName: "Young",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Wofford legend who has maintained VT as an NCAA Tournament program.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Virginia Tech.",
        sourceUrl: "https://en.wikipedia.org/wiki/Mike_Young",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2020-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Virginia Tech Hokies", season: "2019-2020", yearLabel: "2019-2020", sortOrder: 212 },
      ],
      careerEvents: [],
    },
  ],
};
