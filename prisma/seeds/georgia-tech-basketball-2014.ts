import type { TeamSeed } from "./types";

export const georgiaTechBasketball2014: TeamSeed = {
  slug: "georgia-tech-basketball-2014",
  name: "Georgia Tech Yellow Jackets",
  season: "2013-2014",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2013-2014 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"marcus-georges-hunt",firstName:"Marcus",lastName:"Georges-Hunt",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Junior guard.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Played briefly for Timberwolves.",sourceUrl:"https://en.wikipedia.org/wiki/Marcus_Georges-Hunt"},
      membership:{role:"PLAYER",jerseyNumber:3,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:14,reboundsPerGame:5,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:14,reboundsPerGame:5,assistsPerGame:2}],
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
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2013-2014", yearLabel: "2013-2014", sortOrder: 206 },
      ],
      careerEvents: [],
    },
  ],
};
