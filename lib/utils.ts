import { type ClassValue, clsx } from "clsx";
import {
  differenceInDays,
  differenceInHours,
  differenceInMonths,
  differenceInWeeks,
} from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeElapsed(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const hoursElapsed = differenceInHours(now, date);
  const daysElapsed = differenceInDays(now, date);
  const weeksElapsed = differenceInWeeks(now, date);
  const monthsElapsed = differenceInMonths(now, date);

  if (hoursElapsed < 24) {
    return `${hoursElapsed} hour${hoursElapsed !== 1 ? "s" : ""} ago`;
  } else if (daysElapsed < 7) {
    return `${daysElapsed} day${daysElapsed !== 1 ? "s" : ""} ago`;
  } else if (weeksElapsed < 4) {
    return `${weeksElapsed} week${weeksElapsed !== 1 ? "s" : ""} ago`;
  } else {
    return `${monthsElapsed} month${monthsElapsed !== 1 ? "s" : ""} ago`;
  }
}
