import type { TeamSeed } from "./types";

export const wakeForestBasketball2010: TeamSeed = {
  slug: "wake-forest-basketball-2010",
  name: "Wake Forest Demon Deacons",
  season: "2009-2010",
  sport: "Men's Basketball",
  school: "Wake Forest University",
  conference: "ACC",
  accomplishment: "2009-2010 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  mascotName: "Demon Deacon",
  people: [
    {
      slug:"al-farouq-aminu",firstName:"Al-Farouq",lastName:"Aminu",birthYear:1990,hometown:"United States",highSchool:"United States",
      bio:"Freshman. #8 pick by Clippers.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"#8 pick. 10 NBA seasons with Clippers, Pelicans, Blazers, Magic.",sourceUrl:"https://en.wikipedia.org/wiki/Al-Farouq_Aminu"},
      membership:{role:"PLAYER",jerseyNumber:1,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12,reboundsPerGame:6.5,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12,reboundsPerGame:6.5,assistsPerGame:1.5}],
      careerEvents:[],
    },
    {
      slug:"ishmael-smith",firstName:"Ishmael",lastName:"Smith",birthYear:1988,hometown:"United States",highSchool:"United States",
      bio:"Senior PG.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Played briefly in NBA and overseas.",sourceUrl:"https://en.wikipedia.org/wiki/Ishmael_Smith"},
      membership:{role:"PLAYER",jerseyNumber:10,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12,reboundsPerGame:3,assistsPerGame:4.5},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12,reboundsPerGame:3,assistsPerGame:4.5}],
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
        { level: "COACHING", teamName: "Wake Forest Demon Deacons", season: "2009-2010", yearLabel: "2009-2010", sortOrder: 202 },
      ],
      careerEvents: [],
    },
  ],
};
