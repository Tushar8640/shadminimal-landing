import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fShortenNumber(number: number): string {
  if (number >= 1e6) {
    return (number / 1e6).toFixed(1).replace(/\.0$/, "") + "m";
  }
  if (number >= 1e3) {
    return (number / 1e3).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return number.toString();
}

export function fNumber(number: number): string {
  return new Intl.NumberFormat().format(number);
}

export function fPercent(percent: number): string {
  return `${percent > 0 ? "+" : ""}${percent.toFixed(1)}%`;
}

export function fCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
