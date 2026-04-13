import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import type { TeamSeed, PersonSeed } from "./seeds/types";
import { alabamaFootball2015 } from "./seeds/alabama-football-2015";
import { bostonCollegeBasketball2009 } from "./seeds/boston-college-basketball-2009";
import { bostonCollegeBasketball2010 } from "./seeds/boston-college-basketball-2010";
import { bostonCollegeBasketball2011 } from "./seeds/boston-college-basketball-2011";
import { bostonCollegeBasketball2012 } from "./seeds/boston-college-basketball-2012";
import { bostonCollegeBasketball2013 } from "./seeds/boston-college-basketball-2013";
import { bostonCollegeBasketball2014 } from "./seeds/boston-college-basketball-2014";
import { bostonCollegeBasketball2015 } from "./seeds/boston-college-basketball-2015";
import { bostonCollegeBasketball2016 } from "./seeds/boston-college-basketball-2016";
import { bostonCollegeBasketball2017 } from "./seeds/boston-college-basketball-2017";
import { bostonCollegeBasketball2018 } from "./seeds/boston-college-basketball-2018";
import { bostonCollegeBasketball2019 } from "./seeds/boston-college-basketball-2019";
import { bostonCollegeBasketball2020 } from "./seeds/boston-college-basketball-2020";
import { bostonCollegeBasketball2021 } from "./seeds/boston-college-basketball-2021";
import { bostonCollegeBasketball2022 } from "./seeds/boston-college-basketball-2022";
import { bostonCollegeBasketball2023 } from "./seeds/boston-college-basketball-2023";
import { bostonCollegeBasketball2024 } from "./seeds/boston-college-basketball-2024";
import { bostonCollegeBasketball2025 } from "./seeds/boston-college-basketball-2025";
import { clemsonBasketball2009 } from "./seeds/clemson-basketball-2009";
import { clemsonBasketball2010 } from "./seeds/clemson-basketball-2010";
import { clemsonBasketball2011 } from "./seeds/clemson-basketball-2011";
import { clemsonBasketball2012 } from "./seeds/clemson-basketball-2012";
import { clemsonBasketball2013 } from "./seeds/clemson-basketball-2013";
import { clemsonBasketball2014 } from "./seeds/clemson-basketball-2014";
import { clemsonBasketball2015 } from "./seeds/clemson-basketball-2015";
import { clemsonBasketball2016 } from "./seeds/clemson-basketball-2016";
import { clemsonBasketball2017 } from "./seeds/clemson-basketball-2017";
import { clemsonBasketball2018 } from "./seeds/clemson-basketball-2018";
import { clemsonBasketball2019 } from "./seeds/clemson-basketball-2019";
import { clemsonBasketball2020 } from "./seeds/clemson-basketball-2020";
import { clemsonBasketball2021 } from "./seeds/clemson-basketball-2021";
import { clemsonBasketball2022 } from "./seeds/clemson-basketball-2022";
import { clemsonBasketball2023 } from "./seeds/clemson-basketball-2023";
import { clemsonBasketball2024 } from "./seeds/clemson-basketball-2024";
import { clemsonBasketball2025 } from "./seeds/clemson-basketball-2025";
import { dukeBasketball2001 } from "./seeds/duke-basketball-2001";
import { dukeBasketball2002 } from "./seeds/duke-basketball-2002";
import { dukeBasketball2003 } from "./seeds/duke-basketball-2003";
import { dukeBasketball2004 } from "./seeds/duke-basketball-2004";
import { dukeBasketball2005 } from "./seeds/duke-basketball-2005";
import { dukeBasketball2006 } from "./seeds/duke-basketball-2006";
import { dukeBasketball2007 } from "./seeds/duke-basketball-2007";
import { dukeBasketball2008 } from "./seeds/duke-basketball-2008";
import { dukeBasketball2009 } from "./seeds/duke-basketball-2009";
import { dukeBasketball2010 } from "./seeds/duke-basketball-2010";
import { dukeBasketball2011 } from "./seeds/duke-basketball-2011";
import { dukeBasketball2012 } from "./seeds/duke-basketball-2012";
import { dukeBasketball2013 } from "./seeds/duke-basketball-2013";
import { dukeBasketball2014 } from "./seeds/duke-basketball-2014";
import { dukeBasketball2015 } from "./seeds/duke-basketball-2015";
import { dukeBasketball2016 } from "./seeds/duke-basketball-2016";
import { dukeBasketball2017 } from "./seeds/duke-basketball-2017";
import { dukeBasketball2018 } from "./seeds/duke-basketball-2018";
import { dukeBasketball2019 } from "./seeds/duke-basketball-2019";
import { dukeBasketball2020 } from "./seeds/duke-basketball-2020";
import { dukeBasketball2021 } from "./seeds/duke-basketball-2021";
import { dukeBasketball2022 } from "./seeds/duke-basketball-2022";
import { dukeBasketball2023 } from "./seeds/duke-basketball-2023";
import { dukeBasketball2024 } from "./seeds/duke-basketball-2024";
import { dukeBasketball2025 } from "./seeds/duke-basketball-2025";
import { floridaBasketball2004 } from "./seeds/florida-basketball-2004";
import { floridaBasketball2005 } from "./seeds/florida-basketball-2005";
import { floridaStateBasketball2009 } from "./seeds/florida-state-basketball-2009";
import { floridaStateBasketball2010 } from "./seeds/florida-state-basketball-2010";
import { floridaStateBasketball2011 } from "./seeds/florida-state-basketball-2011";
import { floridaStateBasketball2012 } from "./seeds/florida-state-basketball-2012";
import { floridaStateBasketball2013 } from "./seeds/florida-state-basketball-2013";
import { floridaStateBasketball2014 } from "./seeds/florida-state-basketball-2014";
import { floridaStateBasketball2015 } from "./seeds/florida-state-basketball-2015";
import { floridaStateBasketball2016 } from "./seeds/florida-state-basketball-2016";
import { floridaStateBasketball2017 } from "./seeds/florida-state-basketball-2017";
import { floridaStateBasketball2018 } from "./seeds/florida-state-basketball-2018";
import { floridaStateBasketball2019 } from "./seeds/florida-state-basketball-2019";
import { floridaStateBasketball2020 } from "./seeds/florida-state-basketball-2020";
import { floridaStateBasketball2021 } from "./seeds/florida-state-basketball-2021";
import { floridaStateBasketball2022 } from "./seeds/florida-state-basketball-2022";
import { floridaStateBasketball2023 } from "./seeds/florida-state-basketball-2023";
import { floridaStateBasketball2024 } from "./seeds/florida-state-basketball-2024";
import { floridaStateBasketball2025 } from "./seeds/florida-state-basketball-2025";
import { georgiaTechBasketball2009 } from "./seeds/georgia-tech-basketball-2009";
import { georgiaTechBasketball2010 } from "./seeds/georgia-tech-basketball-2010";
import { georgiaTechBasketball2011 } from "./seeds/georgia-tech-basketball-2011";
import { georgiaTechBasketball2012 } from "./seeds/georgia-tech-basketball-2012";
import { georgiaTechBasketball2013 } from "./seeds/georgia-tech-basketball-2013";
import { georgiaTechBasketball2014 } from "./seeds/georgia-tech-basketball-2014";
import { georgiaTechBasketball2015 } from "./seeds/georgia-tech-basketball-2015";
import { georgiaTechBasketball2016 } from "./seeds/georgia-tech-basketball-2016";
import { georgiaTechBasketball2017 } from "./seeds/georgia-tech-basketball-2017";
import { georgiaTechBasketball2018 } from "./seeds/georgia-tech-basketball-2018";
import { georgiaTechBasketball2019 } from "./seeds/georgia-tech-basketball-2019";
import { georgiaTechBasketball2020 } from "./seeds/georgia-tech-basketball-2020";
import { georgiaTechBasketball2021 } from "./seeds/georgia-tech-basketball-2021";
import { georgiaTechBasketball2022 } from "./seeds/georgia-tech-basketball-2022";
import { georgiaTechBasketball2023 } from "./seeds/georgia-tech-basketball-2023";
import { georgiaTechBasketball2024 } from "./seeds/georgia-tech-basketball-2024";
import { georgiaTechBasketball2025 } from "./seeds/georgia-tech-basketball-2025";
import { kentuckyBasketball2010 } from "./seeds/kentucky-basketball-2010";
import { kentuckyBasketball2011 } from "./seeds/kentucky-basketball-2011";
import { kentuckyBasketball2012 } from "./seeds/kentucky-basketball-2012";
import { kentuckyBasketball2013 } from "./seeds/kentucky-basketball-2013";
import { kentuckyBasketball2014 } from "./seeds/kentucky-basketball-2014";
import { kentuckyBasketball2015 } from "./seeds/kentucky-basketball-2015";
import { kentuckyBasketball2016 } from "./seeds/kentucky-basketball-2016";
import { kentuckyBasketball2017 } from "./seeds/kentucky-basketball-2017";
import { kentuckyBasketball2018 } from "./seeds/kentucky-basketball-2018";
import { kentuckyBasketball2019 } from "./seeds/kentucky-basketball-2019";
import { kentuckyBasketball2020 } from "./seeds/kentucky-basketball-2020";
import { kentuckyBasketball2021 } from "./seeds/kentucky-basketball-2021";
import { kentuckyBasketball2022 } from "./seeds/kentucky-basketball-2022";
import { kentuckyBasketball2023 } from "./seeds/kentucky-basketball-2023";
import { kentuckyBasketball2024 } from "./seeds/kentucky-basketball-2024";
import { kentuckyBasketball2025 } from "./seeds/kentucky-basketball-2025";
import { kentuckyBasketball2026 } from "./seeds/kentucky-basketball-2026";
import { louisvilleBasketball2009 } from "./seeds/louisville-basketball-2009";
import { louisvilleBasketball2010 } from "./seeds/louisville-basketball-2010";
import { louisvilleBasketball2011 } from "./seeds/louisville-basketball-2011";
import { louisvilleBasketball2012 } from "./seeds/louisville-basketball-2012";
import { louisvilleBasketball2013 } from "./seeds/louisville-basketball-2013";
import { louisvilleBasketball2014 } from "./seeds/louisville-basketball-2014";
import { louisvilleBasketball2015 } from "./seeds/louisville-basketball-2015";
import { louisvilleBasketball2016 } from "./seeds/louisville-basketball-2016";
import { louisvilleBasketball2017 } from "./seeds/louisville-basketball-2017";
import { louisvilleBasketball2018 } from "./seeds/louisville-basketball-2018";
import { louisvilleBasketball2019 } from "./seeds/louisville-basketball-2019";
import { louisvilleBasketball2020 } from "./seeds/louisville-basketball-2020";
import { louisvilleBasketball2021 } from "./seeds/louisville-basketball-2021";
import { louisvilleBasketball2022 } from "./seeds/louisville-basketball-2022";
import { louisvilleBasketball2023 } from "./seeds/louisville-basketball-2023";
import { louisvilleBasketball2024 } from "./seeds/louisville-basketball-2024";
import { louisvilleBasketball2025 } from "./seeds/louisville-basketball-2025";
import { miamiBasketball2009 } from "./seeds/miami-basketball-2009";
import { miamiBasketball2010 } from "./seeds/miami-basketball-2010";
import { miamiBasketball2011 } from "./seeds/miami-basketball-2011";
import { miamiBasketball2012 } from "./seeds/miami-basketball-2012";
import { miamiBasketball2013 } from "./seeds/miami-basketball-2013";
import { miamiBasketball2014 } from "./seeds/miami-basketball-2014";
import { miamiBasketball2015 } from "./seeds/miami-basketball-2015";
import { miamiBasketball2016 } from "./seeds/miami-basketball-2016";
import { miamiBasketball2017 } from "./seeds/miami-basketball-2017";
import { miamiBasketball2018 } from "./seeds/miami-basketball-2018";
import { miamiBasketball2019 } from "./seeds/miami-basketball-2019";
import { miamiBasketball2020 } from "./seeds/miami-basketball-2020";
import { miamiBasketball2021 } from "./seeds/miami-basketball-2021";
import { miamiBasketball2022 } from "./seeds/miami-basketball-2022";
import { miamiBasketball2023 } from "./seeds/miami-basketball-2023";
import { miamiBasketball2024 } from "./seeds/miami-basketball-2024";
import { miamiBasketball2025 } from "./seeds/miami-basketball-2025";
import { montverdeAcademy2020 } from "./seeds/montverde-academy-2020";
import { ncstateBasketball2009 } from "./seeds/ncstate-basketball-2009";
import { ncstateBasketball2010 } from "./seeds/ncstate-basketball-2010";
import { ncstateBasketball2011 } from "./seeds/ncstate-basketball-2011";
import { ncstateBasketball2012 } from "./seeds/ncstate-basketball-2012";
import { ncstateBasketball2013 } from "./seeds/ncstate-basketball-2013";
import { ncstateBasketball2014 } from "./seeds/ncstate-basketball-2014";
import { ncstateBasketball2015 } from "./seeds/ncstate-basketball-2015";
import { ncstateBasketball2016 } from "./seeds/ncstate-basketball-2016";
import { ncstateBasketball2017 } from "./seeds/ncstate-basketball-2017";
import { ncstateBasketball2018 } from "./seeds/ncstate-basketball-2018";
import { ncstateBasketball2019 } from "./seeds/ncstate-basketball-2019";
import { ncstateBasketball2020 } from "./seeds/ncstate-basketball-2020";
import { ncstateBasketball2021 } from "./seeds/ncstate-basketball-2021";
import { ncstateBasketball2022 } from "./seeds/ncstate-basketball-2022";
import { ncstateBasketball2023 } from "./seeds/ncstate-basketball-2023";
import { ncstateBasketball2024 } from "./seeds/ncstate-basketball-2024";
import { ncstateBasketball2025 } from "./seeds/ncstate-basketball-2025";
import { notreDameBasketball2009 } from "./seeds/notre-dame-basketball-2009";
import { notreDameBasketball2010 } from "./seeds/notre-dame-basketball-2010";
import { notreDameBasketball2011 } from "./seeds/notre-dame-basketball-2011";
import { notreDameBasketball2012 } from "./seeds/notre-dame-basketball-2012";
import { notreDameBasketball2013 } from "./seeds/notre-dame-basketball-2013";
import { notreDameBasketball2014 } from "./seeds/notre-dame-basketball-2014";
import { notreDameBasketball2015 } from "./seeds/notre-dame-basketball-2015";
import { notreDameBasketball2016 } from "./seeds/notre-dame-basketball-2016";
import { notreDameBasketball2017 } from "./seeds/notre-dame-basketball-2017";
import { notreDameBasketball2018 } from "./seeds/notre-dame-basketball-2018";
import { notreDameBasketball2019 } from "./seeds/notre-dame-basketball-2019";
import { notreDameBasketball2020 } from "./seeds/notre-dame-basketball-2020";
import { notreDameBasketball2021 } from "./seeds/notre-dame-basketball-2021";
import { notreDameBasketball2022 } from "./seeds/notre-dame-basketball-2022";
import { notreDameBasketball2023 } from "./seeds/notre-dame-basketball-2023";
import { notreDameBasketball2024 } from "./seeds/notre-dame-basketball-2024";
import { notreDameBasketball2025 } from "./seeds/notre-dame-basketball-2025";
import { pittBasketball2009 } from "./seeds/pitt-basketball-2009";
import { pittBasketball2010 } from "./seeds/pitt-basketball-2010";
import { pittBasketball2011 } from "./seeds/pitt-basketball-2011";
import { pittBasketball2012 } from "./seeds/pitt-basketball-2012";
import { pittBasketball2013 } from "./seeds/pitt-basketball-2013";
import { pittBasketball2014 } from "./seeds/pitt-basketball-2014";
import { pittBasketball2015 } from "./seeds/pitt-basketball-2015";
import { pittBasketball2016 } from "./seeds/pitt-basketball-2016";
import { pittBasketball2017 } from "./seeds/pitt-basketball-2017";
import { pittBasketball2018 } from "./seeds/pitt-basketball-2018";
import { pittBasketball2019 } from "./seeds/pitt-basketball-2019";
import { pittBasketball2020 } from "./seeds/pitt-basketball-2020";
import { pittBasketball2021 } from "./seeds/pitt-basketball-2021";
import { pittBasketball2022 } from "./seeds/pitt-basketball-2022";
import { pittBasketball2023 } from "./seeds/pitt-basketball-2023";
import { pittBasketball2024 } from "./seeds/pitt-basketball-2024";
import { pittBasketball2025 } from "./seeds/pitt-basketball-2025";
import { syracuseBasketball2009 } from "./seeds/syracuse-basketball-2009";
import { syracuseBasketball2010 } from "./seeds/syracuse-basketball-2010";
import { syracuseBasketball2011 } from "./seeds/syracuse-basketball-2011";
import { syracuseBasketball2012 } from "./seeds/syracuse-basketball-2012";
import { syracuseBasketball2013 } from "./seeds/syracuse-basketball-2013";
import { syracuseBasketball2014 } from "./seeds/syracuse-basketball-2014";
import { syracuseBasketball2015 } from "./seeds/syracuse-basketball-2015";
import { syracuseBasketball2016 } from "./seeds/syracuse-basketball-2016";
import { syracuseBasketball2017 } from "./seeds/syracuse-basketball-2017";
import { syracuseBasketball2018 } from "./seeds/syracuse-basketball-2018";
import { syracuseBasketball2019 } from "./seeds/syracuse-basketball-2019";
import { syracuseBasketball2020 } from "./seeds/syracuse-basketball-2020";
import { syracuseBasketball2021 } from "./seeds/syracuse-basketball-2021";
import { syracuseBasketball2022 } from "./seeds/syracuse-basketball-2022";
import { syracuseBasketball2023 } from "./seeds/syracuse-basketball-2023";
import { syracuseBasketball2024 } from "./seeds/syracuse-basketball-2024";
import { syracuseBasketball2025 } from "./seeds/syracuse-basketball-2025";
import { texasBasketball2003 } from "./seeds/texas-basketball-2003";
import { texasBasketball2006 } from "./seeds/texas-basketball-2006";
import { texasBasketball2007 } from "./seeds/texas-basketball-2007";
import { uncBasketball2009 } from "./seeds/unc-basketball-2009";
import { uncBasketball2010 } from "./seeds/unc-basketball-2010";
import { uncBasketball2011 } from "./seeds/unc-basketball-2011";
import { uncBasketball2012 } from "./seeds/unc-basketball-2012";
import { uncBasketball2013 } from "./seeds/unc-basketball-2013";
import { uncBasketball2014 } from "./seeds/unc-basketball-2014";
import { uncBasketball2015 } from "./seeds/unc-basketball-2015";
import { uncBasketball2016 } from "./seeds/unc-basketball-2016";
import { uncBasketball2017 } from "./seeds/unc-basketball-2017";
import { uncBasketball2018 } from "./seeds/unc-basketball-2018";
import { uncBasketball2019 } from "./seeds/unc-basketball-2019";
import { uncBasketball2020 } from "./seeds/unc-basketball-2020";
import { uncBasketball2021 } from "./seeds/unc-basketball-2021";
import { uncBasketball2022 } from "./seeds/unc-basketball-2022";
import { uncBasketball2023 } from "./seeds/unc-basketball-2023";
import { uncBasketball2024 } from "./seeds/unc-basketball-2024";
import { uncBasketball2025 } from "./seeds/unc-basketball-2025";
import { uscFootball2005 } from "./seeds/usc-football-2005";
import { virginiaBasketball2009 } from "./seeds/virginia-basketball-2009";
import { virginiaBasketball2010 } from "./seeds/virginia-basketball-2010";
import { virginiaBasketball2011 } from "./seeds/virginia-basketball-2011";
import { virginiaBasketball2012 } from "./seeds/virginia-basketball-2012";
import { virginiaBasketball2013 } from "./seeds/virginia-basketball-2013";
import { virginiaBasketball2014 } from "./seeds/virginia-basketball-2014";
import { virginiaBasketball2015 } from "./seeds/virginia-basketball-2015";
import { virginiaBasketball2016 } from "./seeds/virginia-basketball-2016";
import { virginiaBasketball2017 } from "./seeds/virginia-basketball-2017";
import { virginiaBasketball2018 } from "./seeds/virginia-basketball-2018";
import { virginiaBasketball2019 } from "./seeds/virginia-basketball-2019";
import { virginiaBasketball2020 } from "./seeds/virginia-basketball-2020";
import { virginiaBasketball2021 } from "./seeds/virginia-basketball-2021";
import { virginiaBasketball2022 } from "./seeds/virginia-basketball-2022";
import { virginiaBasketball2023 } from "./seeds/virginia-basketball-2023";
import { virginiaBasketball2024 } from "./seeds/virginia-basketball-2024";
import { virginiaBasketball2025 } from "./seeds/virginia-basketball-2025";
import { virginiaTechBasketball2009 } from "./seeds/virginia-tech-basketball-2009";
import { virginiaTechBasketball2010 } from "./seeds/virginia-tech-basketball-2010";
import { virginiaTechBasketball2011 } from "./seeds/virginia-tech-basketball-2011";
import { virginiaTechBasketball2012 } from "./seeds/virginia-tech-basketball-2012";
import { virginiaTechBasketball2013 } from "./seeds/virginia-tech-basketball-2013";
import { virginiaTechBasketball2014 } from "./seeds/virginia-tech-basketball-2014";
import { virginiaTechBasketball2015 } from "./seeds/virginia-tech-basketball-2015";
import { virginiaTechBasketball2016 } from "./seeds/virginia-tech-basketball-2016";
import { virginiaTechBasketball2017 } from "./seeds/virginia-tech-basketball-2017";
import { virginiaTechBasketball2018 } from "./seeds/virginia-tech-basketball-2018";
import { virginiaTechBasketball2019 } from "./seeds/virginia-tech-basketball-2019";
import { virginiaTechBasketball2020 } from "./seeds/virginia-tech-basketball-2020";
import { virginiaTechBasketball2021 } from "./seeds/virginia-tech-basketball-2021";
import { virginiaTechBasketball2022 } from "./seeds/virginia-tech-basketball-2022";
import { virginiaTechBasketball2023 } from "./seeds/virginia-tech-basketball-2023";
import { virginiaTechBasketball2024 } from "./seeds/virginia-tech-basketball-2024";
import { virginiaTechBasketball2025 } from "./seeds/virginia-tech-basketball-2025";
import { wakeForestBasketball2009 } from "./seeds/wake-forest-basketball-2009";
import { wakeForestBasketball2010 } from "./seeds/wake-forest-basketball-2010";
import { wakeForestBasketball2011 } from "./seeds/wake-forest-basketball-2011";
import { wakeForestBasketball2012 } from "./seeds/wake-forest-basketball-2012";
import { wakeForestBasketball2013 } from "./seeds/wake-forest-basketball-2013";
import { wakeForestBasketball2014 } from "./seeds/wake-forest-basketball-2014";
import { wakeForestBasketball2015 } from "./seeds/wake-forest-basketball-2015";
import { wakeForestBasketball2016 } from "./seeds/wake-forest-basketball-2016";
import { wakeForestBasketball2017 } from "./seeds/wake-forest-basketball-2017";
import { wakeForestBasketball2018 } from "./seeds/wake-forest-basketball-2018";
import { wakeForestBasketball2019 } from "./seeds/wake-forest-basketball-2019";
import { wakeForestBasketball2020 } from "./seeds/wake-forest-basketball-2020";
import { wakeForestBasketball2021 } from "./seeds/wake-forest-basketball-2021";
import { wakeForestBasketball2022 } from "./seeds/wake-forest-basketball-2022";
import { wakeForestBasketball2023 } from "./seeds/wake-forest-basketball-2023";
import { wakeForestBasketball2024 } from "./seeds/wake-forest-basketball-2024";
import { wakeForestBasketball2025 } from "./seeds/wake-forest-basketball-2025";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_PATH ?? "./dev.db" });
const prisma = new PrismaClient({ adapter } as any);

