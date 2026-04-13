import type { TeamSeed } from "./types";

export const louisvilleBasketball2016: TeamSeed = {
  slug: "louisville-basketball-2016",
  name: "Louisville Cardinals",
  season: "2015-2016",
  sport: "Men's Basketball",
  school: "University of Louisville",
  conference: "ACC",
  accomplishment: "2015-2016 Season",
  logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  mascotName: "Cardinal",
  people: [
    {
      slug: "donovan-mitchell-lou", firstName: "Donovan", lastName: "Mitchell", birthYear: 1996, hometown: "United States", highSchool: "United States",
      bio: "Freshman guard. Future #13 pick and All-Star.",
      status: { occupationType: "ACTIVE_PRO_ATHLETE", currentTitle: "Guard", location: "Cleveland, OH", statusNote: "#13 pick by Jazz. 3x All-Star. Now Cavaliers star. $195M contract.", sourceUrl: "https://en.wikipedia.org/wiki/Donovan_Mitchell" },
      membership: { role: "PLAYER", jerseyNumber: 45, position: "Guard", yearsAtSchool: "undefined", gamesPlayed: 33, pointsPerGame: 7.4, reboundsPerGame: 1.7, assistsPerGame: 1.4 },
      seasonStats: [{ level: "COLLEGE", teamName: "Louisville Cardinals", season: "undefined", yearLabel: "undefined", sortOrder: 201, gamesPlayed: 33, pointsPerGame: 7.4, reboundsPerGame: 1.7, assistsPerGame: 1.4 }],
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
        { level: "COACHING", teamName: "Louisville Cardinals", season: "2015-2016", yearLabel: "2015-2016", sortOrder: 208 },
      ],
      careerEvents: [],
    },
  ],
};
