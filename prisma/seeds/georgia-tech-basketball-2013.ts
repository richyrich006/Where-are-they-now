import type { TeamSeed } from "./types";

export const georgiaTechBasketball2013: TeamSeed = {
  slug: "georgia-tech-basketball-2013",
  name: "Georgia Tech Yellow Jackets",
  season: "2012-2013",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2012-2013 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"robert-carter",firstName:"Robert",lastName:"Carter",birthYear:1993,hometown:"United States",highSchool:"United States",
      bio:"Sophomore forward.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Transferred to Maryland.",sourceUrl:"https://en.wikipedia.org/wiki/Robert_Carter"},
      membership:{role:"PLAYER",jerseyNumber:4,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:10,reboundsPerGame:6,assistsPerGame:1},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:10,reboundsPerGame:6,assistsPerGame:1}],
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
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2012-2013", yearLabel: "2012-2013", sortOrder: 205 },
      ],
      careerEvents: [],
    },
  ],
};
