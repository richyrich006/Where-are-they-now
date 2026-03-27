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

function InitialsBlock({ firstName, lastName }: { firstName: string; lastName: string }) {
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
  return (
    <div className="flex h-full w-full items-center justify-center bg-blue-900">
      <span className="text-5xl font-bold tracking-tight text-white/80">{initials}</span>
    </div>
  );
}

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
          <InitialsBlock firstName={person.firstName} lastName={person.lastName} />
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
