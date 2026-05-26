"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import UnbiaslyLogo from "@/public/unbiasly-ai-logo.png";

const navItems = [
  { href: "/", label: "Home", num: "01" },
  { href: "/#product", label: "Product", num: "02" },
  { href: "/#features", label: "Features", num: "03" },
  { href: "/#team", label: "Team", num: "04" },
  { href: "/live-news", label: "Live News", num: "05" },
];

function CurrentTime() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = () => {
      const now = new Date();
      const d = now.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
      });
      const t = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      setTime(`${d.toUpperCase()} · ${t} IST`);
    };
    fmt();
    const id = setInterval(fmt, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time || "NEW DELHI"}</span>;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top ticker bar */}
      <div className="relative z-50 bg-ink text-paper border-b border-ink">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-7 flex items-center justify-between text-[10px] font-mono tracking-[0.18em] uppercase">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Live · 10,000 stories / day</span>
            </span>
            <span className="sm:hidden inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Live</span>
            </span>
          </div>
          <div className="text-paper/70 hidden md:block">
            <CurrentTime />
          </div>
          <div className="text-paper/70">
            <span className="hidden sm:inline">Vol. I — </span>
            <span>New Delhi Edition</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-40 bg-paper/95 backdrop-blur-md transition-all duration-300",
          scrolled ? "border-b border-rule" : "border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-[120px] h-[28px] lg:w-[150px] lg:h-[36px]">
                <Image
                  src={UnbiaslyLogo}
                  alt="UnbiaslyAI"
                  fill
                  sizes="(min-width: 1024px) 150px, 120px"
                  className="object-contain object-left brightness-0"
                  priority
                  quality={100}
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative text-[13px] font-medium tracking-wide transition-colors",
                    isActive(item.href)
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  )}
                >
                  <span className="font-mono text-[10px] text-ink-muted mr-1.5 group-hover:text-accent transition-colors">
                    {item.num}
                  </span>
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-accent" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/live-news"
                className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 bg-ink text-paper rounded-full hover:bg-accent transition-colors group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-paper transition-colors animate-pulse" />
                Read Live News
              </Link>
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden flex items-center justify-center w-10 h-10 -mr-2"
                  aria-label="Open menu"
                >
                  <div className="flex flex-col gap-[5px]">
                    <span className="block w-5 h-px bg-ink" />
                    <span className="block w-5 h-px bg-ink" />
                    <span className="block w-3 h-px bg-ink ml-auto" />
                  </div>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-paper border-l border-rule w-[85vw] sm:w-[400px]">
                <div className="flex flex-col h-full pt-8">
                  <div className="eyebrow mb-8">Menu</div>
                  <nav className="flex flex-col gap-1">
                    {navItems.map((item, i) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="group flex items-baseline gap-4 py-4 border-b border-rule"
                        >
                          <span className="font-mono text-[11px] text-ink-muted">
                            {item.num}
                          </span>
                          <span className="font-display text-3xl font-medium text-ink group-hover:text-accent transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto pb-8">
                    <SheetClose asChild>
                      <Link
                        href="/live-news"
                        className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 bg-ink text-paper rounded-full"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Read Live News
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
