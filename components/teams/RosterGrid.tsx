import type { Person, CurrentStatus, TeamMembership, Team } from "@/app/generated/prisma/client";
import { PlayerCard } from "@/components/players/PlayerCard";

type MemberWithPerson = TeamMembership & {
  person: Person & { currentStatus: CurrentStatus | null };
};

type RosterGridProps = {
  players: MemberWithPerson[];
  coaches: MemberWithPerson[];
};

export function RosterGrid({ players, coaches }: RosterGridProps) {
  return (
    <div className="space-y-12">
      {players.length > 0 && (
        <section>
          <h2 className="mb-5 text-xl font-bold text-gray-900">Players</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {players.map((m) => (
              <PlayerCard
                key={m.person.slug}
                person={{
                  ...m.person,
                  memberships: [{ ...m, team: { id: 0, slug: "", name: "", season: "", sport: "", school: "", conference: null, accomplishment: null, createdAt: new Date() } as Team }],
                }}
              />
            ))}
          </div>
        </section>
      )}

      {coaches.length > 0 && (
        <section>
          <h2 className="mb-5 text-xl font-bold text-gray-900">Coaching Staff</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {coaches.map((m) => (
              <PlayerCard
                key={m.person.slug}
                person={{
                  ...m.person,
                  memberships: [{ ...m, team: { id: 0, slug: "", name: "", season: "", sport: "", school: "", conference: null, accomplishment: null, createdAt: new Date() } as Team }],
                }}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
