import { buildSchema } from "@/lib/schema";

export default function JsonLd() {
  // Escape "<" so the JSON can never close the script tag early.
  const json = JSON.stringify(buildSchema()).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
