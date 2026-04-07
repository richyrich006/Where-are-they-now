"use client";

import { useState } from "react";
import type { Person, CurrentStatus, TeamMembership, Team } from "@/app/generated/prisma/client";
import { PlayerCard } from "@/components/players/PlayerCard";

type MemberWithPerson = TeamMembership & {
  person: Person & { currentStatus: CurrentStatus | null };
  team: Team;
};

type Filter = "all" | "pro" | "coaching" | "business" | "linkedin" | "other";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "pro", label: "Active Pro" },
  { id: "coaching", label: "Coaching" },
  { id: "business", label: "Business" },
  { id: "linkedin", label: "Has LinkedIn" },
  { id: "other", label: "Other" },
];

function matchesFilter(member: MemberWithPerson, filter: Filter): boolean {
  if (filter === "all") return true;
  const occ = member.person.currentStatus?.occupationType;
  if (filter === "pro") return occ === "ACTIVE_PRO_ATHLETE";
  if (filter === "coaching") return occ === "COACH" || occ === "RETIRED_COACH";
  if (filter === "business")
    return (
      occ === "ENTREPRENEUR_BUSINESS" ||
      occ === "FRONT_OFFICE" ||
      occ === "BROADCASTER_ANALYST"
    );
  if (filter === "linkedin")
    return member.person.currentStatus?.linkedInUrl != null;
  if (filter === "other")
    return (
      !occ ||
      occ === "RETIRED_ATHLETE" ||
      occ === "STUDENT" ||
      occ === "OTHER"
    );
  return true;
}

export function RosterFilterGrid({ members }: { members: MemberWithPerson[] }) {
  const [active, setActive] = useState<Filter>("all");

  const filtered = members.filter((m) => matchesFilter(m, active));
  const players = filtered.filter((m) => m.role === "PLAYER");
  const coaches = filtered.filter((m) =>
    ["HEAD_COACH", "ASSISTANT_COACH"].includes(m.role)
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const count =
            f.id === "all"
              ? members.length
              : members.filter((m) => matchesFilter(m, f.id)).length;
          return (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                active === f.id
                  ? "bg-blue-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f.label}
              <span
                className={`ml-1.5 text-xs ${
                  active === f.id ? "text-blue-200" : "text-gray-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-gray-500">No members match this filter.</p>
      )}

      <div className="space-y-12">
        {players.length > 0 && (
          <section>
            <h2 className="mb-5 text-xl font-bold text-gray-900">Players</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {players.map((m) => (
                <PlayerCard
                  key={m.person.slug}
                  person={{ ...m.person, memberships: [m] }}
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
                  person={{ ...m.person, memberships: [m] }}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
