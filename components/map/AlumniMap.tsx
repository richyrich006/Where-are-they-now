"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Location = {
  id: number;
  city: string;
  region: string | null;
  country: string;
  latitude: number;
  longitude: number;
  person: {
    slug: string;
    firstName: string;
    lastName: string;
    currentStatus: { currentTitle: string | null; currentEmployer: string | null } | null;
  };
};

type Props = { locations: Location[] };

// Equirectangular projection — simple lat/lon → pixel
// Map covers full globe in a 1000x500 viewbox
const MAP_W = 1000;
const MAP_H = 500;

function project(lat: number, lon: number) {
  const x = ((lon + 180) / 360) * MAP_W;
  const y = ((90 - lat) / 180) * MAP_H;
  return { x, y };
}

// Group locations by city to cluster overlapping pins
function clusterByCity(locations: Location[]) {
  const map = new Map<string, Location[]>();
  for (const loc of locations) {
    const key = `${loc.city}|${loc.region ?? ""}|${loc.country}`;
    const existing = map.get(key);
    if (existing) {
      existing.push(loc);
    } else {
      map.set(key, [loc]);
    }
  }
  return Array.from(map.entries()).map(([_key, locs]) => ({
    city: locs[0].city,
    region: locs[0].region,
    country: locs[0].country,
    lat: locs[0].latitude,
    lon: locs[0].longitude,
    players: locs,
  }));
}

export function AlumniMap({ locations }: Props) {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [filter, setFilter] = useState("");

  const filtered = useMemo(() => {
    if (!filter) return locations;
    const q = filter.toLowerCase();
    return locations.filter(
      (l) =>
        l.person.firstName.toLowerCase().includes(q) ||
        l.person.lastName.toLowerCase().includes(q) ||
        l.city.toLowerCase().includes(q) ||
        (l.person.currentStatus?.currentEmployer?.toLowerCase().includes(q) ?? false),
    );
  }, [locations, filter]);

  const clusters = useMemo(() => clusterByCity(filtered), [filtered]);

  const selectedCluster = useMemo(
    () => clusters.find((c) => `${c.city}|${c.region ?? ""}|${c.country}` === hoveredCity) ?? null,
    [clusters, hoveredCity],
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by name, city, or employer..."
          className="w-72 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
        <span className="text-sm text-gray-500">
          {filtered.length} player{filtered.length === 1 ? "" : "s"} ·{" "}
          {clusters.length} cit{clusters.length === 1 ? "y" : "ies"}
        </span>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-blue-50 p-2 shadow-sm">
        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          className="h-auto w-full"
          role="img"
          aria-label="World map of player locations"
        >
          {/* Ocean background */}
          <rect width={MAP_W} height={MAP_H} fill="#dbeafe" />

          {/* Continental landmass approximations (simplified blocks) */}
          <g fill="#e0f2f1" stroke="#94a3b8" strokeWidth="0.5">
            {/* North America */}
            <path d="M 100 80 L 280 60 L 320 110 L 310 200 L 250 260 L 180 270 L 130 220 L 100 150 Z" />
            {/* Central America */}
            <path d="M 230 250 L 270 270 L 280 320 L 250 310 L 240 280 Z" />
            {/* South America */}
            <path d="M 280 290 L 340 290 L 360 380 L 330 460 L 290 470 L 270 380 Z" />
            {/* Europe */}
            <path d="M 470 90 L 560 80 L 580 130 L 560 180 L 480 180 L 460 130 Z" />
            {/* Africa */}
            <path d="M 480 200 L 580 200 L 620 290 L 580 380 L 530 410 L 490 360 L 470 270 Z" />
            {/* Asia */}
            <path d="M 580 80 L 820 70 L 880 180 L 850 240 L 750 230 L 680 200 L 600 170 Z" />
            {/* Southeast Asia / Oceania */}
            <path d="M 800 280 L 900 280 L 920 360 L 880 400 L 820 380 L 800 320 Z" />
            {/* Australia */}
            <path d="M 820 380 L 920 370 L 940 440 L 880 460 L 830 440 Z" />
          </g>

          {/* Equator + grid lines */}
          <g stroke="#94a3b8" strokeWidth="0.3" strokeDasharray="2 4" opacity="0.5">
            <line x1="0" y1={MAP_H / 2} x2={MAP_W} y2={MAP_H / 2} />
            <line x1={MAP_W / 2} y1="0" x2={MAP_W / 2} y2={MAP_H} />
          </g>

          {/* Pins */}
          {clusters.map((cluster) => {
            const { x, y } = project(cluster.lat, cluster.lon);
            const radius = Math.min(4 + Math.sqrt(cluster.players.length) * 1.5, 14);
            const key = `${cluster.city}|${cluster.region ?? ""}|${cluster.country}`;
            const isHovered = hoveredCity === key;
            return (
              <g key={key}>
                <circle
                  cx={x}
                  cy={y}
                  r={radius}
                  fill={isHovered ? "#dc2626" : "#1d4ed8"}
                  fillOpacity={isHovered ? 0.9 : 0.7}
                  stroke="#fff"
                  strokeWidth="1"
                  onMouseEnter={() => setHoveredCity(key)}
                  onMouseLeave={() => setHoveredCity(null)}
                  className="cursor-pointer transition-all"
                />
                {cluster.players.length > 1 && (
                  <text
                    x={x}
                    y={y + 3}
                    textAnchor="middle"
                    fontSize="8"
                    fill="white"
                    fontWeight="bold"
                    pointerEvents="none"
                  >
                    {cluster.players.length}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Hovered city detail */}
      {selectedCluster && (
        <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <h3 className="font-bold text-gray-900">
            {selectedCluster.city}
            {selectedCluster.region ? `, ${selectedCluster.region}` : ""} ·{" "}
            {selectedCluster.players.length} player
            {selectedCluster.players.length === 1 ? "" : "s"}
          </h3>
          <ul className="mt-2 space-y-1">
            {selectedCluster.players.map((p) => (
              <li key={p.id} className="text-sm">
                <Link
                  href={`/players/${p.person.slug}`}
                  className="font-medium text-blue-700 hover:underline"
                >
                  {p.person.firstName} {p.person.lastName}
                </Link>
                {p.person.currentStatus?.currentTitle && (
                  <span className="text-gray-600">
                    {" — "}
                    {p.person.currentStatus.currentTitle}
                    {p.person.currentStatus.currentEmployer
                      ? `, ${p.person.currentStatus.currentEmployer}`
                      : ""}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
