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

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
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
            {teams.length} {teams.length === 1 ? "team" : "teams"} tracked
          </p>
        </div>
      </div>

      {/* Teams List */}
      <div className="space-y-4">
        {teams.map((team) => (
          <Link
            key={team.slug}
            href={`/teams/${team.slug}`}
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{sportIcon[team.sport] ?? "🏆"}</span>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-700">
                    {team.season} {team.sport}
                  </h2>
                  {team.accomplishment && (
                    <p className="mt-0.5 text-sm font-medium text-yellow-700">
                      🏆 {team.accomplishment}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">{team._count.memberships} members</p>
              <p className="mt-1 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                View Roster →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
