"use client";

import { useState } from "react";

type Props = {
  personSlug: string;
  personName: string;
  currentTitle?: string | null;
  currentEmployer?: string | null;
  currentLocation?: string | null;
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
  other: "Other",
};

export function SubmissionForm({
  personSlug,
  personName,
  currentTitle,
  currentEmployer,
  currentLocation,
}: Props) {
  const [open, setOpen] = useState(false);
  const [field, setField] = useState("currentTitle");
  const [suggestedValue, setSuggestedValue] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [reason, setReason] = useState("");
  const [submitterName, setSubmitterName] = useState("");
  const [submitterEmail, setSubmitterEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function getCurrentValue() {
    switch (field) {
      case "currentTitle": return currentTitle ?? "";
      case "currentEmployer": return currentEmployer ?? "";
      case "location": return currentLocation ?? "";
      default: return "";
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personSlug,
          personName,
          field,
          currentValue: getCurrentValue(),
          suggestedValue,
          reason,
          sourceUrl,
          submitterName,
          submitterEmail,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline"
      >
        Suggest an edit
      </button>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
        <p className="font-semibold">Thanks for the suggestion!</p>
        <p className="mt-1">
          Your edit for {personName} has been queued for review.
        </p>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setSubmitted(false);
            setSuggestedValue("");
            setReason("");
            setSourceUrl("");
          }}
          className="mt-2 text-green-800 hover:underline"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">Suggest an edit</h3>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-sm text-gray-500 hover:text-gray-900"
          aria-label="Close form"
        >
          Cancel
        </button>
      </div>
      <p className="mb-4 text-sm text-gray-600">
        Spotted an error or know more recent info about {personName}? Let us know.
      </p>

      <div className="space-y-3">
        <div>
          <label className="block text-xs font-semibold uppercase text-gray-700">
            Field to update
          </label>
          <select
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          >
            {Object.entries(FIELD_LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>

        {getCurrentValue() && (
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-700">
              Current value
            </label>
            <p className="mt-1 rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700">
              {getCurrentValue()}
            </p>
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold uppercase text-gray-700">
            Suggested value <span className="text-red-600">*</span>
          </label>
          <textarea
            required
            value={suggestedValue}
            onChange={(e) => setSuggestedValue(e.target.value)}
            rows={3}
            maxLength={4000}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            placeholder="The corrected or updated information..."
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-gray-700">
            Source URL
          </label>
          <input
            type="url"
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-gray-700">
            Notes (optional)
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={2}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            placeholder="Why is this update needed?"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-700">
              Your name (optional)
            </label>
            <input
              type="text"
              value={submitterName}
              onChange={(e) => setSubmitterName(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-700">
              Your email (optional)
            </label>
            <input
              type="email"
              value={submitterEmail}
              onChange={(e) => setSubmitterEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting || suggestedValue.trim().length < 2}
        className="mt-4 w-full rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {submitting ? "Submitting..." : "Submit suggestion"}
      </button>
    </form>
  );
}
