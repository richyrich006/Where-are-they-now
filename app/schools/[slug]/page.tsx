import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllTeams, getAllSchools } from "@/lib/queries";

type Props = { params: Promise<{ slug: string }> };

const sportIcon: Record<string, string> = {
  "Men's Basketball": "🏀",
  "Boys Basketball": "🏀",
  Football: "🏈",
};

export async function generateStaticParams() {
  const schools = await getAllSchools();
  return schools.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const schools = await getAllSchools();
  const school = schools.find((s) => s.slug === slug);
  if (!school) return {};
  return { title: `${school.school} — Where Are They Now?` };
}

export default async function SchoolPage({ params }: Props) {
  const { slug } = await params;
  const schools = await getAllSchools();
  const school = schools.find((s) => s.slug === slug);
  if (!school) notFound();

  const allTeams = await getAllTeams();
  const teams = allTeams.filter((t) => t.school === school.school);

  // Group teams by sport
  const sportGroups = new Map<string, typeof teams>();
  for (const team of teams) {
    const existing = sportGroups.get(team.sport) ?? [];
    existing.push(team);
    sportGroups.set(team.sport, existing);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {/* Back to home */}
      <a
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-700 transition"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        All Schools
      </a>

      {/* School Header */}
      <div className="mb-10 flex items-center gap-5">
        {school.logoUrl ? (
          <Image
            src={school.logoUrl}
            alt={`${school.school} logo`}
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
            unoptimized
          />
        ) : (
          <span className="flex h-20 w-20 items-center justify-center rounded-xl bg-gray-100 text-4xl">
            {sportIcon[school.sports[0]] ?? "🏆"}
          </span>
        )}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {school.school}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {teams.length} {teams.length === 1 ? "team" : "teams"} across{" "}
            {sportGroups.size} {sportGroups.size === 1 ? "sport" : "sports"}
          </p>
        </div>
      </div>

      {/* Teams grouped by sport */}
      <div className="space-y-10">
        {Array.from(sportGroups.entries()).map(([sport, sportTeams]) => (
          <section key={sport}>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl">{sportIcon[sport] ?? "🏆"}</span>
              <h2 className="text-xl font-bold text-gray-900">{sport}</h2>
              <span className="text-sm text-gray-400">({sportTeams.length} seasons)</span>
            </div>
            <div className="space-y-3">
              {sportTeams.map((team) => (
                <Link
                  key={team.slug}
                  href={`/teams/${team.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:border-blue-300 hover:shadow-md"
                >
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700">
                      {team.season}
                    </h3>
                    {team.accomplishment && (
                      <p className="mt-0.5 text-sm font-medium text-yellow-700">
                        🏆 {team.accomplishment}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">{team._count.memberships} members</p>
                    <p className="mt-0.5 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                      View Roster →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
