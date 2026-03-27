import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_PATH ?? "./dev.db" });
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  // ── Team ──────────────────────────────────────────────────────────────────
  const teamData = {
    name: "Duke Blue Devils",
    season: "2014-2015",
    sport: "Men's Basketball",
    school: "Duke University",
    conference: "ACC",
    accomplishment: "NCAA National Champions",
    logoUrl: "https://a.espncdn.com/i/teamlogos/ncaa/500/150.png",
    mascotName: "Blue Devil",
  };

  const team = await prisma.team.upsert({
    where: { slug: "duke-basketball-2015" },
    update: teamData,
    create: { slug: "duke-basketball-2015", ...teamData },
  });

  // ── Helpers ───────────────────────────────────────────────────────────────
  type PersonSeed = {
    slug: string;
    firstName: string;
    lastName: string;
    birthYear?: number;
    hometown?: string;
    highSchool?: string;
    imageUrl?: string;
    collegeImageUrl?: string;
    bio?: string;
    isFeatured?: boolean;
    status: {
      occupationType:
        | "ACTIVE_PRO_ATHLETE"
        | "RETIRED_ATHLETE"
        | "RETIRED_COACH"
        | "COACH"
        | "FRONT_OFFICE"
        | "BROADCASTER_ANALYST"
        | "ENTREPRENEUR_BUSINESS"
        | "STUDENT"
        | "OTHER";
      currentTitle?: string;
      currentEmployer?: string;
      league?: string;
      location?: string;
      statusNote?: string;
      sourceUrl?: string;
      linkedInUrl?: string;
    };
    membership: {
      role: "PLAYER" | "HEAD_COACH" | "ASSISTANT_COACH" | "MANAGER";
      jerseyNumber?: number;
      position?: string;
      yearsAtSchool?: string;
      statsNote?: string;
      gamesPlayed?: number;
      pointsPerGame?: number;
      reboundsPerGame?: number;
      assistsPerGame?: number;
      seasonStats?: {
        season: string;
        yearLabel: string;
        sortOrder: number;
        gamesPlayed?: number;
        pointsPerGame?: number;
        reboundsPerGame?: number;
        assistsPerGame?: number;
      }[];
    };
    careerEvents?: {
      year: number;
      title: string;
      eventType?: string;
      detail?: string;
    }[];
  };

  const people: PersonSeed[] = [
    // ── Players ──────────────────────────────────────────────────────────────
    {
      slug: "jahlil-okafor",
      firstName: "Jahlil",
      lastName: "Okafor",
      birthYear: 1995,
      hometown: "Chicago, IL",
      highSchool: "Whitney Young Magnet High School, Chicago, IL",
      isFeatured: true,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626143.png",
      bio: "One-and-done center who was the ACC Player of the Year and a consensus All-American in 2015. Selected #3 overall in the NBA Draft by the Philadelphia 76ers.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Professional Basketball Player",
        league: "B.League (Japan)",
        location: "Hokkaido, Japan",
        statusNote:
          "Selected 3rd overall by the Philadelphia 76ers in 2015 and named to the NBA All-Rookie Team after averaging 17.5 PPG. Spent eight seasons in the NBA with Philadelphia, Brooklyn, New Orleans, Detroit, Dallas, Houston, Phoenix, and Indiana before transitioning overseas. In early 2025 he signed a 10-day deal with the Indiana Pacers and finished the season with Levanga Hokkaido in Japan's B.League, where he is currently playing in 2025-26 — continuing a career that has taken him to Spain, Puerto Rico, China, and Japan.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jahlil_Okafor",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 15,
        position: "Center",
        yearsAtSchool: "2014-2015",
        statsNote: "ACC Player of the Year • National Freshman of the Year • 67.6 FG%",
        gamesPlayed: 38,
        pointsPerGame: 17.3,
        reboundsPerGame: 8.5,
        assistsPerGame: 1.3,
      },
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship with Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2015,
          title: "Selected #3 overall by the Philadelphia 76ers",
          eventType: "DRAFT",
          detail: "2015 NBA Draft",
        },
        {
          year: 2017,
          title: "Traded to the Brooklyn Nets",
          eventType: "TRADE",
        },
        {
          year: 2019,
          title: "Signed with the New Orleans Pelicans",
          eventType: "SIGNING",
        },
        {
          year: 2022,
          title: "Signed with Levanga Hokkaido (Japan B.League)",
          eventType: "SIGNING",
        },
      ],
    },
    {
      slug: "tyus-jones",
      firstName: "Tyus",
      lastName: "Jones",
      birthYear: 1996,
      hometown: "Apple Valley, MN",
      highSchool: "Apple Valley High School, Apple Valley, MN",
      isFeatured: true,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626145.png",
      bio: "The heart of the 2015 championship team. Jones scored 23 points in the national title game against Wisconsin to earn Most Outstanding Player honors.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Point Guard",
        currentEmployer: "Denver Nuggets",
        league: "NBA",
        location: "Denver, CO",
        statusNote:
          "Selected 24th overall by the Charlotte Hornets in 2015 (traded to Minnesota), Jones became one of the NBA's most prized backup point guards over his decade-long career. He set the NBA's all-time single-season assists-to-turnover ratio record (7.04 in 2021-22) with the Memphis Grizzlies and holds the highest career ratio in league history. After stints with Washington and Phoenix, he signed with the Denver Nuggets off the buyout market in March 2026, continuing to prove himself as one of the most efficient playmakers in the league.",
        sourceUrl: "https://en.wikipedia.org/wiki/Tyus_Jones",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 5,
        position: "Point Guard",
        yearsAtSchool: "2014-2015",
        statsNote: "2015 NCAA Tournament Most Outstanding Player • 23 pts in championship game",
        gamesPlayed: 39,
        pointsPerGame: 11.8,
        reboundsPerGame: 3.5,
        assistsPerGame: 5.6,
      },
      careerEvents: [
        {
          year: 2015,
          title: "Named Most Outstanding Player of the 2015 NCAA Tournament",
          eventType: "AWARD",
        },
        {
          year: 2015,
          title: "Selected #24 overall by the Charlotte Hornets, traded to Minnesota Timberwolves",
          eventType: "DRAFT",
        },
        {
          year: 2020,
          title: "Signed with the Memphis Grizzlies",
          eventType: "SIGNING",
        },
        {
          year: 2023,
          title: "Signed with the Phoenix Suns",
          eventType: "SIGNING",
        },
      ],
    },
    {
      slug: "grayson-allen",
      firstName: "Grayson",
      lastName: "Allen",
      birthYear: 1995,
      hometown: "Jacksonville, FL",
      highSchool: "Providence School, Jacksonville, FL",
      isFeatured: true,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628960.png",
      bio: "Came off the bench as a freshman to score 16 points in the national championship game. Stayed at Duke all four years before entering the NBA Draft.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Shooting Guard",
        currentEmployer: "Phoenix Suns",
        league: "NBA",
        location: "Phoenix, AZ",
        statusNote:
          "Drafted 21st overall by the Utah Jazz in 2018 after a four-year Duke career that included the 2018 ACC Player of the Year award. Traded to Memphis and later signed with Milwaukee, where he won the 2021 NBA Championship alongside Giannis Antetokounmpo. Signed with the Phoenix Suns in 2022, where he has been a consistent three-point threat and defensive contributor. Over eight NBA seasons he has established himself as one of the sharpest shooters in the league.",
        sourceUrl: "https://en.wikipedia.org/wiki/Grayson_Allen",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 3,
        position: "Shooting Guard",
        yearsAtSchool: "2014-2018",
        statsNote: "16 pts in 2015 title game • 4-year starter • 2018 ACC Player of the Year",
        seasonStats: [
          { season: "2014-15", yearLabel: "Freshman", sortOrder: 1, gamesPlayed: 35, pointsPerGame: 4.4, reboundsPerGame: 1.0, assistsPerGame: 0.4 },
          { season: "2015-16", yearLabel: "Sophomore", sortOrder: 2, gamesPlayed: 35, pointsPerGame: 21.6, reboundsPerGame: 4.6, assistsPerGame: 3.5 },
          { season: "2016-17", yearLabel: "Junior", sortOrder: 3, gamesPlayed: 35, pointsPerGame: 14.5, reboundsPerGame: 3.0, assistsPerGame: 3.5 },
          { season: "2017-18", yearLabel: "Senior", sortOrder: 4, gamesPlayed: 37, pointsPerGame: 15.5, reboundsPerGame: 3.3, assistsPerGame: 4.6 },
        ],
      },
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship with Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2018,
          title: "Selected #21 overall by the Utah Jazz",
          eventType: "DRAFT",
        },
        {
          year: 2021,
          title: "Won NBA Championship with the Milwaukee Bucks",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2022,
          title: "Signed with the Phoenix Suns",
          eventType: "SIGNING",
        },
      ],
    },
    {
      slug: "justise-winslow",
      firstName: "Justise",
      lastName: "Winslow",
      birthYear: 1996,
      hometown: "Houston, TX",
      highSchool: "St. John's School, Houston, TX",
      isFeatured: false,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626159.png",
      bio: "A versatile defensive stopper who anchored Duke's perimeter defense during the championship run. Selected 10th overall by the Miami Heat.",
      status: {
        occupationType: "RETIRED_ATHLETE",
        currentTitle: "Retired NBA Player",
        statusNote:
          "Selected 10th overall by the Miami Heat in 2015, Winslow showed great promise as a versatile defender in Miami before a severe left hip injury in 2019 required surgery and derailed his career. He later played for Memphis, Portland, Indiana, and Toronto before a 2023 ankle surgery effectively ended his playing days. He earned over $45 million in career NBA earnings. As of early 2026 he has not played professionally and has made no formal retirement announcement, though his status remains uncertain.",
        sourceUrl: "https://en.wikipedia.org/wiki/Justise_Winslow",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 12,
        position: "Small Forward / Shooting Guard",
        yearsAtSchool: "2014-2015",
        statsNote: "10th overall pick, 2015 NBA Draft • Key defensive stopper",
        gamesPlayed: 39,
        pointsPerGame: 12.6,
        reboundsPerGame: 6.5,
        assistsPerGame: 2.1,
      },
      careerEvents: [
        {
          year: 2015,
          title: "Selected #10 overall by the Miami Heat",
          eventType: "DRAFT",
        },
        {
          year: 2020,
          title: "Traded to the Memphis Grizzlies",
          eventType: "TRADE",
        },
        {
          year: 2022,
          title: "Retired from professional basketball due to injuries",
          eventType: "RETIREMENT",
        },
      ],
    },
    {
      slug: "quinn-cook",
      firstName: "Quinn",
      lastName: "Cook",
      birthYear: 1993,
      hometown: "Washington, D.C.",
      highSchool: "DeMatha Catholic High School, Hyattsville, MD",
      isFeatured: false,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626188.png",
      bio: "The senior captain who led Duke's locker room culture during the championship season. Despite going undrafted, Cook carved out a six-year NBA career and won two championships.",
      status: {
        occupationType: "RETIRED_ATHLETE",
        currentTitle: "Retired NBA Player",
        statusNote:
          "Went undrafted in 2015 and earned his NBA shot through the G-League, eventually joining the Golden State Warriors and winning a championship in 2018. Added a second ring with the Los Angeles Lakers in 2020. After his NBA run ended, he pursued overseas opportunities in Russia, China, Puerto Rico, and Saudi Arabia. As of early 2026, Cook is actively seeking his next professional opportunity, stating he wants to play for another five or six years — a testament to the relentless underdog spirit that defined his career.",
        sourceUrl: "https://en.wikipedia.org/wiki/Quinn_Cook",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 2,
        position: "Point Guard",
        yearsAtSchool: "2011-2015",
        statsNote: "Team captain • 4-year starter • 2015 ACC Tournament champion",
        seasonStats: [
          { season: "2011-12", yearLabel: "Freshman", sortOrder: 1, gamesPlayed: 33, pointsPerGame: 4.4, reboundsPerGame: 1.0, assistsPerGame: 1.9 },
          { season: "2012-13", yearLabel: "Sophomore", sortOrder: 2, gamesPlayed: 36, pointsPerGame: 11.7, reboundsPerGame: 3.8, assistsPerGame: 5.3 },
          { season: "2013-14", yearLabel: "Junior", sortOrder: 3, gamesPlayed: 35, pointsPerGame: 11.6, reboundsPerGame: 2.2, assistsPerGame: 4.4 },
          { season: "2014-15", yearLabel: "Senior", sortOrder: 4, gamesPlayed: 39, pointsPerGame: 15.3, reboundsPerGame: 2.5, assistsPerGame: 2.6 },
        ],
      },
      careerEvents: [
        {
          year: 2015,
          title: "Went undrafted; signed with G-League",
          eventType: "SIGNING",
        },
        {
          year: 2018,
          title: "Won NBA Championship with the Golden State Warriors",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2020,
          title: "Won NBA Championship with the Los Angeles Lakers",
          eventType: "CHAMPIONSHIP",
        },
      ],
    },
    {
      slug: "amile-jefferson",
      firstName: "Amile",
      lastName: "Jefferson",
      birthYear: 1994,
      hometown: "Philadelphia, PA",
      highSchool: "Friends' Central School, Wynnewood, PA",
      isFeatured: false,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628518.png",
      bio: "A workhorse power forward who chose to return to Duke multiple times. After a brief NBA career, he transitioned into coaching.",
      status: {
        occupationType: "COACH",
        currentTitle: "Assistant Coach",
        currentEmployer: "Boston Celtics",
        league: "NBA",
        location: "Boston, MA",
        statusNote:
          "Appeared in a program-record 150 games at Duke across five seasons, winning the 2015 national title before a medical redshirt year. Went undrafted in 2017 and played for Orlando and Boston before retiring. Returned to Duke in 2021 as Director of Player Development under Jon Scheyer, then was hired as an assistant coach by the Boston Celtics in July 2023. Won an NBA championship as a Celtics assistant when Boston defeated Dallas in the 2024 Finals — the perfect full-circle to his 2015 NCAA title as a player.",
        sourceUrl: "https://en.wikipedia.org/wiki/Amile_Jefferson",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 21,
        position: "Power Forward",
        yearsAtSchool: "2013-2017",
        statsNote: "4x All-ACC Academic Team • Program-record 150 career games",
        seasonStats: [
          { season: "2012-13", yearLabel: "Freshman", sortOrder: 1, gamesPlayed: 32, pointsPerGame: 4.0, reboundsPerGame: 2.9, assistsPerGame: 0.5 },
          { season: "2013-14", yearLabel: "Sophomore", sortOrder: 2, gamesPlayed: 35, pointsPerGame: 6.5, reboundsPerGame: 6.9, assistsPerGame: 1.0 },
          { season: "2014-15", yearLabel: "Junior", sortOrder: 3, gamesPlayed: 39, pointsPerGame: 6.1, reboundsPerGame: 5.8, assistsPerGame: 0.9 },
          { season: "2015-16", yearLabel: "Medical RS", sortOrder: 4, gamesPlayed: 9, pointsPerGame: 11.4, reboundsPerGame: 10.3, assistsPerGame: 0.9 },
          { season: "2016-17", yearLabel: "Senior", sortOrder: 5, gamesPlayed: 35, pointsPerGame: 10.9, reboundsPerGame: 8.4, assistsPerGame: 1.5 },
        ],
      },
      careerEvents: [
        {
          year: 2017,
          title: "Signed as undrafted free agent with the Orlando Magic",
          eventType: "SIGNING",
        },
        {
          year: 2019,
          title: "Signed with the Boston Celtics",
          eventType: "SIGNING",
        },
        {
          year: 2022,
          title: "Joined Duke as Director of Player Development under Coach Scheyer",
          eventType: "COACHING_HIRE",
        },
        {
          year: 2024,
          title: "Joined Boston Celtics coaching staff as assistant coach",
          eventType: "COACHING_HIRE",
        },
      ],
    },
    {
      slug: "matt-jones",
      firstName: "Matt",
      lastName: "Jones",
      birthYear: 1994,
      hometown: "Chatsworth, CA",
      highSchool: "DeSoto High School, DeSoto, TX",
      isFeatured: false,
      bio: "A sharpshooting guard who hit a clutch 4-of-7 from three-point range against Gonzaga in the Elite Eight. After a stint in the G-League and overseas, he transitioned to the business world.",
      status: {
        occupationType: "ENTREPRENEUR_BUSINESS",
        currentTitle: "Business Development",
        currentEmployer: "Total Quality Logistics",
        location: "Chicago, IL",
        statusNote:
          "Went undrafted in 2017 and played for the Stockton Kings (G-League) and professionally in Taiwan before transitioning to business. Worked as a commercial real estate broker at JLL in San Francisco and a senior associate at Alumni Ventures' Sports Fund before joining Total Quality Logistics in Chicago in late 2025. Remains connected to Duke athletics through his role on the Duke Alumni Board's Northern California chapter.",
        sourceUrl: "https://en.wikipedia.org/wiki/Matt_Jones_(basketball)",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 13,
        position: "Shooting Guard",
        yearsAtSchool: "2013-2017",
        statsNote: "4-7 from three in Elite Eight vs Gonzaga • South Region All-Tournament Team",
        seasonStats: [
          { season: "2013-14", yearLabel: "Freshman", sortOrder: 1, gamesPlayed: 32, pointsPerGame: 1.8, reboundsPerGame: 0.8, assistsPerGame: 0.2 },
          { season: "2014-15", yearLabel: "Sophomore", sortOrder: 2, gamesPlayed: 39, pointsPerGame: 6.0, reboundsPerGame: 2.3, assistsPerGame: 1.0 },
          { season: "2015-16", yearLabel: "Junior", sortOrder: 3, gamesPlayed: 36, pointsPerGame: 10.4, reboundsPerGame: 2.5, assistsPerGame: 2.3 },
          { season: "2016-17", yearLabel: "Senior", sortOrder: 4, gamesPlayed: 36, pointsPerGame: 6.4, reboundsPerGame: 2.2, assistsPerGame: 1.4 },
        ],
      },
      careerEvents: [
        {
          year: 2016,
          title: "Signed with the Reno Bighorns (NBA G-League)",
          eventType: "SIGNING",
        },
        {
          year: 2018,
          title: "Played professionally in Taiwan",
          eventType: "SIGNING",
        },
        {
          year: 2020,
          title: "Joined JLL as commercial real estate broker in Bay Area",
          eventType: "OTHER",
        },
      ],
    },
    {
      slug: "marshall-plumlee",
      firstName: "Marshall",
      lastName: "Plumlee",
      birthYear: 1992,
      hometown: "Warsaw, IN",
      highSchool: "Christ School, Arden, NC",
      isFeatured: true,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627850.png",
      bio: "The youngest of three Plumlee brothers to play at Duke. After his NBA career, Marshall took one of the most extraordinary paths in college basketball history — from the 75th Ranger Regiment to Harvard Business School to Blackstone.",
      status: {
        occupationType: "FRONT_OFFICE",
        currentTitle: "Tactical Opportunities",
        currentEmployer: "Blackstone",
        location: "New York, NY",
        statusNote:
          "After the NBA, commissioned into the U.S. Army and completed Ranger School (2019), then served as Battalion Mortar Platoon Leader with the 75th Ranger Regiment — one of the Army's most elite units — from December 2020 to May 2022. He enrolled at Harvard Business School and simultaneously interned at Blackstone's Tactical Opportunities group in 2022-23. Joined Blackstone full-time in August 2024 as an Associate in Tactical Opportunities and serves on the board of the Special Operations Warrior Foundation. His post-basketball arc — from the NBA to Army Ranger to Harvard to Blackstone — is one of the most remarkable in the history of college sports.",
        sourceUrl: "https://www.linkedin.com/in/marshallplumlee/",
        linkedInUrl: "https://www.linkedin.com/in/marshallplumlee/",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 42,
        position: "Center",
        yearsAtSchool: "2011-2016",
        statsNote: "Team captain • Brother of Mason and Miles Plumlee",
        seasonStats: [
          { season: "2012-13", yearLabel: "Freshman", sortOrder: 1, gamesPlayed: 25, pointsPerGame: 1.5, reboundsPerGame: 1.8, assistsPerGame: 0.3 },
          { season: "2013-14", yearLabel: "Sophomore", sortOrder: 2, gamesPlayed: 27, pointsPerGame: 2.2, reboundsPerGame: 2.5, assistsPerGame: 0.4 },
          { season: "2014-15", yearLabel: "Junior", sortOrder: 3, gamesPlayed: 39, pointsPerGame: 2.2, reboundsPerGame: 2.4, assistsPerGame: 0.3 },
          { season: "2015-16", yearLabel: "Senior", sortOrder: 4, gamesPlayed: 36, pointsPerGame: 8.3, reboundsPerGame: 8.6, assistsPerGame: 1.1 },
        ],
      },
      careerEvents: [
        {
          year: 2016,
          title: "Selected #44 overall by the New York Knicks",
          eventType: "DRAFT",
        },
        {
          year: 2017,
          title: "Commissioned as officer in the New York Army National Guard",
          eventType: "OTHER",
        },
        {
          year: 2019,
          title: "Completed U.S. Army Ranger School",
          eventType: "OTHER",
          detail: "One of the most elite military training courses in the world",
        },
        {
          year: 2020,
          title: "Served as Battalion Mortar Platoon Leader, 75th Ranger Regiment, U.S. Army",
          eventType: "OTHER",
          detail: "Fort Moore, Georgia — Dec 2020 to May 2022",
        },
        {
          year: 2022,
          title: "Enrolled at Harvard Business School; Blackstone Tactical Opportunities summer associate",
          eventType: "STUDENT",
        },
        {
          year: 2024,
          title: "Joined Blackstone full-time — Tactical Opportunities group",
          eventType: "OTHER",
          detail: "New York City",
        },
      ],
    },
    {
      slug: "semi-ojeleye",
      firstName: "Semi",
      lastName: "Ojeleye",
      birthYear: 1995,
      hometown: "Aurora, CO",
      highSchool: "Ottawa High School, Ottawa, KS",
      isFeatured: false,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628400.png",
      bio: "Transferred from Duke to SMU where he became a star before being drafted by the Boston Celtics. Has continued his professional career in European leagues.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Small Forward / Power Forward",
        currentEmployer: "Crvena zvezda (Red Star Belgrade)",
        league: "EuroLeague / ABA League",
        location: "Belgrade, Serbia",
        statusNote:
          "Transferred from Duke to SMU in December 2014, sat out a full year, then exploded as AAC Player of the Year in 2016-17 (18.9 PPG, 6.8 RPG). Selected 37th overall by the Boston Celtics in 2017, he played 284 NBA games with Boston, Milwaukee, and the LA Clippers. After his NBA run ended in 2022, he built a strong European career with Virtus Bologna in Italy and Valencia Basket in Spain before joining Crvena zvezda (Red Star Belgrade) in the EuroLeague and ABA League in 2025-26.",
        sourceUrl: "https://en.wikipedia.org/wiki/Semi_Ojeleye",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 32,
        position: "Small Forward",
        yearsAtSchool: "2013-2015",
        statsNote: "Transferred to SMU mid-sophomore year • 2017 AAC Player of the Year at SMU",
        seasonStats: [
          { season: "2013-14", yearLabel: "Freshman", sortOrder: 1, gamesPlayed: 17, pointsPerGame: 1.6, reboundsPerGame: 0.9, assistsPerGame: 0.2 },
          { season: "2014-15", yearLabel: "Sophomore", sortOrder: 2, gamesPlayed: 6, pointsPerGame: 3.0, reboundsPerGame: 2.3, assistsPerGame: 0.2 },
        ],
      },
      careerEvents: [
        {
          year: 2016,
          title: "Transferred to SMU",
          eventType: "OTHER",
        },
        {
          year: 2017,
          title: "Selected #37 overall by the Boston Celtics",
          eventType: "DRAFT",
        },
        {
          year: 2021,
          title: "Signed with Virtus Bologna (EuroLeague)",
          eventType: "SIGNING",
        },
        {
          year: 2023,
          title: "Signed with Crvena zvezda (Red Star Belgrade)",
          eventType: "SIGNING",
        },
      ],
    },
    {
      slug: "rasheed-sulaimon",
      firstName: "Rasheed",
      lastName: "Sulaimon",
      birthYear: 1994,
      hometown: "Houston, TX",
      highSchool: "Strake Jesuit College Preparatory, Houston, TX",
      isFeatured: false,
      bio: "A key contributor in the first half of the 2014-15 season before being dismissed from the team in January 2015. He finished his Duke degree in three years, transferred to Maryland for one final season, and went on to build a decade-long professional career in Europe — winning a league MVP award along the way.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Shooting Guard",
        currentEmployer: "KK Buducnost VOLI",
        league: "ABA Liga",
        location: "Podgorica, Montenegro",
        statusNote:
          "Built a long and productive professional career in Europe since 2016. Played in France, Spain, Turkey, and Lithuania before landing in Montenegro. In 2024-25 won both the Montenegrin National Championship and National Cup with KK Budućnost VOLI, averaging 13.8 PPG on 47.6% shooting in 18 ABA Liga games.",
        sourceUrl: "https://en.wikipedia.org/wiki/Rasheed_Sulaimon",
        linkedInUrl: "https://www.linkedin.com/in/rasheed-sulaimon-3aa0b515a/",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 14,
        position: "Shooting Guard",
        yearsAtSchool: "2012-2015",
        statsNote:
          "Dismissed from team January 2015 • 2012 McDonald's All-American • Transferred to Maryland (2015-16 All-Big Ten honorable mention, 11.3 ppg)",
        seasonStats: [
          { season: "2012-13", yearLabel: "Freshman", sortOrder: 1, gamesPlayed: 36, pointsPerGame: 11.6, reboundsPerGame: 3.4, assistsPerGame: 1.9 },
          { season: "2013-14", yearLabel: "Sophomore", sortOrder: 2, gamesPlayed: 34, pointsPerGame: 9.9, reboundsPerGame: 2.4, assistsPerGame: 2.4 },
          { season: "2014-15", yearLabel: "Junior (partial)", sortOrder: 3, gamesPlayed: 20, pointsPerGame: 7.5, reboundsPerGame: 2.0, assistsPerGame: 1.8 },
        ],
      },
      careerEvents: [
        {
          year: 2015,
          title: "Dismissed from Duke basketball team",
          eventType: "OTHER",
        },
        {
          year: 2015,
          title: "Transferred to University of Maryland; earned All-Big Ten honorable mention averaging 11.3 ppg",
          eventType: "OTHER",
        },
        {
          year: 2016,
          title: "Signed with Greensboro Swarm (NBA G-League)",
          eventType: "SIGNING",
        },
        {
          year: 2017,
          title: "Signed with JDA Dijon Bourgogne (France, Pro A)",
          eventType: "SIGNING",
        },
        {
          year: 2020,
          title: "Signed with Baloncesto Zaragoza (Spain, Liga ACB)",
          eventType: "SIGNING",
        },
        {
          year: 2022,
          title: "Signed with JL Bourg en Bresse (France, Pro A)",
          eventType: "SIGNING",
        },
        {
          year: 2022,
          title: "Won league MVP award playing professionally overseas",
          eventType: "AWARD",
        },
        {
          year: 2023,
          title: "Signed with Konyaspor Basketball (Turkey, BSL)",
          eventType: "SIGNING",
        },
        {
          year: 2024,
          title: "Signed with KK Budućnost VOLI (Montenegro, ABA Liga)",
          eventType: "SIGNING",
        },
        {
          year: 2025,
          title: "Won Montenegrin National Championship and National Cup with KK Budućnost VOLI",
          eventType: "CHAMPIONSHIP",
          detail: "13.8 PPG, 47.6% FG in 18 ABA Liga games",
        },
      ],
    },
    {
      slug: "brennan-besser",
      firstName: "Brennan",
      lastName: "Besser",
      birthYear: 1996,
      hometown: "Chicago, IL",
      highSchool: "Latin School of Chicago, Chicago, IL",
      isFeatured: false,
      bio: "A walk-on guard who was part of the 2015 championship roster. After Duke, Besser channeled the walk-on spirit into life — founding 'Walk On! America,' a charity supporting people with intellectual and developmental disabilities (IDD), inspired by his sister Jacqueline. He completed a 3,400-mile cross-country bike ride in 69 days raising over $343,000 for the IDD community.",
      status: {
        occupationType: "ENTREPRENEUR_BUSINESS",
        currentTitle: "CEO",
        currentEmployer: "Ecostar Collaborative",
        location: "Chicago, IL",
        statusNote:
          "Founded 'Walk On! America,' a charity for the IDD community inspired by his sister Jacqueline, who has autism — completing a 3,400-mile cross-country bike ride raising over $343,000. Previously worked at Intersport on NFL and sports marketing. Now serves as CEO of Ecostar Collaborative.",
        sourceUrl:
          "https://www.espn.com/mens-college-basketball/story/_/id/24123073/duke-blue-devils-brennan-besser-completes-bike-ride-america",
        linkedInUrl: "https://www.linkedin.com/in/brennan-besser-10a7921a7/",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 53,
        position: "Guard",
        yearsAtSchool: "2014-2018",
        statsNote: "Walk-on • Part of 2015 national championship team • Political science major",
      },
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship with Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2018,
          title: "Founded 'Walk On! America' — charity for the IDD community inspired by his sister Jacqueline",
          eventType: "OTHER",
        },
        {
          year: 2018,
          title: "Completed 3,400-mile cross-country bike ride in 69 days, raising over $343,000 for IDD organizations",
          eventType: "OTHER",
        },
        {
          year: 2019,
          title: "Joined Intersport in Chicago as sports business professional",
          eventType: "OTHER",
        },
        {
          year: 2024,
          title: "Became CEO of Ecostar Collaborative",
          eventType: "OTHER",
        },
      ],
    },

    {
      slug: "sean-obi",
      firstName: "Sean",
      lastName: "Obi",
      birthYear: 1994,
      hometown: "Kaduna, Nigeria",
      highSchool: "Greens Farms Academy, Westport, CT",
      isFeatured: false,
      bio: "A 6'9\" transfer from Rice who joined Duke for the 2014-15 championship season but sat out due to NCAA transfer rules. At Rice he averaged 11.4 points and a Conference USA-leading 9.3 rebounds as a freshman. After earning his sociology degree at Duke he graduate-transferred to Maryland for one final season.",
      status: {
        occupationType: "OTHER",
        currentTitle: "Former College Basketball Player",
        statusNote:
          "Sat out the 2014-15 championship season due to NCAA transfer rules, then played limited minutes in 2015-16 before a knee injury ended his 2016-17 season. Graduate-transferred to Maryland (2017-18) to play one final season under coach Mark Turgeon. Was not drafted. Post-basketball career not publicly documented; earned a sociology degree with a marketing minor from Duke.",
        sourceUrl: "https://goduke.com/sports/mens-basketball/roster/sean-obi/4420",
        linkedInUrl: "https://www.linkedin.com/in/sean-obi-4949bb141",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 34,
        position: "Forward / Center",
        yearsAtSchool: "2014-2017",
        statsNote:
          "Sat out 2014-15 (transfer rules) • 6'9\", 270 lbs • C-USA All-Freshman at Rice (11.4 ppg, 9.3 rpg) • Graduate transfer to Maryland (2017-18)",
      },
      careerEvents: [
        {
          year: 2014,
          title: "Transferred from Rice University to Duke; sat out 2014-15 per NCAA transfer rules",
          eventType: "OTHER",
        },
        {
          year: 2015,
          title: "Part of Duke's national championship roster (non-playing)",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2017,
          title: "Graduate transfer to University of Maryland for final season of eligibility",
          eventType: "OTHER",
        },
      ],
    },
    {
      slug: "sean-kelly",
      firstName: "Sean",
      lastName: "Kelly",
      birthYear: 1993,
      hometown: "Raleigh, NC",
      highSchool: "Ravenscroft School, Raleigh, NC",
      isFeatured: false,
      bio: "A walk-on guard who spent three years as a student manager before earning a spot on the roster his senior year — never having played varsity basketball in high school. His father played at Yale and professionally in France; his older brother Ryan Kelly played at Duke from 2010-13. One of the most unique paths to a national championship in college basketball history.",
      status: {
        occupationType: "OTHER",
        currentTitle: "Admissions Professional",
        currentEmployer: "Carlthorp School",
        location: "Santa Monica, CA",
        statusNote:
          "After graduating from Duke, Kelly worked in admissions at Carlthorp School in Santa Monica, CA, where he became an early advocate for student social media literacy. Also an accomplished distance runner — completed the NYC Marathon and has shared training advice for beginner runners balancing family and work life.",
        sourceUrl:
          "https://thesocialinstitute.com/blog/qa-sean-kelly/",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 42,
        position: "Guard",
        yearsAtSchool: "2011-2015",
        statsNote:
          "Walk-on (former 3-year student manager) • Never played varsity hoops in high school • Brother of Ryan Kelly (Duke 2010-13)",
      },
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship with Duke as a walk-on",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2015,
          title: "Joined Carlthorp School (Santa Monica, CA) as admissions associate",
          eventType: "OTHER",
        },
        {
          year: 2023,
          title: "Completed NYC Marathon while working full-time and raising a family",
          eventType: "OTHER",
        },
      ],
    },
    {
      slug: "nick-pagliuca",
      firstName: "Nick",
      lastName: "Pagliuca",
      birthYear: 1994,
      hometown: "Weston, MA",
      highSchool: "Milton Academy, Milton, MA",
      isFeatured: false,
      bio: "A walk-on guard and computer science major who turned down smaller D1 programs to walk on at Duke. His father Steve Pagliuca is a co-owner of the Boston Celtics and a 1977 Duke grad. Nick won the Deryl Hart Award (team's top scholar-athlete), was a National Merit Scholar, and interned at Apple — then went on to Harvard Business School and Palantir Technologies.",
      status: {
        occupationType: "ENTREPRENEUR_BUSINESS",
        currentTitle: "Software / Data Professional",
        currentEmployer: "Palantir Technologies",
        location: "New York, NY",
        statusNote:
          "After winning a national championship ring and earning the Deryl Hart Award (Duke's top scholar-athlete honor) as a computer science major, Pagliuca attended Harvard Business School. He joined Palantir Technologies in New York, working in data analytics and AI. His father Steve Pagliuca is co-founder of Bain Capital and a Boston Celtics co-owner; his brother Joe was also a Duke walk-on. Nick's path from Milton Academy to Duke computer science to HBS to Palantir reflects exactly the kind of excellence off the court that Coach K prized.",
        sourceUrl: "https://www.bostonglobe.com/metro/regionals/west/2015/04/16/campus-angle-nick-pagliuca-weston-duke-university-basketball/gC95R2oHaumOwKDWsNYjuJ/story.html",
        linkedInUrl: "https://www.linkedin.com/in/nick-pagliuca-6b0a62b3/",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 45,
        position: "Guard",
        yearsAtSchool: "2013-2017",
        statsNote:
          "Walk-on • Computer science major • National Merit Scholar • Deryl Hart Award (top scholar-athlete) • Played in 29 career games including 2015 NCAA Tournament",
      },
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship with Duke; played in two NCAA Tournament games including semifinal vs Michigan State",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2015,
          title: "Interned at Apple in Palo Alto as computer science major",
          eventType: "OTHER",
        },
        {
          year: 2017,
          title: "Won Deryl Hart Award — Duke basketball's top scholar-athlete",
          eventType: "AWARD",
        },
        {
          year: 2018,
          title: "Enrolled at Harvard Business School",
          eventType: "STUDENT",
        },
        {
          year: 2020,
          title: "Joined Palantir Technologies in New York as software/data professional",
          eventType: "OTHER",
        },
      ],
    },

    // ── Coaches ──────────────────────────────────────────────────────────────
    {
      slug: "mike-krzyzewski",
      firstName: "Mike",
      lastName: "Krzyzewski",
      birthYear: 1947,
      hometown: "Chicago, IL",
      highSchool: "Archbishop Weber High School, Chicago, IL",
      isFeatured: true,
      bio: "Known simply as \"Coach K,\" Krzyzewski is the most decorated coach in college basketball history. He won five national championships at Duke and coached the U.S. Olympic team to three gold medals. He retired in 2022 as the all-time wins leader in Division I men's basketball.",
      status: {
        occupationType: "RETIRED_COACH",
        currentTitle: "Special Advisor to the NBA Commissioner",
        currentEmployer: "NBA",
        location: "Durham, NC",
        statusNote:
          "Retired after the 2021-22 season with 1,202 career wins — the all-time Division I record — and five national championships (1991, 1992, 2001, 2010, 2015). In 2023, he was appointed Special Advisor to NBA Commissioner Adam Silver, attending league meetings and counseling executives. He teaches leadership at Duke's Fuqua School of Business, hosts his long-running 'Basketball and Beyond with Coach K' show on SiriusXM, and was inducted into the FIBA Hall of Fame in May 2025.",
        sourceUrl: "https://en.wikipedia.org/wiki/Mike_Krzyzewski",
      },
      membership: {
        role: "HEAD_COACH",
        yearsAtSchool: "1980-2022",
        statsNote:
          "5 NCAA Championships • 1,202 career wins (all-time Division I record) • Naismith Basketball Hall of Fame",
      },
      careerEvents: [
        {
          year: 1991,
          title: "Won first NCAA National Championship at Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2015,
          title: "Won fifth NCAA National Championship at Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2008,
          title: "Led USA Basketball to Olympic gold medal in Beijing",
          eventType: "AWARD",
        },
        {
          year: 2021,
          title: "Surpassed 1,000 career coaching wins at Duke",
          eventType: "AWARD",
        },
        {
          year: 2022,
          title: "Retired as head coach of Duke with 1,202 all-time wins",
          eventType: "RETIREMENT",
        },
      ],
    },
    {
      slug: "jeff-capel",
      firstName: "Jeff",
      lastName: "Capel",
      birthYear: 1975,
      hometown: "Fayetteville, NC",
      highSchool: "South View High School, Hope Mills, NC",
      isFeatured: false,
      bio: "A former Duke player himself, Capel returned to Durham as an assistant coach and was instrumental in recruiting the 2014 #1-ranked recruiting class. He went on to become a head coach.",
      status: {
        occupationType: "COACH",
        currentTitle: "Head Coach",
        currentEmployer: "University of Pittsburgh Panthers",
        league: "NCAA Division I (ACC)",
        location: "Pittsburgh, PA",
        statusNote:
          "Named the 16th head coach at Pittsburgh in March 2018, Capel won ACC Coach of the Year honors in 2023 after going 21-10. His tenure hit rougher waters in 2024-25 (13-20 record), but a buyout valued near $15 million through 2029-30 led Pittsburgh to retain him for a ninth season in 2026-27, with a revamped coaching staff and a top-12 recruiting class. He was a NC Player of the Year at South View High before starring at Duke (1994-97) and playing in the NBA.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jeff_Capel",
        linkedInUrl: "https://www.linkedin.com/in/jeff-capel-94aa964/",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2011-2018",
        statsNote:
          "Associate Head Coach • Led recruitment of nation's #1 recruiting class in 2014",
      },
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship as associate head coach at Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2018,
          title: "Named Head Coach of the University of Pittsburgh",
          eventType: "COACHING_HIRE",
        },
      ],
    },
    {
      slug: "jon-scheyer",
      firstName: "Jon",
      lastName: "Scheyer",
      birthYear: 1988,
      hometown: "Northbrook, IL",
      highSchool: "Glenbrook North High School, Northbrook, IL",
      isFeatured: true,
      bio: "A former Duke star player who joined Coach K's staff and rose through the ranks to become his successor. At just 34, Scheyer became one of the youngest head coaches of a major program in the country.",
      status: {
        occupationType: "COACH",
        currentTitle: "Head Coach",
        currentEmployer: "Duke Blue Devils Men's Basketball",
        league: "NCAA Division I (ACC)",
        location: "Durham, NC",
        statusNote:
          "Illinois Mr. Basketball in 2006 at Glenbrook North before starring at Duke, where he was part of the 2010 championship team. Succeeded Mike Krzyzewski in June 2022, becoming one of the youngest Division I head coaches at age 34. Led Duke to the Elite Eight in year one, then orchestrated a historic 35-3 season in 2024-25, reaching the Final Four and winning the John McLendon National Coach of the Year Award. Holds a 123-24 record through March 2026, the fastest coach in ACC history to 100 wins, with his contract extended through 2030-31.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jon_Scheyer",
        linkedInUrl: "https://www.linkedin.com/in/jonathan-scheyer-10714532/",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2013-2022",
        statsNote:
          "Director of Basketball Operations → Assistant Coach → Associate Head Coach → Head Coach",
      },
      careerEvents: [
        {
          year: 2013,
          title: "Joined Duke coaching staff as Director of Basketball Operations",
          eventType: "COACHING_HIRE",
        },
        {
          year: 2015,
          title: "Won NCAA National Championship as part of Duke coaching staff",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2022,
          title: "Named Head Coach of Duke Blue Devils, succeeding Mike Krzyzewski",
          eventType: "COACHING_HIRE",
        },
        {
          year: 2023,
          title: "Led Duke to the Elite Eight in first season as head coach",
          eventType: "AWARD",
        },
        {
          year: 2025,
          title: "Led Duke to the Final Four (35-3 record); won John McLendon National Coach of the Year Award; contract extended through 2030-31",
          eventType: "AWARD",
        },
      ],
    },
    {
      slug: "nate-james",
      firstName: "Nate",
      lastName: "James",
      birthYear: 1978,
      hometown: "Roanoke Rapids, NC",
      highSchool: "Roanoke Rapids High School, Roanoke Rapids, NC",
      isFeatured: false,
      bio: "A former Duke player who spent 13 years on Coach K's staff, rising to Associate Head Coach and winning two national championships as a coach. After a brief head coaching stint at Austin Peay, he returned to the DMV area where he grew up, joining Howard University.",
      status: {
        occupationType: "COACH",
        currentTitle: "Associate Head Coach",
        currentEmployer: "Howard University",
        league: "NCAA Division I (MEAC)",
        location: "Washington, D.C.",
        statusNote:
          "Played at Duke from 1997-2001, winning the national championship in his senior year, then played professionally in over a dozen countries before returning as a coach in 2007. Won three national titles total at Duke — one as a player (2001) and two as a coach (2010, 2015). Left in 2021 to become head coach at Austin Peay State University, going 21-39 over two seasons before being dismissed. In October 2025, joined Howard University as Associate Head Coach under Kenny Blakeney — a homecoming to the DMV area where he grew up.",
        sourceUrl: "https://hubison.com/news/2025/10/20/mens-basketball-mens-basketball-welcomes-nate-james-to-the-bison-family.aspx",
        linkedInUrl: "https://www.linkedin.com/in/nate-james-a176b242",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2007-2021",
        statsNote: "Assistant Coach → Associate Head Coach • Won 2010 and 2015 NCAA titles as assistant",
      },
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship as associate head coach at Duke",
          eventType: "CHAMPIONSHIP",
        },
        {
          year: 2021,
          title: "Named Head Coach of Austin Peay State University",
          eventType: "COACHING_HIRE",
        },
        {
          year: 2023,
          title: "Dismissed as head coach at Austin Peay after two seasons (21-39)",
          eventType: "OTHER",
        },
        {
          year: 2025,
          title: "Joined Howard University as Associate Head Coach under Kenny Blakeney",
          eventType: "COACHING_HIRE",
        },
      ],
    },
    {
      slug: "chris-carrawell",
      firstName: "Chris",
      lastName: "Carrawell",
      highSchool: "Cardinal Ritter College Prep, St. Louis, MO",
      birthYear: 1978,
      hometown: "St. Louis, MO",
      isFeatured: false,
      bio: "A 2000 ACC Player of the Year at Duke who returned as a coach and became Jon Scheyer's right-hand man as the Morris Williams Associate Head Coach and offensive coordinator.",
      status: {
        occupationType: "COACH",
        currentTitle: "Morris Williams Associate Head Coach / Offensive Coordinator",
        currentEmployer: "Duke Blue Devils Men's Basketball",
        league: "NCAA Division I (ACC)",
        location: "Durham, NC",
        statusNote: "Led Cardinal Ritter College Prep to an 80-13 record over four years before becoming Duke's 2000 ACC Player of the Year and a consensus All-American. After brief NBA and overseas stints — including winning the 2006 ABA MVP and championship — he joined Duke's staff as an assistant in March 2013. Promoted to the endowed Morris Williams Associate Head Coach role under Jon Scheyer in 2021, serving as offensive coordinator and playing a central role in developing first-round NBA picks Mark Williams (2022), Dereck Lively II (2023), and Kyle Filipowski (2024).",
        sourceUrl: "https://en.wikipedia.org/wiki/Chris_Carrawell",
        linkedInUrl: "https://www.linkedin.com/in/chris-carrawell-60b9bb7b/",
      },
      membership: {
        role: "ASSISTANT_COACH",
        yearsAtSchool: "2013-present",
        statsNote: "Assistant Coach • Former Duke ACC Player of the Year (2000)",
      },
      careerEvents: [
        {
          year: 2015,
          title: "Won NCAA National Championship as assistant coach at Duke",
          eventType: "CHAMPIONSHIP",
        },
      ],
    },
  ];

  for (const p of people) {
    const personData = {
      firstName: p.firstName,
      lastName: p.lastName,
      birthYear: p.birthYear,
      hometown: p.hometown,
      highSchool: p.highSchool ?? null,
      imageUrl: p.imageUrl ?? null,
      collegeImageUrl: p.collegeImageUrl ?? null,
      bio: p.bio ?? null,
      isFeatured: p.isFeatured ?? false,
    };

    const person = await prisma.person.upsert({
      where: { slug: p.slug },
      update: personData,
      create: { slug: p.slug, ...personData },
    });

    const statusData = {
      occupationType: p.status.occupationType,
      currentTitle: p.status.currentTitle ?? null,
      currentEmployer: p.status.currentEmployer ?? null,
      league: p.status.league ?? null,
      location: p.status.location ?? null,
      statusNote: p.status.statusNote ?? null,
      asOfDate: new Date("2026-03-01"),
      sourceUrl: p.status.sourceUrl ?? null,
      linkedInUrl: p.status.linkedInUrl ?? null,
    };

    await prisma.currentStatus.upsert({
      where: { personId: person.id },
      update: statusData,
      create: { personId: person.id, ...statusData },
    });

    const membershipData = {
      role: p.membership.role,
      jerseyNumber: p.membership.jerseyNumber ?? null,
      position: p.membership.position ?? null,
      yearsAtSchool: p.membership.yearsAtSchool ?? null,
      statsNote: p.membership.statsNote ?? null,
      gamesPlayed: p.membership.gamesPlayed ?? null,
      pointsPerGame: p.membership.pointsPerGame ?? null,
      reboundsPerGame: p.membership.reboundsPerGame ?? null,
      assistsPerGame: p.membership.assistsPerGame ?? null,
    };

    const membership = await prisma.teamMembership.upsert({
      where: { personId_teamId: { personId: person.id, teamId: team.id } },
      update: membershipData,
      create: { personId: person.id, teamId: team.id, ...membershipData },
    });

    if (p.membership.seasonStats?.length) {
      await prisma.seasonStats.deleteMany({ where: { membershipId: membership.id } });
      for (const stat of p.membership.seasonStats) {
        await prisma.seasonStats.create({
          data: {
            membershipId: membership.id,
            season: stat.season,
            yearLabel: stat.yearLabel,
            sortOrder: stat.sortOrder,
            gamesPlayed: stat.gamesPlayed ?? null,
            pointsPerGame: stat.pointsPerGame ?? null,
            reboundsPerGame: stat.reboundsPerGame ?? null,
            assistsPerGame: stat.assistsPerGame ?? null,
          },
        });
      }
    }

    if (p.careerEvents) {
      await prisma.careerEvent.deleteMany({ where: { personId: person.id } });
      for (const event of p.careerEvents) {
        await prisma.careerEvent.create({
          data: {
            personId: person.id,
            year: event.year,
            title: event.title,
            eventType: event.eventType ?? null,
            detail: event.detail ?? null,
          },
        });
      }
    }

    console.log(`  ✓ ${p.firstName} ${p.lastName}`);
  }

  console.log(`\n✅ Seeded ${people.length} people for the ${team.name} (${team.season})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
