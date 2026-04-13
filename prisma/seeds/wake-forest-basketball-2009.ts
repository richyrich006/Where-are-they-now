import type { TeamSeed } from "./types";

export const wakeForestBasketball2009: TeamSeed = {
  slug: "wake-forest-basketball-2009",
  name: "Wake Forest Demon Deacons",
  season: "2008-2009",
  sport: "Men's Basketball",
  school: "Wake Forest University",
  conference: "ACC",
  accomplishment: "2008-2009 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  mascotName: "Demon Deacon",
  people: [
    {
      slug:"jeff-teague-wf",firstName:"Jeff",lastName:"Teague",birthYear:1988,hometown:"United States",highSchool:"United States",
      bio:"Sophomore. #19 pick. 13-yr NBA career.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Guard",location:"United States",statusNote:"#19 pick by Hawks. 13 NBA seasons. 3x 15+ PPG.",sourceUrl:"https://en.wikipedia.org/wiki/Jeff_Teague"},
      membership:{role:"PLAYER",jerseyNumber:0,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:18,reboundsPerGame:3,assistsPerGame:4},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:18,reboundsPerGame:3,assistsPerGame:4}],
      careerEvents:[],
    },
    {
      slug:"james-johnson-wf",firstName:"James",lastName:"Johnson",birthYear:1987,hometown:"United States",highSchool:"United States",
      bio:"Senior forward. Played 13 NBA seasons.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Undrafted but 13 NBA seasons. Known for martial arts.",sourceUrl:"https://en.wikipedia.org/wiki/James_Johnson"},
      membership:{role:"PLAYER",jerseyNumber:1,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:11,reboundsPerGame:6,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:11,reboundsPerGame:6,assistsPerGame:2}],
      careerEvents:[],
    },
    {
      slug: "dino-gaudio",
      firstName: "Dino",
      lastName: "Gaudio",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Interim coach after Skip Prosser's passing and Jeff Bzdelik's tenure.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Left coaching. Later involved in legal issues.",
        sourceUrl: "https://en.wikipedia.org/wiki/Dino_Gaudio",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2010" },
      seasonStats: [
        { level: "COACHING", teamName: "Wake Forest Demon Deacons", season: "2008-2009", yearLabel: "2008-2009", sortOrder: 201 },
      ],
      careerEvents: [],
    },
  ],
};
