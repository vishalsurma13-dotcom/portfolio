import type { Metadata } from "next";
import Button from "@/components/Button";
import { notFound } from "@/data/site";

export const metadata: Metadata = {
  title: notFound.title,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="py-[100px] md:py-[160px]">
      <div className="wrap">
        <h1 id="not-found-title" className="font-serif text-[clamp(40px,6.6vw,84px)] leading-[1.3] text-ink">
          {notFound.title}
        </h1>
        <p className="mt-6 max-w-[62ch] text-[21px] leading-[1.8] font-light text-ink-2">{notFound.text}</p>
        <div className="mt-10">
          <Button href="/">{notFound.button}</Button>
        </div>
      </div>
    </section>
  );
}
