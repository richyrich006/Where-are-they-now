import Link from "next/link";
import { findTeammatePath, getPlayerBySlug } from "@/lib/queries";
import { PlayerSelect } from "@/components/connect/PlayerSelect";

export const metadata = {
  title: "Six Degrees of Connection — Where Are They Now",
  description:
    "Find the shortest path between any two college athletes in the database via the teammates they shared.",
};

type Props = {
  searchParams: Promise<{ from?: string; to?: string }>;
};

export default async function ConnectPage({ searchParams }: Props) {
  const params = await searchParams;
  const { from, to } = params;

  let fromPerson = null;
  let toPerson = null;
  let path: Awaited<ReturnType<typeof findTeammatePath>> = null;
  let error: string | null = null;

  if (from && to) {
    [fromPerson, toPerson] = await Promise.all([
      getPlayerBySlug(from),
      getPlayerBySlug(to),
    ]);
    if (!fromPerson || !toPerson) {
      error = "One or both players not found.";
    } else if (from === to) {
      error = "Pick two different players.";
    } else {
      path = await findTeammatePath(from, to);
      if (!path) {
        error = "No connection found. These players may not share any teammate chain.";
      }
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Six Degrees</h1>
        <p className="mt-2 text-sm text-gray-600">
          Pick any two players in the database. We'll find the shortest chain
          connecting them through shared teammates — the "Kevin Bacon" game for
          college basketball.
        </p>
      </header>

      <form className="mb-8 grid gap-4 rounded-xl border border-gray-200 bg-white p-5 sm:grid-cols-2">
        <PlayerSelect
          name="from"
          label="From"
          defaultSlug={from}
          defaultLabel={
            fromPerson ? `${fromPerson.firstName} ${fromPerson.lastName}` : undefined
          }
        />
        <PlayerSelect
          name="to"
          label="To"
          defaultSlug={to}
          defaultLabel={
            toPerson ? `${toPerson.firstName} ${toPerson.lastName}` : undefined
          }
        />
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Find connection
          </button>
        </div>
      </form>

      {error && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">{error}</div>
      )}

      {path && path.length > 0 && fromPerson && toPerson && (
        <div className="rounded-xl border border-green-200 bg-green-50 p-5">
          <p className="text-sm text-green-800">
            <span className="font-semibold">
              {fromPerson.firstName} {fromPerson.lastName}
            </span>{" "}
            is connected to{" "}
            <span className="font-semibold">
              {toPerson.firstName} {toPerson.lastName}
            </span>{" "}
            in <span className="font-bold">{path.length}</span> step
            {path.length === 1 ? "" : "s"}.
          </p>

          <ol className="mt-5 space-y-3">
            {path.map((step, i) => (
              <li key={i} className="relative pl-10">
                <span className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div className="rounded-lg border border-gray-200 bg-white p-3 text-sm">
                  <p>
                    <Link
                      href={`/players/${step.fromPlayer.slug}`}
                      className="font-semibold text-blue-700 hover:underline"
                    >
                      {step.fromPlayer.firstName} {step.fromPlayer.lastName}
                    </Link>{" "}
                    <span className="text-gray-500">shared a roster with</span>{" "}
                    <Link
                      href={`/players/${step.toPlayer.slug}`}
                      className="font-semibold text-blue-700 hover:underline"
                    >
                      {step.toPlayer.firstName} {step.toPlayer.lastName}
                    </Link>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    on the{" "}
                    <span className="font-medium text-gray-700">
                      {step.via.season} {step.via.name}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {!from && !to && (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-600">
          <p className="font-semibold text-gray-900">How it works</p>
          <p className="mt-2">
            Two players are connected if they were on the same team. Two players are
            connected in 2 steps if one of them played with someone who played with
            the other. The algorithm finds the shortest possible chain.
          </p>
          <p className="mt-3">Try these fun examples:</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href="/connect?from=cooper-flagg&to=jayson-tatum"
                className="text-blue-700 hover:underline"
              >
                Cooper Flagg → Jayson Tatum
              </Link>
            </li>
            <li>
              <Link
                href="/connect?from=anthony-davis&to=karl-anthony-towns"
                className="text-blue-700 hover:underline"
              >
                Anthony Davis → Karl-Anthony Towns
              </Link>
            </li>
            <li>
              <Link
                href="/connect?from=zion-williamson&to=kyrie-irving"
                className="text-blue-700 hover:underline"
              >
                Zion Williamson → Kyrie Irving
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
