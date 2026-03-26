<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Player Research Requirements

When adding or updating any player (or coach) in `prisma/seed.ts`, you MUST actively research them on the internet before writing their entry. Vague placeholders like "Private Citizen" or "Did not pursue professional basketball" are not acceptable unless you have genuinely searched and found nothing.

## Required research steps for every person

1. **Web search their full name + "Duke basketball"** to confirm basic details (jersey number, position, years at school, hometown).
2. **Search their name + "what is he doing now"** or **"career after Duke"** to find post-college activity.
3. **Check LinkedIn** (search `"[Name]" site:linkedin.com` or include "LinkedIn" in your query) for current employer and title.
4. **Check Wikipedia** if they are a notable player.
5. **Check news sources** (ESPN, The Athletic, local papers) for any stories about their post-Duke life.
6. If they played professionally, check **basketball-reference.com**, **euroleague.net**, **proballers.com**, or equivalent.

## What deep research looks like

Every person entry should have:
- `bio`: A rich 2–3 sentence bio covering their role on the team and anything notable about their post-Duke journey.
- `status.occupationType`: Must be accurate — do not default to `OTHER` without trying.
- `status.currentTitle` and `status.currentEmployer`: Look these up. LinkedIn is the best source for non-athletes.
- `status.statusNote`: A detailed paragraph — where they are now, what they've done since graduating, notable achievements. Minimum 2 sentences; ideally 3–5.
- `status.sourceUrl`: A real URL you found. Do not leave this null for notable players.
- `careerEvents`: Add a timeline of meaningful post-college milestones (signings, career changes, awards, founding a company, etc.).

## Acceptable minimum for truly obscure walk-ons

If after thorough searching you genuinely cannot find post-Duke information (e.g. a walk-on with no social media or press presence), document what you *did* find:
- Note their academic major if findable.
- Note any charity work, internships, or other activities mentioned in college-era articles.
- Set `statusNote` to explain what is known and why further info is unavailable.
- Still include a `sourceUrl` pointing to their college roster or profile page.
