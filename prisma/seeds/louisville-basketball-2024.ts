import type { TeamSeed } from "./types";

export const louisvilleBasketball2024: TeamSeed = {
  slug: "louisville-basketball-2024",
  name: "Louisville Cardinals",
  season: "2023-2024",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2023-2024 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "skyy-clark", firstName: "Skyy", lastName: "Clark", birthYear: 2003, hometown: "United States", highSchool: "United States",
      bio: "Sophomore guard. Former 5-star.",
      status: { occupationType: "STUDENT", currentTitle: "College Player", location: "United States", statusNote: "Former 5-star recruit. Transferred from Kentucky.", sourceUrl: "https://en.wikipedia.org/wiki/Skyy_Clark" },
      membership: { role: "PLAYER", jerseyNumber: 55, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 9.5, reboundsPerGame: 2.5, assistsPerGame: 3.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 9.5, reboundsPerGame: 2.5, assistsPerGame: 3.5 }],
      careerEvents: [],
    },
    {
      slug: "kenny-payne",
      firstName: "Kenny",
      lastName: "Payne",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Former Kentucky assistant and NBA coach who went 12-52 in 2 seasons.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2024. Now associate HC at Arkansas under Calipari.",
        sourceUrl: "https://en.wikipedia.org/wiki/Kenny_Payne",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2023-2024" },
      seasonStats: [
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2023-2024", yearLabel: "2023-2024", sortOrder: 216 },
      ],
      careerEvents: [],
    },
  ],
};
