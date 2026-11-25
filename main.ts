import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final: saying no is the setup — every office worker knows the word,
// and the turn is that refusing a meeting just spawns another meeting
// about the refusal itself. Revised from "book a follow-up" to
// "schedule a follow-up meeting" so the office detail is explicit:
// the punishment for declining a meeting is another meeting.
// Punchline lands on the last few words.
const line =
  "I finally learned to say no in meetings, so now they schedule a follow-up meeting to discuss why I said no.";

// Gate: this bounty only judges one line of 1-199 characters, not blank.
if (
  line.length < 1 ||
  line.length > 199 ||
  line.trim().length === 0 ||
  line.includes("\n")
) {
  throw new Error(
    `entry must be one line of 1-199 characters, got ${line.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
