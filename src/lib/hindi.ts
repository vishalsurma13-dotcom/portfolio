import { site } from "@/data/site";

const DEVANAGARI_DIGITS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

/** Convert every ASCII digit (0-9) in a value to Devanagari digits (०-९). */
export function toHindiDigits(value: string | number): string {
  return String(value).replace(/[0-9]/g, (d) => DEVANAGARI_DIGITS[Number(d)]);
}

/** Digits in the style chosen by `site.numerals` ("latin" → 2017, "devanagari" → २०१७). */
export function formatDigits(value: string | number): string {
  return site.numerals === "devanagari" ? toHindiDigits(value) : String(value);
}

/** Zero-padded number in the chosen style, e.g. 1 → "01" (or "०१"). */
export function formatNumber(value: number, width = 2): string {
  return formatDigits(String(value).padStart(width, "0"));
}
