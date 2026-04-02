import { searchPeople } from "@/lib/queries";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() ?? "";

  if (q.length < 2) {
    return Response.json([]);
  }

  const results = await searchPeople(q);

  const suggestions = results.slice(0, 8).map((p) => ({
    slug: p.slug,
    name: `${p.firstName} ${p.lastName}`,
    title: p.currentStatus?.currentTitle ?? null,
    employer: p.currentStatus?.currentEmployer ?? null,
    team: p.memberships?.[0]?.team?.name ?? null,
  }));

  return Response.json(suggestions);
}
