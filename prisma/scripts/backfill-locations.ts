import Database from "better-sqlite3";

const db = new Database("./dev.db");

// City coordinate lookup — US cities + major international
const CITIES: Record<string, { lat: number; lon: number; region?: string; country?: string }> = {
  // US Cities — NBA markets and major college towns
  "Los Angeles, CA": { lat: 34.05, lon: -118.24, region: "CA" },
  "New York, NY": { lat: 40.71, lon: -74.0, region: "NY" },
  "Brooklyn, NY": { lat: 40.68, lon: -73.94, region: "NY" },
  "Boston, MA": { lat: 42.36, lon: -71.06, region: "MA" },
  "Miami, FL": { lat: 25.76, lon: -80.19, region: "FL" },
  "Orlando, FL": { lat: 28.54, lon: -81.38, region: "FL" },
  "Tampa, FL": { lat: 27.95, lon: -82.46, region: "FL" },
  "Gainesville, FL": { lat: 29.65, lon: -82.32, region: "FL" },
  "Atlanta, GA": { lat: 33.75, lon: -84.39, region: "GA" },
  "Charlotte, NC": { lat: 35.23, lon: -80.84, region: "NC" },
  "Durham, NC": { lat: 35.99, lon: -78.9, region: "NC" },
  "Raleigh, NC": { lat: 35.78, lon: -78.64, region: "NC" },
  "Greensboro, NC": { lat: 36.07, lon: -79.79, region: "NC" },
  "Lexington, KY": { lat: 38.04, lon: -84.5, region: "KY" },
  "Louisville, KY": { lat: 38.25, lon: -85.76, region: "KY" },
  "Indianapolis, IN": { lat: 39.77, lon: -86.16, region: "IN" },
  "Chicago, IL": { lat: 41.88, lon: -87.63, region: "IL" },
  "Detroit, MI": { lat: 42.33, lon: -83.05, region: "MI" },
  "Cleveland, OH": { lat: 41.5, lon: -81.69, region: "OH" },
  "Columbus, OH": { lat: 39.96, lon: -82.99, region: "OH" },
  "Cincinnati, OH": { lat: 39.1, lon: -84.51, region: "OH" },
  "Milwaukee, WI": { lat: 43.04, lon: -87.91, region: "WI" },
  "Minneapolis, MN": { lat: 44.98, lon: -93.27, region: "MN" },
  "St. Louis, MO": { lat: 38.63, lon: -90.2, region: "MO" },
  "Kansas City, MO": { lat: 39.1, lon: -94.58, region: "MO" },
  "Dallas, TX": { lat: 32.78, lon: -96.8, region: "TX" },
  "Houston, TX": { lat: 29.76, lon: -95.37, region: "TX" },
  "Austin, TX": { lat: 30.27, lon: -97.74, region: "TX" },
  "San Antonio, TX": { lat: 29.42, lon: -98.49, region: "TX" },
  "Phoenix, AZ": { lat: 33.45, lon: -112.07, region: "AZ" },
  "Denver, CO": { lat: 39.74, lon: -104.99, region: "CO" },
  "Salt Lake City, UT": { lat: 40.76, lon: -111.89, region: "UT" },
  "Portland, OR": { lat: 45.52, lon: -122.68, region: "OR" },
  "Seattle, WA": { lat: 47.61, lon: -122.33, region: "WA" },
  "San Francisco, CA": { lat: 37.77, lon: -122.42, region: "CA" },
  "Oakland, CA": { lat: 37.8, lon: -122.27, region: "CA" },
  "Sacramento, CA": { lat: 38.58, lon: -121.49, region: "CA" },
  "San Diego, CA": { lat: 32.72, lon: -117.16, region: "CA" },
  "Las Vegas, NV": { lat: 36.17, lon: -115.14, region: "NV" },
  "Memphis, TN": { lat: 35.15, lon: -90.05, region: "TN" },
  "Nashville, TN": { lat: 36.16, lon: -86.78, region: "TN" },
  "New Orleans, LA": { lat: 29.95, lon: -90.07, region: "LA" },
  "Birmingham, AL": { lat: 33.52, lon: -86.81, region: "AL" },
  "Tuscaloosa, AL": { lat: 33.21, lon: -87.57, region: "AL" },
  "Philadelphia, PA": { lat: 39.95, lon: -75.16, region: "PA" },
  "Pittsburgh, PA": { lat: 40.44, lon: -79.99, region: "PA" },
  "Washington, DC": { lat: 38.9, lon: -77.04, region: "DC" },
  "Baltimore, MD": { lat: 39.29, lon: -76.61, region: "MD" },
  "Toronto, ON": { lat: 43.65, lon: -79.38, country: "Canada" },
  // International basketball cities
  "Madrid, Spain": { lat: 40.42, lon: -3.7, country: "Spain" },
  "Barcelona, Spain": { lat: 41.39, lon: 2.16, country: "Spain" },
  "Istanbul, Turkey": { lat: 41.01, lon: 28.98, country: "Turkey" },
  "Athens, Greece": { lat: 37.98, lon: 23.73, country: "Greece" },
  "Milan, Italy": { lat: 45.46, lon: 9.19, country: "Italy" },
  "Moscow, Russia": { lat: 55.76, lon: 37.62, country: "Russia" },
  "Tel Aviv, Israel": { lat: 32.08, lon: 34.78, country: "Israel" },
  "Tokyo, Japan": { lat: 35.68, lon: 139.69, country: "Japan" },
  "Sydney, Australia": { lat: -33.87, lon: 151.21, country: "Australia" },
  "Melbourne, Australia": { lat: -37.81, lon: 144.96, country: "Australia" },
  "Shanghai, China": { lat: 31.23, lon: 121.47, country: "China" },
  "Beijing, China": { lat: 39.9, lon: 116.4, country: "China" },
  "Paris, France": { lat: 48.86, lon: 2.35, country: "France" },
  "London, England": { lat: 51.51, lon: -0.13, country: "England" },
  "Berlin, Germany": { lat: 52.52, lon: 13.41, country: "Germany" },
};

