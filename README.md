# विशाल शर्मा — हिंदी लेखक पोर्टफ़ोलियो

हिंदी स्क्रिप्ट लेखक, कंटेंट लेखक, कहानीकार और शायर के लिए एक सादा, किताब जैसा पोर्टफ़ोलियो।
वेबसाइट WhatsApp वाली Hinglish में है — हिंदी देवनागरी में, आम English words और phrases
English में, numbers English digits में, और menu व buttons English में। इसे Next.js, TypeScript और Tailwind CSS से बनाया गया है।

---

## १. शुरुआत (सेटअप)

ज़रूरत: Node.js 20 या उससे नया।

```bash
npm install        # पहली बार
npm run dev        # http://localhost:3000 पर साइट खोलें
npm run lint       # कोड की जाँच
npm run build      # प्रोडक्शन बिल्ड
npm run start      # बिल्ड की हुई साइट चलाएँ
```

---

## २. अपनी जानकारी कहाँ बदलें

**सारी सामग्री एक ही फ़ाइल में है:** `src/data/site.ts`

- नाम, ईमेल, डोमेन (`site`)
- एसईओ शीर्षक, विवरण और कीवर्ड (`seo`)
- मेन्यू, बटन और छोटे-छोटे शब्द (`ui`, `nav`)
- सोशल मीडिया लिंक (`socials`)
- हर हिस्सा: `hero`, `about`, `services`, `shayari`, `work`, `clients`, `workProcess`,
  `writing`, `faq`, `contact`, `footer`, `notFound`

कंपोनेंट्स में कोई भी शब्द सीधे नहीं लिखा गया है — सब कुछ इसी फ़ाइल से आता है।

**Numbers के बारे में:** `site.numerals` से तय होता है कि section numbers, साल और footer
का year कैसे दिखें — `"latin"` (01, 2017) या `"devanagari"` (०१, २०१७)। Text के अंदर लिखे
numbers वैसे ही दिखते हैं जैसे आपने लिखे हैं।

**सोशल शेयर वाली तस्वीर:** नाम या परिचय-पंक्ति बदलने के बाद यह चलाएँ —

```bash
npm run og
```

यह `src/app/opengraph-image.png` दोबारा बना देगा (इसके लिए कंप्यूटर में Chrome या Edge
होना चाहिए; किसी और जगह पर हो तो `CHROME_PATH` सेट करें)।
हम `ImageResponse` का इस्तेमाल नहीं करते, क्योंकि वह हिंदी के संयुक्ताक्षर (जैसे स्ते, र्म)
और ि की मात्रा को ठीक से नहीं जोड़ पाता।

---

## ३. रंग बदलना

रंग `src/app/globals.css` में सबसे ऊपर `:root` के अंदर हैं:

| नाम | रंग | कहाँ |
|---|---|---|
| `--paper` | `#F5F1E8` | पृष्ठभूमि |
| `--paper-2` | `#EDE7DA` | शायरी वाली पट्टी |
| `--ink` | `#1C1A17` | मुख्य अक्षर, भरा हुआ बटन |
| `--ink-2` | `#5B554C` | दूसरे दर्जे का पाठ |
| `--ink-3` | `#6F695F` | छोटे लेबल |
| `--rule` | `#D9D1C1` | पतली रेखाएँ |
| `--accent` | `#A8432A` | सिंदूरी — सिर्फ़ ख़ास जगहों पर |

यहाँ बदला गया रंग पूरी साइट पर अपने-आप लागू होगा (Tailwind में `bg-paper`, `text-ink`,
`text-accent` जैसे नामों से)। `layout.tsx` में `themeColor` और `seo.themeColor` भी बदलें।

---

## ४. फ़ॉन्ट बदलना

फ़ॉन्ट `src/app/layout.tsx` में `next/font/google` से आते हैं:

- **Tiro Devanagari Hindi** — शीर्षक, शायरी, अंक (`font-serif`)
- **Mukta** — सामान्य पाठ, मेन्यू, बटन (`font-sans`)
- **Kalam** — सिर्फ़ शायरी के नीचे का हस्ताक्षर (`font-hand`)

दूसरा फ़ॉन्ट लगाने के लिए `layout.tsx` में import बदलें (जैसे `Martel`, `Rozha_One`,
`Noto_Serif_Devanagari`) और `subsets: ["devanagari", "latin"]` रखें।
`variable` का नाम वही रखें (`--font-tiro`, `--font-mukta`, `--font-kalam`), ताकि
`globals.css` में कुछ न बदलना पड़े।

**हिंदी टाइपोग्राफ़ी के नियम:** letter-spacing, uppercase और italic का इस्तेमाल न करें,
और line-height कभी १.३ से कम न करें — वरना मात्राएँ कट जाएँगी।

---

## ५. Vercel पर प्रकाशित करना

1. कोड को GitHub पर डालें।
2. [vercel.com](https://vercel.com) पर "New Project" चुनें और यह रिपॉज़िटरी जोड़ें।
3. कोई सेटिंग बदलने की ज़रूरत नहीं — "Deploy" दबाएँ।
4. Project → Settings → Domains में अपना डोमेन जोड़ें और DNS रिकॉर्ड लगाएँ।
5. `src/data/site.ts` में `site.url` को अपने असली डोमेन से बदलें।

---

## ६. लॉन्च के बाद एसईओ चेकलिस्ट

- [ ] `src/data/site.ts` की हर नमूना जानकारी असली जानकारी से बदली
- [ ] `site.url` में असली डोमेन
- [ ] Google Search Console में साइट सत्यापित की और `/sitemap.xml` जमा किया
- [ ] Rich Results Test में Person और FAQ मार्कअप जाँचा
- [ ] `npm run og` चलाकर शेयर-तस्वीर दोबारा बनाई और WhatsApp/LinkedIn पर जाँची
- [ ] Lighthouse में चारों श्रेणियों में ९५+
- [ ] लिंक्डइन, मीडियम, यूट्यूब "परिचय" और इंस्टाग्राम बायो में वेबसाइट का लिंक
- [ ] ग्राहकों के असली नाम और नतीजे — उनकी अनुमति के साथ

---

## फ़ाइलों का ढाँचा

```
src/
  app/          layout, page, globals.css, sitemap, robots, manifest,
                icon, opengraph-image.png, not-found
  components/   Header, Footer, Reveal, CopyEmailButton, SectionHeader,
                Button, JsonLd
    sections/   Hero, About, Services, Shayari, Work, Clients, Process,
                Writing, Faq, Contact
  data/site.ts  ← सारी सामग्री
  lib/          hindi.ts (देवनागरी अंक), schema.ts (JSON-LD)
assets/fonts/   Tiro Devanagari Hindi (OFL लाइसेंस) — आइकन और शेयर-तस्वीर के लिए
scripts/        make-og.mts — शेयर-तस्वीर बनाने वाली स्क्रिप्ट
```
