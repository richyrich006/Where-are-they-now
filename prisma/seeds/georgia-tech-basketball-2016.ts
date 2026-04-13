import type { TeamSeed } from "./types";

export const georgiaTechBasketball2016: TeamSeed = {
  slug: "georgia-tech-basketball-2016",
  name: "Georgia Tech Yellow Jackets",
  season: "2015-2016",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2015-2016 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"josh-okogie",firstName:"Josh",lastName:"Okogie",birthYear:1998,hometown:"United States",highSchool:"United States",
      bio:"Freshman guard. Future #20 pick.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Guard",location:"United States",statusNote:"#20 pick by Timberwolves. 5+ NBA seasons.",sourceUrl:"https://en.wikipedia.org/wiki/Josh_Okogie"},
      membership:{role:"PLAYER",jerseyNumber:5,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:8,reboundsPerGame:4,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:8,reboundsPerGame:4,assistsPerGame:1.5}],
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
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2015-2016", yearLabel: "2015-2016", sortOrder: 208 },
      ],
      careerEvents: [],
    },
  ],
};
