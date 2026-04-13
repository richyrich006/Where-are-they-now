import type { TeamSeed } from "./types";

export const wakeForestBasketball2011: TeamSeed = {
  slug: "wake-forest-basketball-2011",
  name: "Wake Forest Demon Deacons",
  season: "2010-2011",
  sport: "Men's Basketball",
  school: "Wake Forest University",
  conference: "ACC",
  accomplishment: "2010-2011 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  mascotName: "Demon Deacon",
  people: [
    {
      slug:"al-farouq-aminu",firstName:"Al-Farouq",lastName:"Aminu",birthYear:1990,hometown:"United States",highSchool:"United States",
      bio:"Sophomore.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"#8 pick. 10 NBA seasons.",sourceUrl:"https://en.wikipedia.org/wiki/Al-Farouq_Aminu"},
      membership:{role:"PLAYER",jerseyNumber:1,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12.5,reboundsPerGame:7,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12.5,reboundsPerGame:7,assistsPerGame:1.5}],
      careerEvents:[],
    },
    {
      slug: "jeff-bzdelik",
      firstName: "Jeff",
      lastName: "Bzdelik",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Defensive-minded coach who struggled to win at Wake Forest.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2014. Later NBA assistant.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jeff_Bzdelik",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2011-2014" },
      seasonStats: [
        { level: "COACHING", teamName: "Wake Forest Demon Deacons", season: "2010-2011", yearLabel: "2010-2011", sortOrder: 203 },
      ],
      careerEvents: [],
    },
  ],
};
