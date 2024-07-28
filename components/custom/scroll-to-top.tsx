"use client";
import Image from "next/image";
import GotoTopIcon from "@/public/goto-top.png";

export default function ScrollToTop() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Image
      src={GotoTopIcon}
      alt="Go to top"
      className="absolute right-6 lg:right-[134px] -top-4 lg:-top-7 w-8 lg:w-14 cursor-pointer"
      onClick={scrollToTop}
    />
  );
}
