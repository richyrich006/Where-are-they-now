import Link from "next/link";
import Image from "next/image";
import { getPersonCount, getTeamCount, getAllSchools } from "@/lib/queries";

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

      {/* Schools */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {schools.map((school) => (
            <Link
              key={school.slug}
              href={`/schools/${school.slug}`}
              className="group flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg"
            >
              {school.logoUrl ? (
                <Image
                  src={school.logoUrl}
                  alt={`${school.school} logo`}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                  unoptimized
                />
              ) : (
                <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 text-3xl">
                  {sportIcon[school.sports[0]] ?? "🏆"}
                </span>
              )}
              <div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700">
                  {school.school}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {school.sports.map((s) => sportIcon[s] ?? "").join(" ")}{" "}
                  {school.sports.join(", ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
