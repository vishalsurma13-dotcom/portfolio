import { formatNumber } from "@/lib/hindi";

type SectionHeaderProps = {
  number: number;
  label: string;
  title: string;
  titleId: string;
  subtitle?: string;
};

export default function SectionHeader({ number, label, title, titleId, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-14 grid gap-3 md:mb-16 md:grid-cols-[200px_1fr] md:gap-10">
      <div className="flex items-baseline gap-3 md:block">
        <span className="block font-serif text-[22px] leading-[1.4] text-accent" aria-hidden="true">
          {formatNumber(number)}
        </span>
        <span className="block text-[16px] leading-[1.6] text-ink-3">{label}</span>
      </div>
      <div>
        <h2 id={titleId} className="font-serif text-[clamp(30px,4vw,46px)] leading-[1.35] text-ink">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 max-w-[62ch] text-[18px] leading-[1.8] font-light text-ink-2">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
