import Image from "next/image";
import Link from "next/link";
import type { Person, TeamMembership, Team } from "@/app/generated/prisma/client";
import { JerseyBlock } from "@/components/players/PlayerCard";

type PlayerHeroProps = {
  person: Person & {
    memberships: (TeamMembership & { team: Team })[];
  };
};

export function PlayerHero({ person }: PlayerHeroProps) {
  const membership = person.memberships[0];
  const photo = person.imageUrl ?? person.collegeImageUrl ?? null;

  return (
    <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-gray-100 shadow-md sm:h-40 sm:w-40">
        {photo ? (
          <Image
            src={photo}
            alt={`${person.firstName} ${person.lastName}`}
            fill
            className="object-cover"
            unoptimized
            priority
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
        {person.highSchool && (
          <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            {person.highSchool}
          </p>
        )}
      </div>
    </div>
  );
}
