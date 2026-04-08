import Link from "next/link";
import { getAllCoaches } from "@/lib/queries";

export const metadata = {
  title: "Coaches — Where Are They Now",
  description:
    "All college basketball and football coaches tracked on the site. See the teams they led, their coaching tree, and where they are today.",
};

export default async function CoachesIndexPage() {
  const coaches = await getAllCoaches();

  // Split into head coaches with significant resumes vs. assistants
  const withHeadCoachTeams = coaches.filter((c) =>
    c.memberships.some((m) => m.role === "HEAD_COACH"),
  );
  const assistantsOnly = coaches.filter(
    (c) => !c.memberships.some((m) => m.role === "HEAD_COACH"),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Coaches</h1>
        <p className="mt-2 text-sm text-gray-600">
          {coaches.length} coaches tracked. Click any coach to see the teams they led
          and their coaching tree — every player they coached who went on to become a
          coach themselves.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Head Coaches</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {withHeadCoachTeams.map((c) => {
            const headTeams = c.memberships.filter((m) => m.role === "HEAD_COACH");
            const years = headTeams
              .map((m) => parseInt(m.team.season.split("-")[0], 10))
              .filter((y) => !Number.isNaN(y))
              .sort((a, b) => a - b);
            const yearRange =
              years.length > 0 ? `${years[0]}–${years[years.length - 1] + 1}` : "";
            const schools = [...new Set(headTeams.map((m) => m.team.school))];
            return (
              <li key={c.id}>
                <Link
                  href={`/coaches/${c.slug}`}
                  className="block rounded-xl border border-gray-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
                >
                  <div className="flex items-baseline justify-between">
                    <p className="font-semibold text-gray-900">
                      {c.firstName} {c.lastName}
                    </p>
                    <span className="text-xs font-mono text-gray-500">
                      {headTeams.length} season{headTeams.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {schools.join(" · ")} {yearRange && `· ${yearRange}`}
                  </p>
                  {c.currentStatus?.currentTitle && (
                    <p className="mt-1 text-xs text-gray-500">
                      Now: {c.currentStatus.currentTitle}
                      {c.currentStatus.currentEmployer
                        ? `, ${c.currentStatus.currentEmployer}`
                        : ""}
                    </p>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {assistantsOnly.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">Assistant Coaches</h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {assistantsOnly.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/coaches/${c.slug}`}
                  className="block rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm transition hover:border-blue-300 hover:bg-white"
                >
                  <p className="font-medium text-gray-900">
                    {c.firstName} {c.lastName}
                  </p>
                  {c.currentStatus?.currentEmployer && (
                    <p className="mt-0.5 text-xs text-gray-500">
                      {c.currentStatus.currentEmployer}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
