import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { clients } from "@/data/site";

export default function Clients() {
  const titleId = `${clients.id}-title`;
  return (
    <section id={clients.id} aria-labelledby={titleId} className="section">
      <div className="wrap">
        <SectionHeader
          number={clients.number}
          label={clients.label}
          title={clients.title}
          titleId={titleId}
          subtitle={clients.subtitle}
        />

        <ul className="grid grid-cols-2 border-t border-l border-rule md:grid-cols-4">
          {clients.list.map((client) => (
            <li key={client.name} className="border-r border-b border-rule p-5 md:p-7">
              <p className="font-serif text-[clamp(19px,2vw,22px)] leading-[1.45] text-ink">{client.name}</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-ink-3">{client.meta}</p>
            </li>
          ))}
          <li className="border-r border-b border-rule p-5 md:p-7">
            <p className="font-serif text-[clamp(19px,2vw,22px)] leading-[1.45] text-ink">{clients.invite.title}</p>
            <a
              href={clients.invite.link.href}
              className="nav-link mt-2 inline-block text-[16px] leading-[1.6] text-accent"
            >
              {clients.invite.link.label}
            </a>
          </li>
        </ul>

        <Reveal>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-20 md:grid-cols-4">
            {clients.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-[16px] leading-[1.6] text-ink-2">{stat.label}</dt>
                <dd className="font-serif text-[clamp(34px,4.6vw,54px)] leading-[1.3] text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
