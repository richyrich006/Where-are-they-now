import Link from "next/link";
import Image from "next/image";
import { getPersonCount, getTeamCount, getAllSchools } from "@/lib/queries";
import { OnThisDay } from "@/components/home/OnThisDay";
import { RecentUpdates } from "@/components/home/RecentUpdates";

export const metadata = {
  title: "Where Are They Now? | Championship Teams",
};

const sportIcon: Record<string, string> = {
  "Men's Basketball": "🏀",
  "Boys Basketball": "🏀",
  Football: "🏈",
};

export default async function HomePage() {
  const [totalCount, teamCount, schools] = await Promise.all([
    getPersonCount(),
    getTeamCount(),
    getAllSchools(),
  ]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Where Are They Now?
          </h1>
          <p className="mt-3 text-gray-400">
            Tracking {totalCount} athletes and coaches across {teamCount} championship teams.
          </p>
        </div>
      </section>

      {/* On This Day */}
      <OnThisDay />

      {/* Recent Updates */}
      <RecentUpdates />

      {/* Schools */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Schools</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {schools.map((school) => (
            <Link
              key={school.slug}
              href={`/schools/${school.slug}`}
              className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition hover:border-blue-300 hover:shadow-lg"
            >
              {school.logoUrl ? (
                <Image
                  src={school.logoUrl}
                  alt={`${school.school} logo`}
                  width={72}
                  height={72}
                  className="h-18 w-18 object-contain"
                  unoptimized
                />
              ) : (
                <span className="flex h-18 w-18 items-center justify-center rounded-xl bg-gray-100 text-4xl">
                  {sportIcon[school.sports[0]] ?? "🏆"}
                </span>
              )}
              <h2 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-blue-700">
                {school.school}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {school.teamCount} season{school.teamCount === 1 ? "" : "s"} · {school.sports.map((s) => sportIcon[s] ?? "").join(" ")} {school.sports.join(", ")}
              </p>
              <span className="mt-3 text-sm font-medium text-blue-600 group-hover:text-blue-800">
                View teams →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
