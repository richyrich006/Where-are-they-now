import type { TeamSeed } from "./types";

export const georgiaTechBasketball2025: TeamSeed = {
  slug: "georgia-tech-basketball-2025",
  name: "Georgia Tech Yellow Jackets",
  season: "2024-2025",
  sport: "Men's Basketball",
  school: "Georgia Institute of Technology",
  conference: "ACC",
  accomplishment: "2024-2025 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  mascotName: "Yellow Jacket",
  people: [
    {
      slug:"baye-ndongo",firstName:"Baye",lastName:"Ndongo",birthYear:2004,hometown:"United States",highSchool:"United States",
      bio:"Freshman. Former 5-star from Senegal.",
      status:{occupationType:"STUDENT",currentTitle:"College Player",location:"Atlanta, GA",statusNote:"5-star recruit from Senegal. Stoudamire's first big recruit.",sourceUrl:"https://en.wikipedia.org/wiki/Baye_Ndongo"},
      membership:{role:"PLAYER",jerseyNumber:11,position:"Forward",yearsAtSchool:"undefined",gamesPlayed:33,pointsPerGame:12,reboundsPerGame:7,assistsPerGame:1},
      seasonStats:[{level:"COLLEGE",teamName:"Georgia Tech Yellow Jackets",season:"undefined",yearLabel:"undefined",sortOrder:201,gamesPlayed:33,pointsPerGame:12,reboundsPerGame:7,assistsPerGame:1}],
      careerEvents:[],
    },
    {
      slug: "damon-stoudamire",
      firstName: "Damon",
      lastName: "Stoudamire",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Former NBA Rookie of the Year. First-year HC at Georgia Tech.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Currently coaching at Georgia Tech.",
        sourceUrl: "https://en.wikipedia.org/wiki/Damon_Stoudamire",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2025-2026" },
      seasonStats: [
        { level: "COACHING", teamName: "Georgia Tech Yellow Jackets", season: "2024-2025", yearLabel: "2024-2025", sortOrder: 217 },
      ],
      careerEvents: [],
    },
  ],
};
