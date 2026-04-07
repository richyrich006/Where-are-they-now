import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Pending Submissions — Admin",
  robots: "noindex, nofollow",
};

const FIELD_LABELS: Record<string, string> = {
  currentTitle: "Current Title",
  currentEmployer: "Current Employer",
  league: "League",
  location: "Location",
  statusNote: "Status Note",
  sourceUrl: "Source URL",
  linkedInUrl: "LinkedIn URL",
  imageUrl: "Photo URL",
  bio: "Bio",
  occupationType: "Occupation Type",
  other: "Other",
};

export default async function SubmissionsAdminPage() {
  const submissions = await prisma.submission.findMany({
    orderBy: [{ status: "asc" }, { createdAt: "desc" }],
    take: 200,
  });

  const pending = submissions.filter((s) => s.status === "PENDING");
  const reviewed = submissions.filter((s) => s.status !== "PENDING");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900">User Submissions</h1>
      <p className="mt-2 text-sm text-gray-600">
        Suggested edits from site visitors. Review and apply manually to seed files.
      </p>

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Pending ({pending.length})
        </h2>
        {pending.length === 0 ? (
          <p className="rounded-md bg-gray-50 p-4 text-sm text-gray-500">
            No pending submissions.
          </p>
        ) : (
          <ul className="space-y-3">
            {pending.map((s) => (
              <li
                key={s.id}
                className="rounded-xl border border-amber-200 bg-amber-50 p-4"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    {s.personSlug ? (
                      <Link
                        href={`/players/${s.personSlug}`}
                        className="text-base font-semibold text-blue-700 hover:underline"
                      >
                        {s.personName ?? s.personSlug}
                      </Link>
                    ) : (
                      <span className="text-base font-semibold text-gray-900">
                        {s.personName ?? "(no name)"}
                      </span>
                    )}
                    <span className="ml-2 rounded-full bg-amber-200 px-2 py-0.5 text-xs font-semibold text-amber-900">
                      {FIELD_LABELS[s.field] ?? s.field}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(s.createdAt).toLocaleDateString()}
                  </span>
                </div>
                {s.currentValue && (
                  <p className="mt-2 text-sm">
                    <span className="font-semibold text-gray-700">Current:</span>{" "}
                    <span className="text-gray-600 line-through">
                      {s.currentValue}
                    </span>
                  </p>
                )}
                <p className="mt-1 text-sm">
                  <span className="font-semibold text-gray-700">Suggested:</span>{" "}
                  <span className="text-gray-900">{s.suggestedValue}</span>
                </p>
                {s.reason && (
                  <p className="mt-1 text-xs text-gray-600 italic">"{s.reason}"</p>
                )}
                {s.sourceUrl && (
                  <p className="mt-1 text-xs">
                    <span className="font-semibold text-gray-700">Source: </span>
                    <a
                      href={s.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {s.sourceUrl}
                    </a>
                  </p>
                )}
                {(s.submitterName || s.submitterEmail) && (
                  <p className="mt-1 text-xs text-gray-500">
                    Submitted by {s.submitterName ?? "Anonymous"}
                    {s.submitterEmail ? ` (${s.submitterEmail})` : ""}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {reviewed.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Reviewed ({reviewed.length})
          </h2>
          <ul className="space-y-2">
            {reviewed.map((s) => (
              <li
                key={s.id}
                className="rounded-md border border-gray-200 bg-gray-50 p-3 text-sm"
              >
                <span className="font-semibold">{s.personName}</span>
                {" — "}
                <span className="text-gray-600">{FIELD_LABELS[s.field] ?? s.field}</span>
                {" — "}
                <span
                  className={
                    s.status === "APPROVED"
                      ? "font-semibold text-green-700"
                      : "font-semibold text-red-700"
                  }
                >
                  {s.status}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
