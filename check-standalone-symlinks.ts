import fs from "node:fs";
import path from "node:path";

const link = path.resolve(".next/standalone/node_modules/next");

const target = fs.readlinkSync(link);
const resolved = path.resolve(path.dirname(link), target);

console.log(`Standalone: "${link}"\nResolved: "${resolved}"`)

if (!resolved.startsWith(path.resolve(".next/standalone"))) {
  console.error(
    `❌ next points outside standalone:\n${resolved}`
  );
  process.exit(1);
}

console.log("✅ next points inside standalone");