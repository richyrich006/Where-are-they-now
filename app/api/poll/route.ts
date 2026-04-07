import { runAllProviders } from "@/lib/poller";

// HTTP endpoint to trigger the player update poller.
// Protected by a simple bearer token from POLLER_SECRET env var.
//
// Trigger via cron job (Vercel Cron, GitHub Actions, etc.):
//   curl -X POST -H "Authorization: Bearer $POLLER_SECRET" https://<host>/api/poll

export async function POST(request: Request) {
  const expected = process.env.POLLER_SECRET;
  if (expected) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${expected}`) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const results = await runAllProviders();
  return Response.json({ ok: true, results });
}
