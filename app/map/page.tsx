import { getPlayerLocations } from "@/lib/queries";
import { AlumniMap } from "@/components/map/AlumniMap";

export const metadata = {
  title: "Alumni Map — Where Are They Now",
  description: "Interactive map showing where former college athletes live and work today.",
};

export default async function MapPage() {
  const locations = await getPlayerLocations();

  const serialized = locations.map((l) => ({
    id: l.id,
    city: l.city,
    region: l.region,
    country: l.country,
    latitude: l.latitude,
    longitude: l.longitude,
    person: {
      slug: l.person.slug,
      firstName: l.person.firstName,
      lastName: l.person.lastName,
      currentStatus: l.person.currentStatus
        ? {
            currentTitle: l.person.currentStatus.currentTitle,
            currentEmployer: l.person.currentStatus.currentEmployer,
          }
        : null,
    },
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">Alumni Map</h1>
        <p className="mt-2 text-sm text-gray-600">
          Explore where former college athletes have ended up. Hover over a pin to see
          who lives there. {serialized.length} players plotted across the world.
        </p>
      </header>
      <AlumniMap locations={serialized} />
    </div>
  );
}
