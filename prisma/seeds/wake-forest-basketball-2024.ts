import type { TeamSeed } from "./types";

export const wakeForestBasketball2024: TeamSeed = {
  slug: "wake-forest-basketball-2024",
  name: "Wake Forest Demon Deacons",
  season: "2023-2024",
  sport: "Men's Basketball",
  school: "Wake Forest University",
  conference: "ACC",
  accomplishment: "2023-2024 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  mascotName: "Demon Deacon",
  people: [
    {
      slug:"hunter-sallis",firstName:"Hunter",lastName:"Sallis",birthYear:2003,hometown:"United States",highSchool:"United States",
      bio:"Junior. First-Team All-ACC.",
      status:{occupationType:"STUDENT",currentTitle:"2025 NBA Draft",location:"United States",statusNote:"2x First-Team All-ACC. First since Tim Duncan.",sourceUrl:"https://en.wikipedia.org/wiki/Hunter_Sallis"},
      membership:{role:"PLAYER",jerseyNumber:22,position:"Guard",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:17,reboundsPerGame:5,assistsPerGame:2.5},
      seasonStats:[{level:"COLLEGE",teamName:"Wake Forest Demon Deacons",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:17,reboundsPerGame:5,assistsPerGame:2.5}],
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
        { level: "COACHING", teamName: "Wake Forest Demon Deacons", season: "2023-2024", yearLabel: "2023-2024", sortOrder: 216 },
      ],
      careerEvents: [],
    },
  ],
};
