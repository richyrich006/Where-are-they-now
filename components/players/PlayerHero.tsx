import Image from "next/image";
import Link from "next/link";
import type { Person, TeamMembership, Team } from "@/app/generated/prisma/client";
import { getImageUrl } from "@/lib/utils";

type PlayerHeroProps = {
  person: Person & {
    memberships: (TeamMembership & { team: Team })[];
  };
};

export function PlayerHero({ person }: PlayerHeroProps) {
  const membership = person.memberships[0];
  const collegeImage = getImageUrl(person.collegeImageUrl, person.firstName, person.lastName);
  const todayImage = getImageUrl(person.imageUrl, person.firstName, person.lastName);
  const hasTodayPhoto = !!person.imageUrl;

  return (
    <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
      <div className="group relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-gray-100 shadow-md sm:h-40 sm:w-40">
        {/* College photo — default */}
        <Image
          src={collegeImage}
          alt={`${person.firstName} ${person.lastName} at Duke`}
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
          unoptimized
          priority
        />
        {/* Today photo — revealed on hover */}
        {hasTodayPhoto && (
          <Image
            src={todayImage}
            alt={`${person.firstName} ${person.lastName} today`}
            fill
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            unoptimized
          />
        )}
        {hasTodayPhoto && (
          <span className="absolute bottom-1 right-1 rounded bg-black/50 px-1.5 py-0.5 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Today
          </span>
        )}
      </div>
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {person.firstName} {person.lastName}
        </h1>
        {membership && (
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
            {membership.position && <span>{membership.position}</span>}
            {membership.jerseyNumber && (
              <>
                <span>·</span>
                <span>#{membership.jerseyNumber}</span>
              </>
            )}
            {membership.yearsAtSchool && (
              <>
                <span>·</span>
                <span>{membership.yearsAtSchool}</span>
              </>
            )}
          </div>
        )}
        {membership && (
          <Link
            href={`/teams/${membership.team.slug}`}
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline"
          >
            {membership.team.name} — {membership.team.season}
            {membership.team.accomplishment && (
              <span className="ml-1 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-bold text-yellow-800">
                {membership.team.accomplishment}
              </span>
            )}
          </Link>
        )}
        {person.hometown && (
          <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            {person.hometown}
          </p>
        )}
      </div>
    </div>
  );
}
