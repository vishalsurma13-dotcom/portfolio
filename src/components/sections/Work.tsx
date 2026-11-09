import SectionHeader from "@/components/SectionHeader";
import { ui, work, type Project } from "@/data/site";
import { formatNumber } from "@/lib/hindi";

function ProjectBody({ project }: { project: Project }) {
  const [needLabel, roleLabel, resultLabel] = project.labels ?? work.columnLabels;
  return (
    <div className="grid gap-7 pt-2 pb-10 md:grid-cols-3 md:gap-10 md:pl-[60px]">
      <div>
        <p className="text-[15px] leading-[1.6] text-ink-3">{needLabel}</p>
        <p className="mt-2 text-[17px] leading-[1.8] text-ink-2">{project.need}</p>
      </div>
      <div>
        <p className="text-[15px] leading-[1.6] text-ink-3">{roleLabel}</p>
        <p className="mt-2 text-[17px] leading-[1.8] text-ink-2">{project.role}</p>
      </div>
      <div>
        <p className="text-[15px] leading-[1.6] text-ink-3">{resultLabel}</p>
        {project.result ? (
          <p className="mt-2 text-[17px] leading-[1.8] font-medium text-ink">{project.result}</p>
        ) : null}
        {project.link ? (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[17px] leading-[1.8] font-medium text-ink underline decoration-rule underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
          >
            {project.link.label}
            <span className="sr-only"> {ui.newTab}</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function Work() {
  const titleId = `${work.id}-title`;
  return (
    <section id={work.id} aria-labelledby={titleId} className="section">
      <div className="wrap">
        <SectionHeader
          number={work.number}
          label={work.label}
          title={work.title}
          titleId={titleId}
          subtitle={work.subtitle}
        />

        <div className="border-b border-rule">
          {work.projects.map((project, i) => (
            <details key={project.title} open={i === 0} className="group border-t border-rule">
              <summary className="grid grid-cols-[44px_1fr_auto] items-baseline gap-4 py-6 md:grid-cols-[60px_1fr_auto_auto] md:gap-8">
                <span className="text-[16px] leading-[1.6] text-ink-3" aria-hidden="true">
                  {formatNumber(i + 1)}
                </span>
                <h3 className="font-serif text-[clamp(22px,2.6vw,26px)] leading-[1.45] text-ink transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <span className="hidden text-[16px] leading-[1.6] text-ink-3 md:inline">{project.tag}</span>
                <span className="toggle-sign font-serif text-[28px] leading-[1.3] text-ink-2" aria-hidden="true">
                  +
                </span>
              </summary>
              <ProjectBody project={project} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
