import type { TeamSeed } from "./types";

export const georgiaTechBasketball2012: TeamSeed = {
  slug: "georgia-tech-basketball-2012",
  name: "Georgia Tech Yellow Jackets",
  season: "2011-2012",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2011-2012 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"glen-rice-jr",firstName:"Glen",lastName:"Rice Jr.",birthYear:1991,hometown:"United States",highSchool:"United States",
      bio:"Junior guard. Son of Glen Rice.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"Son of NBA All-Star Glen Rice. Played briefly for Wizards.",sourceUrl:"https://en.wikipedia.org/wiki/Glen_Rice_Jr."},
      membership:{role:"PLAYER",jerseyNumber:41,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:11,reboundsPerGame:4,assistsPerGame:2.5},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:11,reboundsPerGame:4,assistsPerGame:2.5}],
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
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2011-2012", yearLabel: "2011-2012", sortOrder: 204 },
      ],
      careerEvents: [],
    },
  ],
};
