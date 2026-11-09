import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { about, ui } from "@/data/site";
import { formatDigits } from "@/lib/hindi";

export default function About() {
  const titleId = `${about.id}-title`;
  return (
    <section id={about.id} aria-labelledby={titleId} className="section">
      <div className="wrap">
        <SectionHeader
          number={about.number}
          label={about.label}
          title={about.title}
          titleId={titleId}
          subtitle={about.subtitle}
        />

        <div className="md:pl-[240px]">
          <p className="max-w-[62ch] text-[22px] leading-[1.8] font-light text-ink">{about.intro}</p>

          <ol aria-label={ui.timelineLabel} className="timeline mt-16 ml-[4px] border-l border-rule">
            {about.timeline.map((item) => (
              <Reveal
                as="li"
                key={`${item.year}-${item.title}`}
                className="grid gap-1 pb-12 pl-8 last:pb-0 sm:grid-cols-[110px_1fr] sm:gap-6"
              >
                <span className="font-serif text-[20px] leading-[1.6] text-ink-3">
                  {formatDigits(item.year)}
                </span>
                <div>
                  <h3 className="font-serif text-[24px] leading-[1.45] text-ink">{item.title}</h3>
                  <p className="mt-2 max-w-[58ch] text-ink-2">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