const allTeams: TeamSeed[] = [
  alabamaFootball2015,
  bostonCollegeBasketball2009,
  bostonCollegeBasketball2010,
  bostonCollegeBasketball2011,
  bostonCollegeBasketball2012,
  bostonCollegeBasketball2013,
  bostonCollegeBasketball2014,
  bostonCollegeBasketball2015,
  bostonCollegeBasketball2016,
  bostonCollegeBasketball2017,
  bostonCollegeBasketball2018,
  bostonCollegeBasketball2019,
  bostonCollegeBasketball2020,
  bostonCollegeBasketball2021,
  bostonCollegeBasketball2022,
  bostonCollegeBasketball2023,
  bostonCollegeBasketball2024,
  bostonCollegeBasketball2025,
  clemsonBasketball2009,
  clemsonBasketball2010,
  clemsonBasketball2011,
  clemsonBasketball2012,
  clemsonBasketball2013,
  clemsonBasketball2014,
  clemsonBasketball2015,
  clemsonBasketball2016,
  clemsonBasketball2017,
  clemsonBasketball2018,
  clemsonBasketball2019,
  clemsonBasketball2020,
  clemsonBasketball2021,
  clemsonBasketball2022,
  clemsonBasketball2023,
  clemsonBasketball2024,
  clemsonBasketball2025,
  dukeBasketball2001,
  dukeBasketball2002,
  dukeBasketball2003,
  dukeBasketball2004,
  dukeBasketball2005,
  dukeBasketball2006,
  dukeBasketball2007,
  dukeBasketball2008,
  dukeBasketball2009,
  dukeBasketball2010,
  dukeBasketball2011,
  dukeBasketball2012,
  dukeBasketball2013,
  dukeBasketball2014,
  dukeBasketball2015,
  dukeBasketball2016,
  dukeBasketball2017,
  dukeBasketball2018,
  dukeBasketball2019,
  dukeBasketball2020,
  dukeBasketball2021,
  dukeBasketball2022,
  dukeBasketball2023,
  dukeBasketball2024,
  dukeBasketball2025,
  floridaBasketball2004,
  floridaBasketball2005,
  floridaStateBasketball2009,
  floridaStateBasketball2010,
  floridaStateBasketball2011,
  floridaStateBasketball2012,
  floridaStateBasketball2013,
  floridaStateBasketball2014,
  floridaStateBasketball2015,
  floridaStateBasketball2016,
  floridaStateBasketball2017,
  floridaStateBasketball2018,
  floridaStateBasketball2019,
  floridaStateBasketball2020,
  floridaStateBasketball2021,
  floridaStateBasketball2022,
  floridaStateBasketball2023,
  floridaStateBasketball2024,
  floridaStateBasketball2025,
  georgiaTechBasketball2009,
  georgiaTechBasketball2010,
  georgiaTechBasketball2011,
  georgiaTechBasketball2012,
  georgiaTechBasketball2013,
  georgiaTechBasketball2014,
  georgiaTechBasketball2015,
  georgiaTechBasketball2016,
  georgiaTechBasketball2017,
  georgiaTechBasketball2018,
  georgiaTechBasketball2019,
  georgiaTechBasketball2020,
  georgiaTechBasketball2021,
  georgiaTechBasketball2022,
  georgiaTechBasketball2023,
  georgiaTechBasketball2024,
  georgiaTechBasketball2025,
  kentuckyBasketball2010,
  kentuckyBasketball2011,
  kentuckyBasketball2012,
  kentuckyBasketball2013,
  kentuckyBasketball2014,
  kentuckyBasketball2015,
  kentuckyBasketball2016,
  kentuckyBasketball2017,
  kentuckyBasketball2018,
  kentuckyBasketball2019,
  kentuckyBasketball2020,
  kentuckyBasketball2021,
  kentuckyBasketball2022,
  kentuckyBasketball2023,
  kentuckyBasketball2024,
  kentuckyBasketball2025,
  kentuckyBasketball2026,
  louisvilleBasketball2009,
  louisvilleBasketball2010,
  louisvilleBasketball2011,
  louisvilleBasketball2012,
  louisvilleBasketball2013,
  louisvilleBasketball2014,
  louisvilleBasketball2015,
  louisvilleBasketball2016,
  louisvilleBasketball2017,
  louisvilleBasketball2018,
  louisvilleBasketball2019,
  louisvilleBasketball2020,
  louisvilleBasketball2021,
  louisvilleBasketball2022,
  louisvilleBasketball2023,
  louisvilleBasketball2024,
  louisvilleBasketball2025,
  miamiBasketball2009,
  miamiBasketball2010,
  miamiBasketball2011,
  miamiBasketball2012,
  miamiBasketball2013,
  miamiBasketball2014,
  miamiBasketball2015,
  miamiBasketball2016,
  miamiBasketball2017,
  miamiBasketball2018,
  miamiBasketball2019,
  miamiBasketball2020,
  miamiBasketball2021,
  miamiBasketball2022,
  miamiBasketball2023,
  miamiBasketball2024,
  miamiBasketball2025,
  montverdeAcademy2020,
  ncstateBasketball2009,
  ncstateBasketball2010,
  ncstateBasketball2011,
  ncstateBasketball2012,
  ncstateBasketball2013,
  ncstateBasketball2014,
  ncstateBasketball2015,
  ncstateBasketball2016,
  ncstateBasketball2017,
  ncstateBasketball2018,
  ncstateBasketball2019,
  ncstateBasketball2020,
  ncstateBasketball2021,
  ncstateBasketball2022,
  ncstateBasketball2023,
  ncstateBasketball2024,
  ncstateBasketball2025,
  notreDameBasketball2009,
  notreDameBasketball2010,
  notreDameBasketball2011,
  notreDameBasketball2012,
  notreDameBasketball2013,
  notreDameBasketball2014,
  notreDameBasketball2015,
  notreDameBasketball2016,
  notreDameBasketball2017,
  notreDameBasketball2018,
  notreDameBasketball2019,
  notreDameBasketball2020,
  notreDameBasketball2021,
  notreDameBasketball2022,
  notreDameBasketball2023,
  notreDameBasketball2024,
  notreDameBasketball2025,
  pittBasketball2009,
  pittBasketball2010,
  pittBasketball2011,
  pittBasketball2012,
  pittBasketball2013,
  pittBasketball2014,
  pittBasketball2015,
  pittBasketball2016,
  pittBasketball2017,
  pittBasketball2018,
  pittBasketball2019,
  pittBasketball2020,
  pittBasketball2021,
  pittBasketball2022,
  pittBasketball2023,
  pittBasketball2024,
  pittBasketball2025,
  syracuseBasketball2009,
  syracuseBasketball2010,
  syracuseBasketball2011,
  syracuseBasketball2012,
  syracuseBasketball2013,
  syracuseBasketball2014,
  syracuseBasketball2015,
  syracuseBasketball2016,
  syracuseBasketball2017,
  syracuseBasketball2018,
  syracuseBasketball2019,
  syracuseBasketball2020,
  syracuseBasketball2021,
  syracuseBasketball2022,
  syracuseBasketball2023,
  syracuseBasketball2024,
  syracuseBasketball2025,
  texasBasketball2003,
  texasBasketball2006,
  texasBasketball2007,
  uncBasketball2009,
  uncBasketball2010,
  uncBasketball2011,
  uncBasketball2012,
  uncBasketball2013,
  uncBasketball2014,
  uncBasketball2015,
  uncBasketball2016,
  uncBasketball2017,
  uncBasketball2018,
  uncBasketball2019,
  uncBasketball2020,
  uncBasketball2021,
  uncBasketball2022,
  uncBasketball2023,
  uncBasketball2024,
  uncBasketball2025,
  uscFootball2005,
  virginiaBasketball2009,
  virginiaBasketball2010,
  virginiaBasketball2011,
  virginiaBasketball2012,
  virginiaBasketball2013,
  virginiaBasketball2014,
  virginiaBasketball2015,
  virginiaBasketball2016,
  virginiaBasketball2017,
  virginiaBasketball2018,
  virginiaBasketball2019,
  virginiaBasketball2020,
  virginiaBasketball2021,
  virginiaBasketball2022,
  virginiaBasketball2023,
  virginiaBasketball2024,
  virginiaBasketball2025,
  virginiaTechBasketball2009,
  virginiaTechBasketball2010,
  virginiaTechBasketball2011,
  virginiaTechBasketball2012,
  virginiaTechBasketball2013,
  virginiaTechBasketball2014,
  virginiaTechBasketball2015,
  virginiaTechBasketball2016,
  virginiaTechBasketball2017,
  virginiaTechBasketball2018,
  virginiaTechBasketball2019,
  virginiaTechBasketball2020,
  virginiaTechBasketball2021,
  virginiaTechBasketball2022,
  virginiaTechBasketball2023,
  virginiaTechBasketball2024,
  virginiaTechBasketball2025,
  wakeForestBasketball2009,
  wakeForestBasketball2010,
  wakeForestBasketball2011,
  wakeForestBasketball2012,
  wakeForestBasketball2013,
  wakeForestBasketball2014,
  wakeForestBasketball2015,
  wakeForestBasketball2016,
  wakeForestBasketball2017,
  wakeForestBasketball2018,
  wakeForestBasketball2019,
  wakeForestBasketball2020,
  wakeForestBasketball2021,
  wakeForestBasketball2022,
  wakeForestBasketball2023,
  wakeForestBasketball2024,
  wakeForestBasketball2025,
];