// Loose matcher: looks at the location field and finds a match
function findCoords(loc: string): { lat: number; lon: number; city: string; region?: string; country?: string } | null {
  if (!loc) return null;

  // Direct lookup
  if (CITIES[loc]) {
    return { ...CITIES[loc], city: loc.split(",")[0].trim() };
  }

  // Find by city name match
  const lowerLoc = loc.toLowerCase();
  for (const [key, coords] of Object.entries(CITIES)) {
    const cityName = key.split(",")[0].toLowerCase().trim();
    if (lowerLoc.includes(cityName)) {
      return { ...coords, city: key.split(",")[0].trim() };
    }
  }

  // State-only fallbacks
  const stateMatch = loc.match(/,\s*([A-Z]{2})\s*$/);
  if (stateMatch) {
    const state = stateMatch[1];
    for (const [key, coords] of Object.entries(CITIES)) {
      if (coords.region === state) {
        return { ...coords, city: key.split(",")[0].trim() };
      }
    }
  }

  return null;
}

type Status = { personId: number; location: string | null };

const statuses = db
  .prepare("SELECT personId, location FROM CurrentStatus WHERE location IS NOT NULL AND location != ''")
  .all() as Status[];

console.log(`Processing ${statuses.length} player locations...`);

const insert = db.prepare(`
  INSERT INTO PlayerLocation (personId, city, region, country, latitude, longitude)
  VALUES (?, ?, ?, ?, ?, ?)
  ON CONFLICT(personId) DO UPDATE SET
    city = excluded.city,
    region = excluded.region,
    country = excluded.country,
    latitude = excluded.latitude,
    longitude = excluded.longitude
`);

let matched = 0;
let unmatched = 0;
const unmatchedLocs = new Set<string>();

const txn = db.transaction(() => {
  for (const s of statuses) {
    if (!s.location) continue;
    const coords = findCoords(s.location);
    if (coords) {
      insert.run(
        s.personId,
        coords.city,
        coords.region ?? null,
        coords.country ?? "USA",
        coords.lat,
        coords.lon,
      );
      matched++;
    } else {
      unmatched++;
      unmatchedLocs.add(s.location);
    }
  }
});
txn();

console.log(`Matched ${matched} locations.`);
console.log(`Unmatched ${unmatched} locations.`);
if (unmatchedLocs.size > 0 && unmatchedLocs.size < 30) {
  console.log("Sample unmatched:", [...unmatchedLocs].slice(0, 20));
}
db.close();
