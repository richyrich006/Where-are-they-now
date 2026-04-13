import type { TeamSeed } from "./types";

export const georgiaTechBasketball2009: TeamSeed = {
  slug: "georgia-tech-basketball-2009",
  name: "Georgia Tech Yellow Jackets",
  season: "2008-2009",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2008-2009 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"gani-lawal",firstName:"Gani",lastName:"Lawal",birthYear:1988,hometown:"United States",highSchool:"United States",
      bio:"Sophomore forward from Nigeria.",
      status:{occupationType:"ACTIVE_PRO_ATHLETE",currentTitle:"Pro Player",location:"South America",statusNote:"#46 pick by Suns. Nigerian national team.",sourceUrl:"https://en.wikipedia.org/wiki/Gani_Lawal"},
      membership:{role:"PLAYER",jerseyNumber:31,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:11,reboundsPerGame:7.5,assistsPerGame:0.5},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:11,reboundsPerGame:7.5,assistsPerGame:0.5}],
      careerEvents:[],
    },
    {
      slug:"lewis-clinch",firstName:"Lewis",lastName:"Clinch",birthYear:1988,hometown:"United States",highSchool:"United States",
      bio:"Junior guard.",
      status:{occupationType:"OTHER",currentTitle:"Professional",location:"United States",statusNote:"Role player at GT.",sourceUrl:"https://en.wikipedia.org/wiki/Lewis_Clinch"},
      membership:{role:"PLAYER",jerseyNumber:30,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:8,reboundsPerGame:2,assistsPerGame:3},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:8,reboundsPerGame:2,assistsPerGame:3}],
      careerEvents:[],
    },
    {
      slug: "paul-hewitt",
      firstName: "Paul",
      lastName: "Hewitt",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Led Georgia Tech to the 2004 title game but program declined.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2011. Later coached at George Mason.",
        sourceUrl: "https://en.wikipedia.org/wiki/Paul_Hewitt",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2011" },
      seasonStats: [
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2008-2009", yearLabel: "2008-2009", sortOrder: 201 },
      ],
      careerEvents: [],
    },
  ],
};
