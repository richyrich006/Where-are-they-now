import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_PATH ?? "./dev.db" });
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  // ── Team ──────────────────────────────────────────────────────────────────
  const team = await prisma.team.upsert({
    where: { slug: "duke-basketball-2015" },
    update: {},
    create: {
      slug: "duke-basketball-2015",
      name: "Duke Blue Devils",
      season: "2014-2015",
      sport: "Men's Basketball",
      school: "Duke University",
      conference: "ACC",
      accomplishment: "NCAA National Champions",
    },
  });

  // ── Helpers ───────────────────────────────────────────────────────────────
  type PersonSeed = {
    slug: string;
    firstName: string;
    lastName: string;
    birthYear?: number;
    hometown?: string;
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
    };
    membership: {
      role: "PLAYER" | "HEAD_COACH" | "ASSISTANT_COACH" | "MANAGER";
      jerseyNumber?: number;
      position?: string;
      yearsAtSchool?: string;
      statsNote?: string;
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
      isFeatured: true,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626143.png",
      collegeImageUrl: "https://a.espncdn.com/i/headshots/mens-college-basketball/players/full/3135048.png",
      bio: "One-and-done center who was the ACC Player of the Year and a consensus All-American in 2015. Selected #3 overall in the NBA Draft by the Philadelphia 76ers.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Free Agent / Professional Basketball Player",
        league: "NBA / International",
        statusNote:
          "Played for the 76ers, Nets, Pistons, Pelicans, Mavericks, Rockets, Suns, and Pacers. Most recently played in Japan's B.League with Levanga Hokkaido.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jahlil_Okafor",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 15,
        position: "Center",
        yearsAtSchool: "2014-2015",
        statsNote:
          "ACC Player of the Year • National Freshman of the Year • Averaged 17.3 pts, 8.5 reb per game",
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
      isFeatured: true,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626145.png",
      collegeImageUrl: "https://a.espncdn.com/i/headshots/mens-college-basketball/players/full/3135046.png",
      bio: "The heart of the 2015 championship team. Jones scored 23 points in the national title game against Wisconsin to earn Most Outstanding Player honors.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Point Guard",
        currentEmployer: "Phoenix Suns",
        league: "NBA",
        location: "Phoenix, AZ",
        statusNote:
          "Has played for Minnesota, Memphis, and Phoenix. Known as one of the best backup point guards in the league with an elite assist-to-turnover ratio.",
        sourceUrl: "https://en.wikipedia.org/wiki/Tyus_Jones",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 5,
        position: "Point Guard",
        yearsAtSchool: "2014-2015",
        statsNote:
          "2015 NCAA Tournament Most Outstanding Player • 23 points in championship game vs. Wisconsin",
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
      isFeatured: true,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628960.png",
      collegeImageUrl: "https://a.espncdn.com/i/headshots/mens-college-basketball/players/full/3135045.png",
      bio: "Came off the bench as a freshman to score 16 points in the national championship game. Stayed at Duke all four years before entering the NBA Draft.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Shooting Guard",
        currentEmployer: "Phoenix Suns",
        league: "NBA",
        location: "Phoenix, AZ",
        statusNote:
          "Was drafted by Utah Jazz in 2018, played for Memphis, Milwaukee, and Phoenix. Won the 2021 NBA Championship with the Bucks.",
        sourceUrl: "https://en.wikipedia.org/wiki/Grayson_Allen",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 3,
        position: "Shooting Guard",
        yearsAtSchool: "2014-2018",
        statsNote:
          "16 points in the 2015 national championship game • 4-year starter at Duke • 2018 ACC Player of the Year",
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
      isFeatured: false,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626159.png",
      collegeImageUrl: "https://a.espncdn.com/i/headshots/mens-college-basketball/players/full/3135047.png",
      bio: "A versatile defensive stopper who anchored Duke's perimeter defense during the championship run. Selected 10th overall by the Miami Heat.",
      status: {
        occupationType: "RETIRED_ATHLETE",
        currentTitle: "Retired NBA Player",
        statusNote:
          "Career curtailed by hip and back injuries. Last played for the Toronto Raptors in 2022. Has spoken publicly about exploring life after basketball.",
        sourceUrl: "https://en.wikipedia.org/wiki/Justise_Winslow",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 12,
        position: "Small Forward / Shooting Guard",
        yearsAtSchool: "2014-2015",
        statsNote:
          "10th overall pick, 2015 NBA Draft (Miami Heat) • Key defensive stopper on championship team",
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
      isFeatured: false,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626188.png",
      collegeImageUrl: "https://a.espncdn.com/i/headshots/mens-college-basketball/players/full/2566745.png",
      bio: "The senior captain who led Duke's locker room culture during the championship season. Despite going undrafted, Cook carved out a six-year NBA career and won two championships.",
      status: {
        occupationType: "RETIRED_ATHLETE",
        currentTitle: "Retired NBA Player",
        statusNote:
          "Went undrafted but made the NBA via G-League. Won two NBA championships — with Golden State Warriors (2018) and Los Angeles Lakers (2020). Most recently played overseas.",
        sourceUrl: "https://en.wikipedia.org/wiki/Quinn_Cook",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 2,
        position: "Point Guard",
        yearsAtSchool: "2011-2015",
        statsNote: "Team captain • 4-year starter • 2015 ACC Tournament champion",
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
      isFeatured: false,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628518.png",
      collegeImageUrl: "https://a.espncdn.com/i/headshots/mens-college-basketball/players/full/2982249.png",
      bio: "A workhorse power forward who chose to return to Duke multiple times. After a brief NBA career, he transitioned into coaching.",
      status: {
        occupationType: "COACH",
        currentTitle: "Assistant Coach",
        currentEmployer: "Boston Celtics",
        league: "NBA",
        location: "Boston, MA",
        statusNote:
          "Played for Orlando Magic and Boston Celtics before transitioning to coaching. Served as director of player development at Duke under Jon Scheyer before joining the Celtics staff.",
        sourceUrl: "https://en.wikipedia.org/wiki/Amile_Jefferson",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 21,
        position: "Power Forward",
        yearsAtSchool: "2013-2017",
        statsNote: "4x All-ACC Academic Team • 103 starts in 150 career games",
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
      isFeatured: false,
      bio: "A sharpshooting guard who hit a clutch 4-of-7 from three-point range against Gonzaga in the Elite Eight. After a stint in the G-League and overseas, he transitioned to the business world.",
      status: {
        occupationType: "ENTREPRENEUR_BUSINESS",
        currentTitle: "Landlord Representation Broker",
        currentEmployer: "JLL (Jones Lang LaSalle)",
        location: "San Francisco Bay Area, CA",
        statusNote:
          "After playing in the G-League (Reno Bighorns) and Taiwan, Jones built a career in commercial real estate in the Bay Area.",
        sourceUrl: "https://en.wikipedia.org/wiki/Matt_Jones_(basketball)",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 13,
        position: "Shooting Guard",
        yearsAtSchool: "2013-2016",
        statsNote:
          "4-7 from three in Elite Eight vs Gonzaga • South Region All-Tournament Team",
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
      isFeatured: true,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627850.png",
      collegeImageUrl: "https://a.espncdn.com/i/headshots/mens-college-basketball/players/full/2566748.png",
      bio: "The youngest of three Plumlee brothers to play at Duke. After his NBA stint, Marshall pursued one of the most unique post-career paths in college basketball history — the U.S. Army.",
      status: {
        occupationType: "OTHER",
        currentTitle: "U.S. Army Officer / Business Student",
        location: "United States",
        statusNote:
          "Commissioned into the New York Army National Guard in 2017. Completed Army Ranger School in 2019 — one of the most demanding military training courses in the world. Subsequently enrolled at Harvard Business School.",
        sourceUrl: "https://en.wikipedia.org/wiki/Marshall_Plumlee",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 42,
        position: "Center",
        yearsAtSchool: "2011-2016",
        statsNote:
          "Team captain • Started all 36 games as a senior (8.3 ppg, 8.6 rpg) • Brother of Mason and Miles Plumlee",
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
          year: 2022,
          title: "Enrolled at Harvard Business School",
          eventType: "STUDENT",
        },
      ],
    },
    {
      slug: "semi-ojeleye",
      firstName: "Semi",
      lastName: "Ojeleye",
      birthYear: 1995,
      hometown: "Aurora, CO",
      isFeatured: false,
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628400.png",
      collegeImageUrl: "https://a.espncdn.com/i/headshots/mens-college-basketball/players/full/3056602.png",
      bio: "Transferred from Duke to SMU where he became a star before being drafted by the Boston Celtics. Has continued his professional career in European leagues.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Power Forward",
        currentEmployer: "Crvena zvezda (Red Star Belgrade)",
        league: "ABA League / EuroLeague",
        location: "Belgrade, Serbia",
        statusNote:
          "After the NBA, played for Virtus Bologna in the EuroLeague before joining Crvena zvezda in the ABA League.",
        sourceUrl: "https://en.wikipedia.org/wiki/Semi_Ojeleye",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 32,
        position: "Power Forward",
        yearsAtSchool: "2014-2016",
        statsNote: "Transferred to SMU after Duke • 2016 Parade Magazine All-American",
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
      isFeatured: false,
      bio: "A key contributor in the first half of the 2014-15 season before being dismissed from the team in January 2015. He finished his Duke degree in three years, transferred to Maryland for one final season, and went on to build a decade-long professional career in Europe — winning a league MVP award along the way.",
      status: {
        occupationType: "ACTIVE_PRO_ATHLETE",
        currentTitle: "Shooting Guard",
        currentEmployer: "KK Buducnost VOLI",
        league: "ABA Liga",
        location: "Podgorica, Montenegro",
        statusNote:
          "Built a long and productive professional career in Europe since 2016. Played in France (JDA Dijon Bourgogne, Boulogne Metropolitans, JL Bourg en Bresse), Spain (Baloncesto Zaragoza), Turkey (Konyaspor Basketball), Lithuania (Wolves Vilnius), and Montenegro (KK Buducnost VOLI). Won a league MVP award overseas. Averaging 12.3 ppg for Buducnost in the ABA Liga.",
        sourceUrl: "https://en.wikipedia.org/wiki/Rasheed_Sulaimon",
      },
      membership: {
        role: "PLAYER",
        jerseyNumber: 14,
        position: "Shooting Guard",
        yearsAtSchool: "2012-2015",
        statsNote:
          "Dismissed from team January 2015 • Transferred to Maryland (2015-16 All-Big Ten honorable mention, 11.3 ppg)",
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
          title: "Signed with KK Buducnost VOLI (Montenegro, ABA Liga)",
          eventType: "SIGNING",
        },
      ],
    },
    {
      slug: "brennan-besser",
      firstName: "Brennan",
      lastName: "Besser",
      birthYear: 1996,
      hometown: "Chicago, IL",
      isFeatured: false,
      bio: "A walk-on guard who was part of the 2015 championship roster. After Duke, Besser channeled the walk-on spirit into life — founding 'Walk On! America,' a charity supporting people with intellectual and developmental disabilities (IDD), inspired by his sister Jacqueline. He completed a 3,400-mile cross-country bike ride in 69 days raising over $343,000 for the IDD community.",
      status: {
        occupationType: "ENTREPRENEUR_BUSINESS",
        currentTitle: "Sports Business Professional / Entrepreneur",
        currentEmployer: "Intersport",
        location: "Chicago, IL",
        statusNote:
          "Founded 'Walk On! America,' a charity for the intellectual and developmental disability (IDD) community inspired by his sister Jacqueline, who has autism. Completed a 3,400-mile cross-country bike ride in 69 days, raising over $343,000. Now works at Intersport in Chicago on NFL and sports marketing partnerships. Also involved in startup investing and venture financing.",
        sourceUrl:
          "https://www.espn.com/mens-college-basketball/story/_/id/24123073/duke-blue-devils-brennan-besser-completes-bike-ride-america",
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
      ],
    },

    {
      slug: "sean-obi",
      firstName: "Sean",
      lastName: "Obi",
      birthYear: 1994,
      hometown: "Kaduna, Nigeria",
      isFeatured: false,
      bio: "A 6'9\" transfer from Rice who joined Duke for the 2014-15 championship season but sat out due to NCAA transfer rules. At Rice he averaged 11.4 points and a Conference USA-leading 9.3 rebounds as a freshman. After earning his sociology degree at Duke he graduate-transferred to Maryland for one final season.",
      status: {
        occupationType: "OTHER",
        currentTitle: "Former College Basketball Player",
        statusNote:
          "Sat out the 2014-15 championship season due to NCAA transfer rules, then played limited minutes in 2015-16 before a knee injury ended his 2016-17 season. Graduate-transferred to Maryland (2017-18) to play one final season under coach Mark Turgeon. Was not drafted. Post-basketball career not publicly documented; earned a sociology degree with a marketing minor from Duke.",
        sourceUrl: "https://goduke.com/sports/mens-basketball/roster/sean-obi/4420",
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
      isFeatured: false,
      bio: "A walk-on guard and computer science major who turned down smaller D1 programs to walk on at Duke. His father Steve Pagliuca is a co-owner of the Boston Celtics and a 1977 Duke grad. Nick won the Deryl Hart Award (team's top scholar-athlete), was a National Merit Scholar, and interned at Apple — then went on to Harvard Business School and Palantir Technologies.",
      status: {
        occupationType: "ENTREPRENEUR_BUSINESS",
        currentTitle: "Software / Data Professional",
        currentEmployer: "Palantir Technologies",
        location: "New York, NY",
        statusNote:
          "After graduating from Duke with a computer science degree (National Merit Scholar, Deryl Hart Award winner), Pagliuca attended Harvard Business School. Now works at Palantir Technologies in New York, a high-profile data analytics and AI company. A standout example of a walk-on athlete excelling academically and professionally.",
        sourceUrl: "https://www.bostonglobe.com/metro/regionals/west/2015/04/16/campus-angle-nick-pagliuca-weston-duke-university-basketball/gC95R2oHaumOwKDWsNYjuJ/story.html",
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
      isFeatured: true,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/20131203_Mike_Krzyzewski.jpg/400px-20131203_Mike_Krzyzewski.jpg",
      collegeImageUrl: "https://a.espncdn.com/i/headshots/college-basketball/coaches/full/190.png",
      bio: "Known simply as \"Coach K,\" Krzyzewski is the most decorated coach in college basketball history. He won five national championships at Duke and coached the U.S. Olympic team to three gold medals. He retired in 2022 as the all-time wins leader in Division I men's basketball.",
      status: {
        occupationType: "RETIRED_COACH",
        currentTitle: "Retired Head Coach",
        currentEmployer: "Duke University (Emeritus)",
        location: "Durham, NC",
        statusNote:
          "Retired after the 2021-22 season with 1,202 career wins — the all-time Division I record. 5x NCAA champion (1991, 1992, 2001, 2010, 2015). 3x Olympic gold medalist as USA head coach.",
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
      isFeatured: false,
      bio: "A former Duke player himself, Capel returned to Durham as an assistant coach and was instrumental in recruiting the 2014 #1-ranked recruiting class. He went on to become a head coach.",
      status: {
        occupationType: "COACH",
        currentTitle: "Head Coach",
        currentEmployer: "University of Pittsburgh Panthers",
        league: "NCAA Division I (ACC)",
        location: "Pittsburgh, PA",
        statusNote:
          "Named head coach at Pittsburgh in 2018. Has rebuilt the program into an ACC contender.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jeff_Capel",
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
      isFeatured: true,
      bio: "A former Duke star player who joined Coach K's staff and rose through the ranks to become his successor. At just 34, Scheyer became one of the youngest head coaches of a major program in the country.",
      status: {
        occupationType: "COACH",
        currentTitle: "Head Coach",
        currentEmployer: "Duke Blue Devils Men's Basketball",
        league: "NCAA Division I (ACC)",
        location: "Durham, NC",
        statusNote:
          "Succeeded Mike Krzyzewski as Duke head coach in 2022. Led Duke to the Elite Eight in his first season. Continuning to build on Coach K's legacy.",
        sourceUrl: "https://en.wikipedia.org/wiki/Jon_Scheyer",
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
      ],
    },
    {
      slug: "nate-james",
      firstName: "Nate",
      lastName: "James",
      birthYear: 1978,
      hometown: "Roanoke Rapids, NC",
      isFeatured: false,
      bio: "A former Duke player who spent 13 years on Coach K's staff, rising to Associate Head Coach and winning two national championships as a coach. After a brief head coaching stint at Austin Peay, he returned to the DMV area where he grew up, joining Howard University.",
      status: {
        occupationType: "COACH",
        currentTitle: "Associate Head Coach",
        currentEmployer: "Howard University",
        league: "NCAA Division I (MEAC)",
        location: "Washington, D.C.",
        statusNote:
          "Left Duke in 2021 to become head coach at Austin Peay State University (21-39 in two seasons, dismissed 2023). In October 2025, joined Howard University as Associate Head Coach under fellow Duke alum Kenny Blakeney — a homecoming to the DMV area where James grew up. Brings high-level recruiting and development experience from 13 years under Coach K.",
        sourceUrl: "https://hubison.com/news/2025/10/20/mens-basketball-mens-basketball-welcomes-nate-james-to-the-bison-family.aspx",
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
      birthYear: 1978,
      hometown: "St. Louis, MO",
      isFeatured: false,
      bio: "A former Duke ACC Player of the Year who returned to his alma mater as a coach.",
      status: {
        occupationType: "COACH",
        currentTitle: "Associate Head Coach / Offensive Coordinator",
        currentEmployer: "Duke Blue Devils Men's Basketball",
        league: "NCAA Division I (ACC)",
        location: "Durham, NC",
        statusNote: "Promoted to Associate Head Coach in 2021 and serves as Duke's offensive coordinator under Jon Scheyer. Has helped develop NBA Draft picks Mark Williams (2022), Dereck Lively II (2023), and Kyle Filipowski (2024). Duke has gone 258-48 in his six seasons on staff.",
        sourceUrl: "https://en.wikipedia.org/wiki/Chris_Carrawell",
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
    };

    await prisma.teamMembership.upsert({
      where: { personId_teamId: { personId: person.id, teamId: team.id } },
      update: membershipData,
      create: { personId: person.id, teamId: team.id, ...membershipData },
    });

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