async function seedTeam(teamSeed: TeamSeed) {
  const teamData = {
    name: teamSeed.name,
    season: teamSeed.season,
    sport: teamSeed.sport,
    school: teamSeed.school,
    conference: teamSeed.conference ?? null,
    accomplishment: teamSeed.accomplishment ?? null,
    logoUrl: teamSeed.logoUrl ?? null,
    mascotName: teamSeed.mascotName ?? null,
  };

  const team = await prisma.team.upsert({
    where: { slug: teamSeed.slug },
    update: teamData,
    create: { slug: teamSeed.slug, ...teamData },
  });

  console.log(`\n🏟️  Seeding ${team.name} (${team.season})...`);

  for (const p of teamSeed.people) {
    await seedPerson(p, team.id);
  }

  console.log(`✅ Seeded ${teamSeed.people.length} people for ${team.name} (${team.season})`);
}

async function seedPerson(p: PersonSeed, teamId: number) {
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
    asOfDate: new Date("2026-04-01"),
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

  await prisma.teamMembership.upsert({
    where: { personId_teamId: { personId: person.id, teamId } },
    update: membershipData,
    create: { personId: person.id, teamId, ...membershipData },
  });

  if (p.seasonStats?.length) {
    await prisma.seasonStats.deleteMany({ where: { personId: person.id } });
    for (const stat of p.seasonStats) {
      await prisma.seasonStats.create({
        data: {
          personId: person.id,
          level: stat.level,
          teamName: stat.teamName,
          season: stat.season,
          yearLabel: stat.yearLabel,
          sortOrder: stat.sortOrder,
          gamesPlayed: stat.gamesPlayed ?? null,
          minutesPerGame: stat.minutesPerGame ?? null,
          pointsPerGame: stat.pointsPerGame ?? null,
          reboundsPerGame: stat.reboundsPerGame ?? null,
          assistsPerGame: stat.assistsPerGame ?? null,
          stealsPerGame: stat.stealsPerGame ?? null,
          blocksPerGame: stat.blocksPerGame ?? null,
          fieldGoalPct: stat.fieldGoalPct ?? null,
          threePointPct: stat.threePointPct ?? null,
          freeThrowPct: stat.freeThrowPct ?? null,
          wins: stat.wins ?? null,
          losses: stat.losses ?? null,
          tournamentResult: stat.tournamentResult ?? null,
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
          month: event.month ?? null,
          day: event.day ?? null,
          title: event.title,
          eventType: event.eventType ?? null,
          detail: event.detail ?? null,
        },
      });
    }
  }

  console.log(`  ✓ ${p.firstName} ${p.lastName}`);
}

async function main() {
  for (const teamSeed of allTeams) {
    await seedTeam(teamSeed);
  }

  console.log(`\n🎉 All teams seeded successfully!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
