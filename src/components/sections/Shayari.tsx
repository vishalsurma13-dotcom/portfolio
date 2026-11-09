import Reveal from "@/components/Reveal";
import { shayari } from "@/data/site";

export default function Shayari() {
  return (
    <section aria-label={shayari.label} className="border-t border-rule bg-paper-2">
      <figure className="wrap py-[80px] text-center md:py-[110px]">
        <p className="mb-8 text-[16px] leading-[1.6] text-ink-2">{shayari.label}</p>
        <Reveal>
          <blockquote className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.9] text-ink">
            {shayari.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </blockquote>
        </Reveal>
        <figcaption className="mt-8 font-hand text-[24px] leading-[1.6] text-ink-2">
          {shayari.signature}
        </figcaption>
      </figure>
    </section>
  );
}
