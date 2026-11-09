"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { nav, site, ui } from "@/data/site";

const MENU_ID = "mobile-menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Show the bottom hairline after 8px of scroll (DOM attribute, no re-render).
  const headerRef = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    const update = () => {
      el.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Close the mobile menu on Escape and return focus to the button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      ref={headerRef}
      data-scrolled="false"
      className="sticky top-0 z-50 border-b border-transparent bg-paper/85 backdrop-blur-md transition-colors duration-300 data-[scrolled=true]:border-rule"
    >
      <div className="wrap flex h-[68px] items-center justify-between">
        <a
          href="#main"
          aria-label={ui.homeLabel}
          className="font-serif text-[24px] leading-[1.4] text-ink"
          onClick={() => setOpen(false)}
        >
          {site.firstName}
          <span className="hidden text-ink-3 min-[680px]:inline">
            {" "}
            {site.lastName}
          </span>
        </a>

        <nav aria-label={ui.navLabel}>
          {/* desktop */}
          <ul className="hidden items-center gap-7 min-[680px]:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link text-[17px] leading-[1.6] text-ink-2 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* mobile */}
          <button
            ref={buttonRef}
            type="button"
            className="rounded-full border border-ink px-4 py-1 text-[16px] leading-[1.6] text-ink transition-colors hover:bg-ink hover:text-paper min-[680px]:hidden"
            aria-expanded={open}
            aria-controls={MENU_ID}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? ui.close : ui.menu}
          </button>

          <ul
            id={MENU_ID}
            hidden={!open}
            className="absolute inset-x-0 top-[68px] border-y border-rule bg-paper px-[28px] py-3 min-[680px]:hidden"
          >
            {nav.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-b-0">
                <a
                  href={item.href}
                  className="block py-3 text-[19px] leading-[1.6] text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
