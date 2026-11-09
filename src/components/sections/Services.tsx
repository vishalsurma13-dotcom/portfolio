import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/site";
import { formatNumber } from "@/lib/hindi";

export default function Services() {
  const titleId = `${services.id}-title`;
  return (
    <section id={services.id} aria-labelledby={titleId} className="section">
      <div className="wrap">
        <SectionHeader
          number={services.number}
          label={services.label}
          title={services.title}
          titleId={titleId}
          subtitle={services.subtitle}
        />

        <ul className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="border-t border-rule pt-7 pb-12">
              <span className="block text-[16px] leading-[1.6] text-accent" aria-hidden="true">
                {formatNumber(i + 1)}
              </span>
              <h3 className="mt-3 font-serif text-[23px] leading-[1.45] text-ink">{item.title}</h3>
              <p className="mt-3 text-[18px] leading-[1.8] text-ink-2">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
