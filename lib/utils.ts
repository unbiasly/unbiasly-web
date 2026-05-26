import { type ClassValue, clsx } from "clsx";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInWeeks,
} from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const timeStrings = {
  english: {
    minute: "minute",
    minutes: "minutes",
    hour: "hour",
    hours: "hours",
    day: "day",
    days: "days",
    week: "week",
    weeks: "weeks",
    month: "month",
    months: "months",
    ago: "ago"
  },
  hindi: {
    minute: "मिनट",
    minutes: "मिनट",
    hour: "घंटा",
    hours: "घंटे",
    day: "दिन",
    days: "दिन",
    week: "सप्ताह",
    weeks: "सप्ताह",
    month: "महीना",
    months: "महीने",
    ago: "पहले"
  },
  bengali: {
    minute: "মিনিট",
    minutes: "মিনিট",
    hour: "ঘণ্টা",
    hours: "ঘণ্টা",
    day: "দিন",
    days: "দিন",
    week: "সপ্তাহ",
    weeks: "সপ্তাহ",
    month: "মাস",
    months: "মাস",
    ago: "আগে"
  }
};

type SupportedLanguage = keyof typeof timeStrings;

export function timeElapsed(dateString: string, language: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const strings = timeStrings[language as SupportedLanguage] || timeStrings.english;

  const minutesElapsed = differenceInMinutes(now, date);
  const hoursElapsed = differenceInHours(now, date);
  const daysElapsed = differenceInDays(now, date);
  const weeksElapsed = differenceInWeeks(now, date);
  const monthsElapsed = differenceInMonths(now, date);

  if (minutesElapsed < 60) {
    return `${minutesElapsed} ${minutesElapsed === 1 ? strings.minute : strings.minutes} ${strings.ago}`;
  } else if (hoursElapsed < 24) {
    return `${hoursElapsed} ${hoursElapsed === 1 ? strings.hour : strings.hours} ${strings.ago}`;
  } else if (daysElapsed < 7) {
    return `${daysElapsed} ${daysElapsed === 1 ? strings.day : strings.days} ${strings.ago}`;
  } else if (weeksElapsed < 4) {
    return `${weeksElapsed} ${weeksElapsed === 1 ? strings.week : strings.weeks} ${strings.ago}`;
  } else {
    return `${monthsElapsed} ${monthsElapsed === 1 ? strings.month : strings.months} ${strings.ago}`;
  }
}
