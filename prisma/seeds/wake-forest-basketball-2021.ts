import type { TeamSeed } from "./types";

export const wakeForestBasketball2021: TeamSeed = {
  slug: "wake-forest-basketball-2021",
  name: "Wake Forest Demon Deacons",
  season: "2020-2021",
  sport: "Men's Basketball",
  school: "Wake Forest University",
  conference: "ACC",
  accomplishment: "2020-2021 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  mascotName: "Demon Deacon",
  people: [
    {
      slug:"daivien-williamson",firstName:"Daivien",lastName:"Williamson",birthYear:1999,hometown:"United States",highSchool:"United States",
      bio:"Sophomore guard.",
      status:{occupationType:"OTHER",currentTitle:"Professional",location:"United States",statusNote:"Developed into scorer at Wake Forest.",sourceUrl:"https://en.wikipedia.org/wiki/Daivien_Williamson"},
      membership:{role:"PLAYER",jerseyNumber:4,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:14,reboundsPerGame:2.5,assistsPerGame:2},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:14,reboundsPerGame:2.5,assistsPerGame:2}],
      careerEvents:[],
    },
    {
      slug: "steve-forbes",
      firstName: "Steve",
      lastName: "Forbes",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Built Wake Forest back into NCAA Tournament team. Won 2023 ACC Tournament.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Wake Forest.",
        sourceUrl: "https://en.wikipedia.org/wiki/Steve_Forbes",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2021-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Wake Forest Demon Deacons", season: "2020-2021", yearLabel: "2020-2021", sortOrder: 213 },
      ],
      careerEvents: [],
    },
  ],
};
