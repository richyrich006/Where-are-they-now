"use client";

import { useMemo, useState, useEffect, useRef } from "react";
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

function clusterByCity(locations: Location[]) {
  const map = new Map<string, Location[]>();
  for (const loc of locations) {
    const key = `${loc.city}|${loc.region ?? ""}|${loc.country}`;
    const existing = map.get(key);
    if (existing) existing.push(loc);
    else map.set(key, [loc]);
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
  const [filter, setFilter] = useState("");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<any>(null);

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
    () =>
      clusters.find(
        (c) => `${c.city}|${c.region ?? ""}|${c.country}` === selectedCity,
      ) ?? null,
    [clusters, selectedCity],
  );

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return;

    // Dynamic import of leaflet to avoid SSR issues
    Promise.all([import("leaflet"), import("react-leaflet")]).then(
      ([L]) => {
        // Fix default marker icons in webpack
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        });

        const map = L.map(mapRef.current!, {
          scrollWheelZoom: true,
          zoomControl: true,
        }).setView([35, -40], 2);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 18,
        }).addTo(map);

        leafletRef.current = { map, markers: L.layerGroup().addTo(map), L };
        updateMarkers();
      },
    );

    return () => {
      if (leafletRef.current) {
        leafletRef.current.map.remove();
        leafletRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateMarkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clusters]);

  function updateMarkers() {
    if (!leafletRef.current) return;
    const { markers, L } = leafletRef.current;
    markers.clearLayers();

    for (const cluster of clusters) {
      const radius = Math.min(8 + Math.sqrt(cluster.players.length) * 4, 30);
      const key = `${cluster.city}|${cluster.region ?? ""}|${cluster.country}`;

      const marker = L.circleMarker([cluster.lat, cluster.lon], {
        radius,
        fillColor: "#1d4ed8",
        fillOpacity: 0.7,
        color: "#ffffff",
        weight: 2,
      });

      const names = cluster.players
        .slice(0, 5)
        .map((p: Location) => `${p.person.firstName} ${p.person.lastName}`)
        .join("<br>");
      const extra = cluster.players.length > 5 ? `<br>+${cluster.players.length - 5} more` : "";
      marker.bindPopup(
        `<strong>${cluster.city}${cluster.region ? ", " + cluster.region : ""}</strong><br>${cluster.players.length} player${cluster.players.length === 1 ? "" : "s"}<hr style="margin:4px 0">${names}${extra}`,
      );

      marker.on("click", () => setSelectedCity(key));
      markers.addLayer(marker);
    }

    // Fit bounds if we have data
    if (clusters.length > 0) {
      const bounds = L.latLngBounds(clusters.map((c: any) => [c.lat, c.lon]));
      leafletRef.current.map.fitBounds(bounds, { padding: [30, 30], maxZoom: 5 });
    }
  }

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

      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
      />

      <div
        ref={mapRef}
        className="h-[500px] w-full rounded-2xl border border-gray-200 shadow-sm"
        style={{ zIndex: 0 }}
      />

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
