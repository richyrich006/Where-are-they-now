import type { TeamSeed } from "./types";

export const louisvilleBasketball2017: TeamSeed = {
  slug: "louisville-basketball-2017",
  name: "Louisville Cardinals",
  season: "2016-2017",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2016-2017 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "donovan-mitchell-lou", firstName: "Donovan", lastName: "Mitchell", birthYear: 1996, hometown: "United States", highSchool: "United States",
      bio: "Sophomore star. #13 pick. Future All-Star.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Cleveland, OH", statusNote: "3x All-Star. $195M contract with Cavaliers.", sourceUrl: "https://en.wikipedia.org/wiki/Donovan_Mitchell" },
      membership: { role: "PLAYER", jerseyNumber: 45, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 15.6, reboundsPerGame: 4.9, assistsPerGame: 2.7 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 15.6, reboundsPerGame: 4.9, assistsPerGame: 2.7 }],
      careerEvents: [],
    },
    {
      slug: "deng-adel", firstName: "Deng", lastName: "Adel", birthYear: 1996, hometown: "United States", highSchool: "United States",
      bio: "Junior wing from Australia.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Pro Player", location: "Overseas", statusNote: "Played for Cavs/Nets briefly. Overseas career.", sourceUrl: "https://en.wikipedia.org/wiki/Deng_Adel" },
      membership: { role: "PLAYER", jerseyNumber: 22, position: "Forward", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 13, reboundsPerGame: 4.5, assistsPerGame: 1.5 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 13, reboundsPerGame: 4.5, assistsPerGame: 1.5 }],
      careerEvents: [],
    },
    {
      slug: "rick-pitino",
      firstName: "Rick",
      lastName: "Pitino",
      birthYear: 1960,
      hometown: "United States",
      highSchool: "United States",
      isFeatured: true,
      bio: "Hall of Fame coach who won the 2013 title (vacated). First coach to win championships at two schools.",
      status: {
        occupationType: "COACH",
        currentTitle: "Basketball Coach",
        location: "United States",
        statusNote: "Fired 2017. Now HC at St. John's — back-to-back Big East champs.",
        sourceUrl: "https://en.wikipedia.org/wiki/Rick_Pitino",
      },
      membership: { role: "HEAD_COACH", position: "Head Coach", yearsAtSchool: "2009-2017" },
      seasonStats: [
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2016-2017", yearLabel: "2016-2017", sortOrder: 209 },
      ],
      careerEvents: [],
    },
  ],
};
