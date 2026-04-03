import Link from "next/link";
import Image from "next/image";
import type { Person, CurrentStatus, TeamMembership, Team } from "@/app/generated/prisma/client";
import { Badge } from "@/components/ui/Badge";

type PlayerCardProps = {
  person: Person & {
    currentStatus: CurrentStatus | null;
    memberships: (TeamMembership & { team: Team })[];
  };
};

// Map school names to color classes
const schoolColors: Record<string, { bg: string; text: string; accent: string }> = {
  "Duke University": { bg: "bg-blue-900", text: "text-white", accent: "text-blue-300" },
  "University of Kentucky": { bg: "bg-blue-700", text: "text-white", accent: "text-blue-200" },
  "University of Southern California": { bg: "bg-red-800", text: "text-amber-300", accent: "text-amber-200" },
  "University of Alabama": { bg: "bg-red-900", text: "text-white", accent: "text-red-300" },
  "Montverde Academy": { bg: "bg-emerald-800", text: "text-white", accent: "text-emerald-300" },
};

const defaultColors = { bg: "bg-gray-800", text: "text-white", accent: "text-gray-400" };

function JerseyBlock({
  jerseyNumber,
  firstName,
  lastName,
  school,
  sport,
}: {
  jerseyNumber: number | null;
  firstName: string;
  lastName: string;
  school?: string;
  sport?: string;
}) {
  const colors = schoolColors[school ?? ""] ?? defaultColors;
  const sportIcon = sport?.toLowerCase().includes("football") ? "🏈" : "🏀";

  return (
    <div className={`flex h-full w-full flex-col items-center justify-center ${colors.bg}`}>
      {jerseyNumber != null ? (
        <>
          <span className={`text-5xl font-extrabold tracking-tighter ${colors.text} opacity-90`}>
            {jerseyNumber}
          </span>
          <span className={`mt-1 text-xs font-medium uppercase tracking-widest ${colors.accent}`}>
            {firstName[0]}. {lastName}
          </span>
        </>
      ) : (
        <>
          <span className="text-3xl">{sportIcon}</span>
          <span className={`mt-1 text-sm font-bold ${colors.text} opacity-80`}>
            {firstName[0]}{lastName[0]}
          </span>
        </>
      )}
    </div>
  );
}

export { JerseyBlock, schoolColors, defaultColors };

export function PlayerCard({ person }: PlayerCardProps) {
  const membership = person.memberships[0];
  const photo = person.imageUrl ?? person.collegeImageUrl ?? null;

  return (
    <Link
      href={`/players/${person.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {photo ? (
          <Image
            src={photo}
            alt={`${person.firstName} ${person.lastName}`}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <JerseyBlock
            jerseyNumber={membership?.jerseyNumber ?? null}
            firstName={person.firstName}
            lastName={person.lastName}
            school={membership?.team?.school}
            sport={membership?.team?.sport}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-gray-900 group-hover:text-blue-700">
            {person.firstName} {person.lastName}
          </h3>
          {membership?.jerseyNumber && (
            <span className="shrink-0 text-sm font-semibold text-gray-400">
              #{membership.jerseyNumber}
            </span>
          )}
        </div>
        {membership?.position && (
          <p className="mt-0.5 text-sm text-gray-500">{membership.position}</p>
        )}
        {person.currentStatus && (
          <div className="mt-3 space-y-1">
            <Badge type={person.currentStatus.occupationType} />
            {person.currentStatus.currentTitle && (
              <p className="text-sm text-gray-700 line-clamp-1">
                {person.currentStatus.currentTitle}
              </p>
            )}
            {person.currentStatus.currentEmployer && (
              <p className="text-sm font-medium text-blue-700 line-clamp-1">
                {person.currentStatus.currentEmployer}
              </p>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
