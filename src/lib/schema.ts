import { faq, seo, services, site, socials } from "@/data/site";
import { getPhoto } from "@/lib/photo";

const LANG = "hi-IN";

/** Builds the single JSON-LD @graph for the home page from data/site.ts. */
export function buildSchema() {
  const url = site.url.replace(/\/$/, "");
  const personId = `${url}/#person`;
  const websiteId = `${url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        alternateName: site.nameHindi,
        url: `${url}/`,
        image: `${url}${getPhoto()?.src ?? "/opengraph-image.png"}`,
        jobTitle: site.role,
        description: seo.description,
        email: site.email,
        knowsLanguage: ["hi", "en"],
        knowsAbout: [...services.items.map((s) => s.title), ...seo.knowsAboutExtra],
        address: { "@type": "PostalAddress", addressCountry: "IN" },
        sameAs: socials.map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${url}/`,
        name: site.name,
        description: seo.description,
        inLanguage: LANG,
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}/#profilepage`,
        url: `${url}/`,
        name: seo.title,
        inLanguage: LANG,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        inLanguage: LANG,
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}
