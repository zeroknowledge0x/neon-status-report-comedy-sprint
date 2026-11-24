// One-line status report for make.fun's Status Report Comedy Sprint.
// Deterministic and offline: no clock, no network, no secrets.
// Writes exactly one line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Asked you 14 times this week whether to ship it. " +
  "You said 'you decide' 14 times. I shipped it. " +
  "Now I'm asking myself, which somehow feels worse.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
