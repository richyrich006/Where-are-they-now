import { prisma } from "@/lib/prisma";

const ALLOWED_FIELDS = new Set([
  "currentTitle",
  "currentEmployer",
  "league",
  "location",
  "statusNote",
  "sourceUrl",
  "linkedInUrl",
  "imageUrl",
  "bio",
  "occupationType",
  "other",
]);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const personSlug = typeof body.personSlug === "string" ? body.personSlug : null;
  const personName = typeof body.personName === "string" ? body.personName : null;
  const field = typeof body.field === "string" ? body.field : "";
  const suggestedValue = typeof body.suggestedValue === "string" ? body.suggestedValue.trim() : "";
  const currentValue = typeof body.currentValue === "string" ? body.currentValue : null;
  const reason = typeof body.reason === "string" ? body.reason : null;
  const sourceUrl = typeof body.sourceUrl === "string" ? body.sourceUrl : null;
  const submitterName = typeof body.submitterName === "string" ? body.submitterName : null;
  const submitterEmail = typeof body.submitterEmail === "string" ? body.submitterEmail : null;

  if (!ALLOWED_FIELDS.has(field)) {
    return Response.json({ error: "Invalid field" }, { status: 400 });
  }
  if (!suggestedValue || suggestedValue.length > 4000) {
    return Response.json({ error: "Suggested value required (max 4000 chars)" }, { status: 400 });
  }
  if (suggestedValue.length < 2) {
    return Response.json({ error: "Suggested value too short" }, { status: 400 });
  }

  const submission = await prisma.submission.create({
    data: {
      personSlug,
      personName,
      field,
      currentValue,
      suggestedValue,
      reason,
      sourceUrl,
      submitterName,
      submitterEmail,
    },
  });

  return Response.json({ id: submission.id, status: "received" }, { status: 201 });
}
