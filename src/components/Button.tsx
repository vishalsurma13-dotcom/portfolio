import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full border border-ink px-[26px] py-[13px] text-[17px] leading-[1.5] font-medium transition-colors duration-200";

const variants = {
  solid: "bg-ink text-paper hover:border-accent hover:bg-accent",
  outline: "bg-transparent text-ink hover:bg-ink hover:text-paper",
} as const;

export default function Button({ href, children, variant = "solid", className = "" }: ButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
