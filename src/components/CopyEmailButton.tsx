"use client";

import { useEffect, useRef, useState } from "react";
import { ui } from "@/data/site";

type Status = "idle" | "copied" | "failed";

export default function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-ink px-[26px] py-[13px] text-[17px] leading-[1.5] text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
      >
        {status === "copied" ? ui.copied : ui.copy}
      </button>
      <p role="status" aria-live="polite" className="text-[17px] leading-[1.6] text-ink-2">
        {status === "failed" ? (
          <>
            {ui.copyFailed} <span className="select-all text-ink">{email}</span>
          </>
        ) : null}
      </p>
    </div>
  );
}
