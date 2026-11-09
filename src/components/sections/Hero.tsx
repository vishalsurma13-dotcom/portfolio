import Image from "next/image";
import Button from "@/components/Button";
import { hero, ui } from "@/data/site";
import { getPhoto } from "@/lib/photo";

export default function Hero() {
  const photo = getPhoto();

  return (
    <section aria-labelledby="hero-title" className="pt-[72px] pb-[80px] md:pt-[120px] md:pb-[110px]">
      <div className="wrap">
        <div
          className={
            photo
              ? "grid items-center gap-12 md:grid-cols-[1fr_minmax(260px,340px)] md:gap-14 lg:gap-20"
              : undefined
          }
        >
          <div>
            <p className="mb-7 text-[16px] leading-[1.7] text-ink-3">{hero.topline}</p>

            <h1
              id="hero-title"
              className={`font-serif leading-[1.3] text-ink ${
                photo ? "text-[clamp(40px,5.4vw,72px)]" : "text-[clamp(40px,6.6vw,84px)]"
              }`}
            >
              <span className="block">{hero.greeting}</span>
              <span className="block">
                {hero.promise.before}
                <span className="text-accent">{hero.promise.emphasis}</span>
                {hero.promise.after}
              </span>
            </h1>

            <p className="mt-9 max-w-[640px] text-[21px] leading-[1.8] font-light text-ink-2">{hero.lede}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {photo ? (
            <div className="mx-auto w-full max-w-[300px] md:max-w-none">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                priority
                sizes="(min-width: 768px) 340px, 300px"
                className="aspect-[4/5] w-full rounded-[2px] border border-rule bg-paper-2 object-cover"
              />
            </div>
          ) : null}
        </div>

        <ul
          aria-label={ui.skillsLabel}
          className="mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-rule pt-7 text-[17px] leading-[1.7] text-ink-2 md:mt-20"
        >
          {hero.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
