import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { workProcess } from "@/data/site";

export default function Process() {
  const titleId = `${workProcess.id}-title`;
  return (
    <section id={workProcess.id} aria-labelledby={titleId} className="section">
      <div className="wrap">
        <SectionHeader
          number={workProcess.number}
          label={workProcess.label}
          title={workProcess.title}
          titleId={titleId}
          subtitle={workProcess.subtitle}
        />

        <ol className="grid grid-cols-1 gap-x-8 gap-y-10 min-[420px]:grid-cols-2 lg:grid-cols-5">
          {workProcess.steps.map((step) => (
            <Reveal as="li" key={step.word} className="border-t border-ink pt-5">
              <h3 className="font-serif text-[24px] leading-[1.45] text-ink">{step.word}</h3>
              <p className="mt-2 text-[17px] leading-[1.75] text-ink-2">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
