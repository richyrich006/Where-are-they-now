import type { TeamSeed } from "./types";

export const miamiBasketball2018: TeamSeed = {
  slug: "miami-basketball-2018",
  name: "Miami Hurricanes",
  season: "2017-2018",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2017-2018 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "jim-larranaga",
      firstName: "Jim",
      lastName: "Larranaga",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Led Miami to the 2023 Final Four (first in history) at age 73. Also led George Mason to 2006 Final Four.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Retired after 2024 season.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jim_Larranaga",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2012-2024" },
      seasonStats: [
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2017-2018", yearLabel: "2017-2018", sortOrder: 210 },
      ],
      careerEvents: [],
    },
  ],
};
