import { existsSync } from "node:fs";
import { join } from "node:path";
import { hero } from "@/data/site";

/** Returns the hero photo only if its file exists in /public (checked at build time). */
export function getPhoto() {
  const file = join(process.cwd(), "public", hero.photo.src.replace(/^\//, ""));
  return existsSync(file) ? hero.photo : null;
}
