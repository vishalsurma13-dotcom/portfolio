import SectionHeader from "@/components/SectionHeader";
import { ui, writing } from "@/data/site";

export default function Writing() {
  const titleId = `${writing.id}-title`;
  return (
    <section id={writing.id} aria-labelledby={titleId} className="section">
      <div className="wrap">
        <SectionHeader
          number={writing.number}
          label={writing.label}
          title={writing.title}
          titleId={titleId}
          subtitle={writing.subtitle}
        />

        <ul className="border-b border-rule md:ml-[240px]">
          {writing.posts.map((post) => (
            <li key={post.href} className="border-t border-rule">
              <article>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <h3 className="font-serif text-[clamp(20px,2.3vw,24px)] leading-[1.5] text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <span className="shrink-0 text-[16px] leading-[1.6] text-ink-3">
                    {post.platform} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> {ui.newTab}</span>
                  </span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
