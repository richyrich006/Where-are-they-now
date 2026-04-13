import type { TeamSeed } from "./types";

export const wakeForestBasketball2013: TeamSeed = {
  slug: "wake-forest-basketball-2013",
  name: "Wake Forest Demon Deacons",
  season: "2012-2013",
  sport: "Men's Basketball",
  school: "Wake Forest University",
  conference: "ACC",
  accomplishment: "2012-2013 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  mascotName: "Demon Deacon",
  people: [
    {
      slug:"cj-harris-wf",firstName:"C.J.",lastName:"Harris",birthYear:1989,hometown:"United States",highSchool:"United States",
      bio:"5th-year senior.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Led Wake in scoring final 2 years.",sourceUrl:"https://en.wikipedia.org/wiki/C.J._Harris"},
      membership:{role:"PLAYER",jerseyNumber:11,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:14.5,reboundsPerGame:3,assistsPerGame:3},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:14.5,reboundsPerGame:3,assistsPerGame:3}],
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
        { level: "COACHING", teamName: "Wake Forest Demon Deacons", season: "2012-2013", yearLabel: "2012-2013", sortOrder: 205 },
      ],
      careerEvents: [],
    },
  ],
};
