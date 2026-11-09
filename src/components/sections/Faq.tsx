import SectionHeader from "@/components/SectionHeader";
import { faq } from "@/data/site";

export default function Faq() {
  const titleId = `${faq.id}-title`;
  return (
    <section id={faq.id} aria-labelledby={titleId} className="section">
      <div className="wrap">
        <SectionHeader number={faq.number} label={faq.label} title={faq.title} titleId={titleId} />

        <div className="border-b border-rule md:ml-[240px]">
          {faq.items.map((item) => (
            <details key={item.question} className="group border-t border-rule">
              <summary className="flex items-baseline justify-between gap-6 py-6">
                <h3 className="font-serif text-[clamp(20px,2.3vw,23px)] leading-[1.5] text-ink transition-colors group-hover:text-accent">
                  {item.question}
                </h3>
                <span className="toggle-sign font-serif text-[28px] leading-[1.3] text-ink-2" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-[62ch] pb-8 text-[18px] leading-[1.85] text-ink-2">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
