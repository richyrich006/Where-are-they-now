import type { TeamSeed } from "./types";

export const clemsonBasketball2009: TeamSeed = {
  slug: "clemson-basketball-2009",
  name: "Clemson Tigers",
  season: "2008-2009",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2008-2009 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"terrence-oglesby",firstName:"Terrence",lastName:"Oglesby",birthYear:1986,hometown:"United States",highSchool:"United States",
      bio:"Senior sharpshooter.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"3-point specialist. Played overseas.",sourceUrl:"https://en.wikipedia.org/wiki/Terrence_Oglesby"},
      membership:{role:"PLAYER",jerseyNumber:24,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:11,reboundsPerGame:2,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:11,reboundsPerGame:2,assistsPerGame:1.5}],
      careerEvents:[],
    },
    {
      slug:"trevor-booker-clem",firstName:"Trevor",lastName:"Booker",birthYear:1987,hometown:"United States",highSchool:"United States",
      bio:"Sophomore forward. Future NBA player.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"#23 pick by Wizards. 8 NBA seasons.",sourceUrl:"https://en.wikipedia.org/wiki/Trevor_Booker"},
      membership:{role:"PLAYER",jerseyNumber:35,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12,reboundsPerGame:7,assistsPerGame:1},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12,reboundsPerGame:7,assistsPerGame:1}],
      careerEvents:[],
    },
    {
      slug: "oliver-purnell",
      firstName: "Oliver",
      lastName: "Purnell",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Coached Clemson to the NCAA Tournament before leaving for DePaul.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Now retired from coaching.",
        sourceUrl: "https://en.wikipedia.org/wiki/Oliver_Purnell",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2010" },
      seasonStats: [
        { level: "COACHING", teamName: "Clemson Tigers", season: "2008-2009", yearLabel: "2008-2009", sortOrder: 201 },
      ],
      careerEvents: [],
    },
  ],
};
