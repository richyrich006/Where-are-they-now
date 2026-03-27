import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { getTeamBySlug, getAllTeamSlugs } from "@/lib/queries";
import { RosterGrid } from "@/components/teams/RosterGrid";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllTeamSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const team = await getTeamBySlug(slug);
  if (!team) return {};

  const title = `${team.name} (${team.season}) — Where Are They Now`;
  const description = `See what every player and coach from the ${team.season} ${team.name} is doing today.`;
  return { title, description, openGraph: { title, description } };
}

export default async function TeamPage({ params }: Props) {
  const { slug } = await params;
  const team = await getTeamBySlug(slug);
  if (!team) notFound();

  const players = team.memberships.filter((m) => m.role === "PLAYER");
  const coaches = team.memberships.filter((m) =>
    ["HEAD_COACH", "ASSISTANT_COACH"].includes(m.role)
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Team Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-4">
          {team.logoUrl && (
            <Image
              src={team.logoUrl}
              alt={`${team.name} logo`}
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
              unoptimized
            />
          )}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {team.name}
              </h1>
              {team.mascotName && (
                <span className="text-lg text-gray-500">({team.mascotName}s)</span>
              )}
              {team.accomplishment && (
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-bold text-yellow-800">
                  🏆 {team.accomplishment}
                </span>
              )}
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
              <span>{team.season} Season</span>
              {team.conference && <span>· {team.conference}</span>}
              <span>· {team.sport}</span>
              <span>· {team.memberships.length} members tracked</span>
            </div>
          </div>
        </div>
      </div>

      <RosterGrid players={players} coaches={coaches} />
    </div>
  );
}
