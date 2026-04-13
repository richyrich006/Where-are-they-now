import type { TeamSeed } from "./types";

export const miamiBasketball2021: TeamSeed = {
  slug: "miami-basketball-2021",
  name: "Miami Hurricanes",
  season: "2020-2021",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2020-2021 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "isaiah-wong", firstName: "Isaiah", lastName: "Wong", birthYear: 2001, hometown: "United States", highSchool: "United States",
      bio: "Sophomore emerging as star.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "United States", statusNote: "Future ACC POY. #55 pick. G League/NBA.", sourceUrl: "https://en.wikipedia.org/wiki/Isaiah_Wong" },
      membership: { role: "PLAYER", jerseyNumber: 2, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 15, reboundsPerGame: 4, assistsPerGame: 2.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 15, reboundsPerGame: 4, assistsPerGame: 2.5 }],
      careerEvents: [],
    },
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
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2020-2021", yearLabel: "2020-2021", sortOrder: 213 },
      ],
      careerEvents: [],
    },
  ],
};
