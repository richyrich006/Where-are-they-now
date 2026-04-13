import type { TeamSeed } from "./types";

export const miamiBasketball2017: TeamSeed = {
  slug: "miami-basketball-2017",
  name: "Miami Hurricanes",
  season: "2016-2017",
  sport: "Men's Basketball",
  school: "University of Miami",
  conference: "ACC",
  accomplishment: "2016-2017 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  mascotName: "Hurricane",
  people: [
    {
      slug: "bruce-brown-miami", firstName: "Bruce", lastName: "Brown", birthYear: 1996, hometown: "United States", highSchool: "United States",
      bio: "Freshman. Future NBA starter.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Toronto, ON", statusNote: "#42 pick. NBA starter for Nets/Nuggets. Won 2023 WCF.", sourceUrl: "https://en.wikipedia.org/wiki/Bruce_Brown" },
      membership: { role: "PLAYER", jerseyNumber: 11, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 9, reboundsPerGame: 5, assistsPerGame: 2 },
      seasonStats: [{ level: "COLLEGE", teamName: "Miami Hurricanes", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 9, reboundsPerGame: 5, assistsPerGame: 2 }],
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
        { level: "COACHING", teamName: "Miami Hurricanes", season: "2016-2017", yearLabel: "2016-2017", sortOrder: 209 },
      ],
      careerEvents: [],
    },
  ],
};
