import type { Metadata, Viewport } from "next";
import { Kalam, Mukta, Tiro_Devanagari_Hindi } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { seo, site, ui } from "@/data/site";
import "./globals.css";

const tiro = Tiro_Devanagari_Hindi({
  weight: "400",
  subsets: ["devanagari", "latin"],
  display: "swap",
  variable: "--font-tiro",
});

const mukta = Mukta({
  weight: ["300", "400", "500", "600"],
  subsets: ["devanagari", "latin"],
  display: "swap",
  variable: "--font-mukta",
});

const kalam = Kalam({
  weight: "400",
  subsets: ["devanagari", "latin"],
  display: "swap",
  variable: "--font-kalam",
  preload: false, // used only for the shayari signature
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: seo.title, template: seo.titleTemplate },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
    languages: { "hi-IN": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "hi_IN",
    url: "/",
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    firstName: site.firstName,
    lastName: site.lastName,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: seo.themeColor,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hi"
      dir="ltr"
      className={`${tiro.variable} ${mukta.variable} ${kalam.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        <a href="#main" className="skip-link">
          {ui.skip}
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
