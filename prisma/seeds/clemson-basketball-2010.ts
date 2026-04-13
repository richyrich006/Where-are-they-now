import type { TeamSeed } from "./types";

export const clemsonBasketball2010: TeamSeed = {
  slug: "clemson-basketball-2010",
  name: "Clemson Tigers",
  season: "2009-2010",
  sport: "Men's Basketball",
  school: "Clemson University",
  conference: "ACC",
  accomplishment: "2009-2010 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  mascotName: "Tiger",
  people: [
    {
      slug:"trevor-booker-clem",firstName:"Trevor",lastName:"Booker",birthYear:1987,hometown:"United States",highSchool:"United States",
      bio:"Junior star. #23 pick in 2010.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"#23 pick. 8 NBA seasons with Wizards, Jazz, Nets, Pacers.",sourceUrl:"https://en.wikipedia.org/wiki/Trevor_Booker"},
      membership:{role:"PLAYER",jerseyNumber:35,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:15,reboundsPerGame:8.5,assistsPerGame:1.5},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:15,reboundsPerGame:8.5,assistsPerGame:1.5}],
      careerEvents:[],
    },
    {
      slug:"demontez-stitt",firstName:"Demontez",lastName:"Stitt",birthYear:1988,hometown:"United States",highSchool:"United States",
      bio:"Senior PG.",
      status:{occupationType:"RETIRED_ATHLETE",currentTitle:"Retired",location:"United States",statusNote:"4-year starter. Played overseas.",sourceUrl:"https://en.wikipedia.org/wiki/Demontez_Stitt"},
      membership:{role:"PLAYER",jerseyNumber:2,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12,reboundsPerGame:3,assistsPerGame:4},
      seasonStats:[{level:"COLLEGE",teamName:"Clemson Tigers",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12,reboundsPerGame:3,assistsPerGame:4}],
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
        { level: "COACHING", teamName: "Clemson Tigers", season: "2009-2010", yearLabel: "2009-2010", sortOrder: 202 },
      ],
      careerEvents: [],
    },
  ],
};
