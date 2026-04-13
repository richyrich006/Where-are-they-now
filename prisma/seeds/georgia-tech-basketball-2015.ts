import type { TeamSeed } from "./types";

export const georgiaTechBasketball2015: TeamSeed = {
  slug: "georgia-tech-basketball-2015",
  name: "Georgia Tech Yellow Jackets",
  season: "2014-2015",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2014-2015 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"marcus-georges-hunt",firstName:"Marcus",lastName:"Georges-Hunt",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Senior captain.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Brief NBA stint with Timberwolves.",sourceUrl:"https://en.wikipedia.org/wiki/Marcus_Georges-Hunt"},
      membership:{role:"PLAYER",jerseyNumber:3,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:15,reboundsPerGame:5,assistsPerGame:2.5},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:15,reboundsPerGame:5,assistsPerGame:2.5}],
      careerEvents:[],
    },
    {
      slug: "brian-gregory",
      firstName: "Brian",
      lastName: "Gregory",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Struggled to rebuild Georgia Tech basketball.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2016.",
        sourceUrl: "https://en.wikipedia.org/wiki/Brian_Gregory",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2012-2016" },
      seasonStats: [
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2014-2015", yearLabel: "2014-2015", sortOrder: 207 },
      ],
      careerEvents: [],
    },
  ],
};
