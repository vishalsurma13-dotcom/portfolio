// नीचे दी गई हर जानकारी को अपनी असली जानकारी से बदलें।
// Style: WhatsApp वाली Hinglish — हिंदी देवनागरी में, आम English words और phrases English में,
// और सारे numbers English digits (0-9) में।

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type Link = { label: string; href: string };

export type SectionMeta = {
  /** element id (Latin, so URLs work everywhere) */
  id: string;
  /** section number, rendered as 01, 02 … */
  number: number;
  label: string;
  title: string;
  subtitle?: string;
};

export type TimelineItem = {
  /** a normal number, or a word like "आज" */
  year: number | string;
  title: string;
  text: string;
};

export type Service = { title: string; text: string };

export type Project = {
  title: string;
  tag: string;
  /** optional custom column labels; default comes from work.columnLabels */
  labels?: [string, string, string];
  need: string;
  role: string;
  result?: string;
  link?: Link;
};

export type Client = { name: string; meta: string };
export type Stat = { value: string; label: string };
export type ProcessStep = { word: string; text: string };
export type Post = { title: string; platform: string; href: string };
export type FaqItem = { question: string; answer: string };

/* ------------------------------------------------------------------ */
/* Basic info                                                          */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Vishal Sharma",
  nameHindi: "विशाल शर्मा",
  firstName: "Vishal",
  lastName: "Sharma",
  url: "https://www.vishalsharma.in",
  email: "vishalsharmaself@gmail.com",
  country: "India",
  role: "Hindi Script Writer, Content Writer और Storyteller",
  /**
   * Numbers on the page: "latin" → 01, 2017 · "devanagari" → ०१, २०१७
   * (sirf generated numbers par lagta hai — section numbers, years, footer year)
   */
  numerals: "latin" as "latin" | "devanagari",
} as const;

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

export const seo = {
  title: "Vishal Sharma — Hindi Script Writer, Content Writer और Storyteller",
  titleTemplate: "%s — Vishal Sharma",
  description:
    "Hindi script और content writer, storyteller और शायर। YouTube scripts, channel management, social media management, SEO blogs और ghostwriting — creators, brands और professionals के लिए।",
  keywords: [
    "Hindi script writer",
    "Hindi content writer",
    "YouTube script writer Hindi",
    "Hindi storyteller",
    "Hindi shayari writer",
    "हिंदी स्क्रिप्ट लेखक",
    "हिंदी कंटेंट लेखक",
    "यूट्यूब स्क्रिप्ट लेखक",
    "हिंदी कहानीकार",
    "शायर",
    "शायरी लेखक",
    "हिंदी ब्लॉग लेखक",
    "social media manager",
    "YouTube channel manager",
    // Hinglish (Roman script) — jaise log Google/YouTube par type karte hain
    "Hindi script likhne wala",
    "YouTube script likhne wala",
    "YouTube ke liye Hindi script",
    "Hindi mein script writing",
    "Hindi content writer chahiye",
    "Hinglish content writer",
    "Hinglish script writer",
    "Hindi kahani likhne wala",
    "Hindi kahaniyan",
    "Hindi storytelling script",
    "shayari likhne wala",
    "shayar for hire",
    "original Hindi shayari",
    "Hindi kavita writer",
    "YouTube channel manage karne wala",
    "YouTube channel management Hindi",
    "social media handle karne wala",
    "Instagram reels script Hindi",
    "YouTube Shorts script Hindi",
    "motivational script Hindi",
    "Hindi blog writer",
    "Hindi SEO blog writing",
    "Hindi ghostwriter",
    "LinkedIn ghostwriter Hindi",
    "freelance Hindi writer India",
  ],
  /** extra knowsAbout entries for JSON-LD */
  knowsAboutExtra: ["Hindi script writing", "YouTube script writing", "Shayari"],
  ogAlt: "Vishal Sharma — Hindi Script Writer, Content Writer और Storyteller",
  manifestName: "Vishal Sharma — Hindi Writer",
  manifestShortName: "Vishal",
  themeColor: "#F5F1E8",
} as const;

