import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the reply-all loop. The setup is a reasonable
// request, and the punchline lands on the final beat, when the cure for
// reply-all turns out to be more reply-all.
const joke =
  "I hit reply-all to tell everyone to stop replying all, and now 400 people are agreeing with me, one reply-all at a time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
