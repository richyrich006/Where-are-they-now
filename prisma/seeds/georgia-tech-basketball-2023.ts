import type { TeamSeed } from "./types";

export const georgiaTechBasketball2023: TeamSeed = {
  slug: "georgia-tech-basketball-2023",
  name: "Georgia Tech Yellow Jackets",
  season: "2022-2023",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2022-2023 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"miles-kelly",firstName:"Miles",lastName:"Kelly",birthYear:2002,hometown:"United States",highSchool:"United States",
      bio:"Sophomore guard.",
      status:{occupationType:"STUDENT",currentTitle:"College Player",location:"United States",statusNote:"Emerging scorer at GT.",sourceUrl:"https://en.wikipedia.org/wiki/Miles_Kelly"},
      membership:{role:"PLAYER",jerseyNumber:13,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:13,reboundsPerGame:4,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:13,reboundsPerGame:4,assistsPerGame:2}],
      careerEvents:[],
    },
    {
      slug: "josh-pastner",
      firstName: "Josh",
      lastName: "Pastner",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Former Memphis HC. Led GT to 2021 ACC Tournament title.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2024.",
        sourceUrl: "https://en.wikipedia.org/wiki/Josh_Pastner",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2017-2024" },
      seasonStats: [
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2022-2023", yearLabel: "2022-2023", sortOrder: 215 },
      ],
      careerEvents: [],
    },
  ],
};