/* ------------------------------------------------------------------ */
/* Interface text (English)                                            */
/* ------------------------------------------------------------------ */

export const ui = {
  skip: "Skip to main content",
  navLabel: "Main menu",
  menu: "Menu",
  close: "Close",
  copy: "Copy email",
  copied: "Copied ✓",
  copyFailed: "Copy नहीं हो पाया — यह रहा email:",
  backToTop: "Back to top ↑",
  socialLabel: "Social media profiles",
  homeLabel: "Vishal Sharma — Home",
  skillsLabel: "Skills",
  timelineLabel: "मेरा अब तक का सफ़र",
  newTab: "(opens in a new tab)",
  emailLabel: "Email",
} as const;

export const nav: Link[] = [
  { label: "About", href: "#parichay" },
  { label: "Services", href: "#sevayen" },
  { label: "Work", href: "#kaam" },
  { label: "Clients", href: "#grahak" },
  { label: "Writing", href: "#lekhan" },
  { label: "Contact", href: "#sampark" },
];

export const socials: Link[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vishal-sharma-b4744b44a" },
  { label: "Medium", href: "https://medium.com/@vishalsharma" },
  { label: "YouTube", href: "https://www.youtube.com/@vishalsharma" },
  { label: "Instagram", href: "https://www.instagram.com/vishallikhta" },
  { label: "X (Twitter)", href: "https://x.com/vishallikhta" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  topline: "Hindi Script Writer · Content Writer · Storyteller · शायर",
  greeting: "नमस्ते, मैं Vishal हूँ।",
  promise: {
    before: "मैं ऐसे शब्द लिखता हूँ जो ",
    emphasis: "सुने",
    after: " जाएँ — और याद रहें।",
  },
  lede: "मैं Hindi script और content writer, storyteller और शायर हूँ। YouTube के लिए scripts लिखता हूँ, creators और brands के channels व social media handle करता हूँ, और ऐसे blogs, कहानियाँ और शायरी लिखता हूँ जिन्हें पढ़कर लोग रुक जाएँ।",
  /**
   * Your photo, shown on the right side of the hero.
   * Put the file in /public with this exact name (portrait, ~4:5, at least 800px wide).
   * If the file is missing, the hero simply shows without a photo.
   */
  photo: {
    src: "/vishal.jpg",
    alt: "Vishal Sharma की photo",
    width: 800,
    height: 1000,
  },
  primaryCta: { label: "View my work →", href: "#kaam" },
  secondaryCta: { label: "Let's talk", href: "#sampark" },
  skills: [
    "YouTube Scripts",
    "Channel Management",
    "Social Media",
    "Blog Writing",
    "कहानियाँ",
    "शायरी",
  ],
} as const;

/* ------------------------------------------------------------------ */
/* 01 About                                                            */
/* ------------------------------------------------------------------ */

export const about: SectionMeta & { intro: string; timeline: TimelineItem[] } = {
  id: "parichay",
  number: 1,
  label: "About",
  title: "मेरी कहानी",
  subtitle: "हर अच्छी story शुरुआत से ही अच्छी लगती है — तो मेरी भी वहीं से।",
  intro:
    "बचपन से ही मुझे हिंदी की आवाज़ से प्यार रहा है — दादी की कहानियाँ, radio पर पुरानी ग़ज़लें, और वो एक अच्छी line जो सालों तक साथ रह जाती है। आज वही आवाज़ मेरा काम है। मैं ideas को ऐसी scripts, stories और content में बदलता हूँ जो real लगें — उसी भाषा में, जिसमें लोग सच में सोचते हैं।",
  timeline: [
    {
      year: 2017,
      title: "डायरी के पन्ने",
      text: "शुरुआत एक notebook में शायरी और छोटी कहानियों से हुई। पहले readers दोस्त थे — फिर Instagram पर एक छोटी-सी, अपनी-सी community बन गई।",
    },
    {
      year: 2019,
      title: "पहली कहानियाँ",
      text: "Medium पर Hindi stories और articles publish करने लगा। वहीं storytelling का structure सीखा — strong opening, बीच का twist और ऐसा ending जो असर छोड़ जाए।",
    },
    {
      year: 2020,
      title: "पहली Script",
      text: "एक Hindi storytelling channel के लिए पहली YouTube script लिखी — और समझ आया कि कानों के लिए लिखना एक अलग skill है: pace, pause और viewer को end तक रोके रखना।",
    },
    {
      year: 2022,
      title: "Channels की ज़िम्मेदारी",
      text: "Scripts से आगे बढ़कर पूरे channels handle करने लगा — research, scripts, titles, thumbnail ideas, upload calendar और analytics।",
    },
    {
      year: 2023,
      title: "Brands और लोग",
      text: "Professionals और creators के social media और personal brands संभालने शुरू किए — उन्हीं की आवाज़ में LinkedIn posts, captions और blogs।",
    },
    {
      year: "आज",
      title: "Full-time Writer",
      text: "आज मैं full-time Hindi script और content writer हूँ और कई YouTube channels, brands और लोगों के साथ काम करता हूँ। और हाँ — शायरी आज भी हर रात लिखता हूँ।",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 02 Services                                                         */
/* ------------------------------------------------------------------ */

export const services: SectionMeta & { items: Service[] } = {
  id: "sevayen",
  number: 2,
  label: "Services",
  title: "मैं क्या लिखता हूँ",
  subtitle:
    "पहले हिंदी, ज़रूरत हो तो Hinglish — पर हमेशा उस आवाज़ में, जिस पर आपकी audience भरोसा करे।",
  items: [
    {
      title: "YouTube Script Writing",
      text: "Long videos, Shorts और Reels के लिए Hindi scripts — strong hook, clear structure और end तक बाँधे रखने वाली writing।",
    },
    {
      title: "YouTube Channel Management",
      text: "Research, scripts, titles, descriptions, thumbnail ideas, SEO और regular upload calendar — सब एक जगह।",
    },
    {
      title: "Social Media Management",
      text: "Creators और professionals के लिए Instagram, LinkedIn और X — planning, captions, carousels और comments के replies।",
    },
    {
      title: "Blog और SEO Writing",
      text: "Research-based blogs जो Google पर आसानी से मिलें — Hindi और English दोनों में; पहले readers के लिए, फिर Google के लिए।",
    },
    {
      title: "Storytelling और कहानियाँ",
      text: "Original stories, narrative scripts, audio stories और brand stories — जिनमें शुरुआत हो, बीच हो और एक एहसास हो।",
    },
    {
      title: "शायरी और Poetry",
      text: "Videos, brand campaigns, events और special occasions के लिए original शायरी, कविताएँ और यादगार lines।",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Shayari                                                             */
/* ------------------------------------------------------------------ */

export const shayari = {
  label: "मेरी डायरी से",
  lines: [
    "लफ़्ज़ों को मैंने यूँ ही नहीं सँवारा है,",
    "हर कहानी में थोड़ा-सा ख़ुद को उतारा है।",
  ],
  signature: "— Vishal",
} as const;

/* ------------------------------------------------------------------ */
/* 03 Work                                                             */
/* ------------------------------------------------------------------ */

export const work: SectionMeta & {
  columnLabels: [string, string, string];
  projects: Project[];
} = {
  id: "kaam",
  number: 3,
  label: "Work",
  title: "कुछ चुनिंदा Projects",
  subtitle:
    "कुछ काम जो मैंने लिखे और संभाले। किसी भी project को खोलकर देखें — ज़रूरत क्या थी, मेरा role क्या था और result क्या निकला।",
  columnLabels: ["ज़रूरत", "मेरा Role", "Result"],
  projects: [
    {
      title: "History Stories वाला Channel",
      tag: "YouTube · Scripts",
      need: "भारतीय इतिहास को lecture नहीं, कहानी की तरह Hindi audience तक पहुँचाना।",
      role: "Lead Script Writer — research, 10–15 minute की narrative scripts, titles और strong hooks।",
      result: "120+ scripts; average watch time 38% बढ़ा।",
    },
    {
      title: "Personal Finance Channel",
      tag: "YouTube · Management",
      need: "पहली बार कमाने वालों को आसान हिंदी में पैसों की समझ देना और channel को रोज़ चलाना।",
      role: "Channel Manager — content calendar, scripts, titles, descriptions, thumbnail ideas और analytics।",
      result: "14 महीनों में 8K से 1.1 Lakh subscribers।",
    },
    {
      title: "Motivation Shorts और Reels",
      tag: "Short Videos · Scripts",
      need: "रोज़ 30–60 second के motivational videos, जो lecture नहीं, अपनी-सी बात लगें।",
      role: "Writer — 300+ short scripts, जिनमें कहानी, शायरी और एक clear thought हो।",
      result: "कई Shorts पर 1M+ views और खूब shares।",
    },
    {
      title: "एक Doctor का Personal Brand",
      tag: "LinkedIn · Instagram",
      need: "Busy professional के लिए online trust बनाना — बिना उन्हें खुद लिखे।",
      role: "Ghostwriter और Social Media Manager — उन्हीं की आवाज़ में weekly posts, carousels, captions और replies।",
      result: "हफ़्ते में 3 बार consistent posting; patients और speaking invites की enquiries बढ़ीं।",
    },
    {
      title: "एक EdTech Brand का Blog",
      tag: "SEO · Hindi + English",
      need: "Exam preparation वाली searches में सच में useful articles के साथ top पर आना।",
      role: "Blog Writer — keyword research, outlines, 60+ detailed articles और on-page SEO।",
      result: "कई articles Google के first page पर; organic traffic हर महीने लगातार बढ़ा।",
    },
    {
      title: "कहानियाँ और शायरी",
      tag: "Personal · Medium · Instagram",
      labels: ["यह क्या है", "Genres", "पढ़ें"],
      need: "हिंदी कहानियों और शायरी का मेरा अपना collection — जहाँ मैं आवाज़ और craft के साथ experiment करता हूँ।",
      role: "Short stories, लघुकथाएँ, ग़ज़ल-style शायरी और stage पर बोली जाने वाली रचनाएँ।",
      link: { label: "Medium पर पढ़ें ↗", href: "https://medium.com/@vishalsharma" },
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 04 Clients                                                          */
/* ------------------------------------------------------------------ */

export const clients: SectionMeta & {
  list: Client[];
  invite: { title: string; link: Link };
  stats: Stat[];
} = {
  id: "grahak",
  number: 4,
  label: "Clients",
  title: "जिनके लिए लिखता हूँ",
  subtitle:
    "Creators, channels, brands और professionals — जो चाहते थे कि उनके words बिल्कुल उन्हीं जैसे लगें।",
  list: [
    { name: "Itihaas Ki Kahaniyan", meta: "YouTube · History" },
    { name: "Paisa Aasan", meta: "YouTube · Finance" },
    { name: "Roz Ki Prerna", meta: "Shorts · Motivation" },
    { name: "Dr. Mehta Clinic", meta: "LinkedIn · Personal Brand" },
    { name: "PadhoPro", meta: "Blog · Education" },
    { name: "Kesar & Co.", meta: "Instagram · Brand" },
    { name: "Safar Kahaniyan", meta: "Podcast · Audio Stories" },
  ],
  invite: {
    title: "अगला नाम आपका?",
    link: { label: "Let's talk →", href: "#sampark" },
  },
  stats: [
    { value: "600+", label: "Scripts लिखीं" },
    { value: "5", label: "YouTube channels handle किए" },
    { value: "25M+", label: "Video views" },
    { value: "150+", label: "Blogs published" },
  ],
};

/* ------------------------------------------------------------------ */
/* 05 Process                                                          */
/* ------------------------------------------------------------------ */

export const workProcess: SectionMeta & { steps: ProcessStep[] } = {
  id: "prakriya",
  number: 5,
  label: "Process",
  title: "मैं कैसे काम करता हूँ",
  subtitle:
    "Simple, clear और time पर — ताकि आपको हमेशा पता रहे कि आपकी script कहाँ तक पहुँची।",
  steps: [
    { word: "Brief", text: "आपकी audience, goals, tone और अब तक क्या काम किया।" },
    { word: "Research", text: "Facts, references, keywords और वो angle जो अभी तक किसी ने नहीं लिया।" },
    { word: "Structure", text: "एक भी line लिखने से पहले hook, flow और ending तय।" },
    { word: "Draft", text: "आपकी आवाज़ में पहला draft — सुनने, पढ़ने या दोनों के लिए।" },
    { word: "Polish", text: "2 rounds of revisions, फिर time पर delivery।" },
  ],
};

/* ------------------------------------------------------------------ */
/* 06 Writing                                                          */
/* ------------------------------------------------------------------ */

export const writing: SectionMeta & { posts: Post[] } = {
  id: "lekhan",
  number: 6,
  label: "Writing",
  title: "हाल ही में लिखा",
  subtitle: "Articles, कहानियाँ और writing craft पर कुछ बातें — Medium और LinkedIn पर।",
  posts: [
    {
      title: "Hindi YouTube video का ऐसा hook कैसे लिखें जो पहले 30 seconds बाँधे रखे",
      platform: "Medium",
      href: "https://medium.com/@vishalsharma/youtube-hook-hindi",
    },
    {
      title: "बारिश वाली आख़िरी चिट्ठी — एक छोटी कहानी",
      platform: "Medium",
      href: "https://medium.com/@vishalsharma/baarish-wali-aakhiri-chitthi",
    },
    {
      title: "कानों के लिए लिखना: Script, ज़ोर से पढ़ा गया blog नहीं है",
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/vishal-sharma-b4744b44a/recent-activity/",
    },
    {
      title: "Hinglish या शुद्ध हिंदी? अपने channel के लिए सही आवाज़ कैसे चुनें",
      platform: "Medium",
      href: "https://medium.com/@vishalsharma/hinglish-ya-shuddh-hindi",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 07 FAQs                                                             */
/* ------------------------------------------------------------------ */

export const faq: SectionMeta & { items: FaqItem[] } = {
  id: "sawal",
  number: 7,
  label: "FAQs",
  title: "अक्सर पूछे जाने वाले सवाल",
  items: [
    {
      question: "क्या आप Hindi में YouTube scripts लिखते हैं?",
      answer:
        "हाँ। Long videos, Shorts और Reels के लिए Hindi (और ज़रूरत हो तो Hinglish) scripts — hook, structure और audience retention का पूरा ध्यान रखते हुए।",
    },
    {
      question: "क्या आप मेरा YouTube channel या social media handle कर सकते हैं?",
      answer:
        "हाँ। YouTube, Instagram और LinkedIn के लिए research, scripts, titles, descriptions, thumbnail ideas, content calendar और comments के replies — सब मैं देखता हूँ।",
    },
    {
      question: "क्या आप SEO blogs भी लिखते हैं?",
      answer:
        "हाँ। Hindi और English में research-based blogs, जो पहले readers के लिए और फिर search engines के लिए लिखे जाते हैं।",
    },
    {
      question: "आपके साथ काम कैसे शुरू करें?",
      answer:
        "Email या LinkedIn पर message करें और अपने channel या brand, goals और timeline के बारे में बताएँ। मैं 24 घंटे के अंदर कुछ सवालों और pricing details के साथ reply करता हूँ।",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 08 Contact                                                          */
/* ------------------------------------------------------------------ */

export const contact = {
  id: "sampark",
  label: "Contact",
  title: "कोई कहानी कहनी है? चलिए, साथ मिलकर लिखते हैं।",
} as const;

/* ------------------------------------------------------------------ */
/* Footer & 404                                                        */
/* ------------------------------------------------------------------ */

export const footer = {
  line: `${site.name} · Hindi Script और Content Writer, ${site.country}`,
} as const;

export const notFound = {
  title: "यह page नहीं मिला",
  text: "शायद यह कहानी अभी लिखी ही नहीं गई।",
  button: "Back to home",
} as const;
