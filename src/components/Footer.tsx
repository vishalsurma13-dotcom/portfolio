import { cacheLife } from "next/cache";
import { footer, ui } from "@/data/site";
import { formatDigits } from "@/lib/hindi";

/** Current year, cached so the page stays statically prerendered. */
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{formatDigits(new Date().getFullYear())}</>;
}

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="wrap flex flex-col gap-3 py-10 text-[16px] leading-[1.7] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CurrentYear /> {footer.line}
        </p>
        <a href="#main" className="nav-link self-start text-ink-2 hover:text-ink sm:self-auto">
          {ui.backToTop}
        </a>
      </div>
    </footer>
  );
}
