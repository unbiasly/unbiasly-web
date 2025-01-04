"use client";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import HamburgerIcon from "@/public/hamburger.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import UnbiaslyLogoBlack from "@/public/logos/unbiasly-logo-black.png";

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-10 flex h-10 md:h-18 w-full items-center justify-between bg-[#242424] md:px-41 px-6">
      <Link href="/" className="flex items-center gap-2" prefetch>
        <div className="relative w-[70px] h-[18px] md:w-36 md:h-[2.5rem]">
          <Image
            src={UnbiaslyLogoBlack}
            alt="UnbiaslyAI logo"
            fill
            sizes="(min-width: 768px) w-[70px], w-36"
            quality={100}
          />
        </div>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <button aria-label="sidebar menu icon">
            <HamburgerIcon
              color="white"
              className="flex md:hidden hover:cursor-pointer"
            />
          </button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-y-5 pt-5 text-xs">
            <SheetClose asChild>
              <Link
                href="/"
                className={cn(
                  "flex w-full items-center justify-between font-medium",
                  pathname === "/" ? "underline" : ""
                )}
                prefetch
              >
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/about-us"
                className={cn(
                  "flex w-full items-center justify-between font-medium",
                  pathname === "/about-us" ? "underline" : ""
                )}
                prefetch
              >
                About Us
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/blog"
                className={cn(
                  "flex w-full items-center justify-between font-medium",
                  pathname.startsWith("/blog") ? "underline" : ""
                )}
                prefetch
              >
                Blog
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/team"
                className={cn(
                  "flex w-full items-center justify-between font-medium",
                  pathname === "/team" ? "underline" : ""
                )}
                prefetch
              >
                Team
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/live-news"
                className={cn(
                  "flex w-full items-center justify-between font-medium",
                  pathname === "/live-news" ? "underline" : ""
                )}
                prefetch
              >
                Live News!
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/top-news"
                className={cn(
                  "flex w-full items-center justify-between font-medium",
                  pathname === "/top-news" ? "underline" : ""
                )}
                prefetch
              >
                Top News!
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-12 text-white">
          <li>
            <Link
              href="/"
              className={cn(pathname === "/" ? "underline" : "")}
              prefetch
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className={cn(pathname === "/about-us" ? "underline" : "")}
              prefetch
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={cn(
                "flex w-full items-center justify-between font-medium",
                pathname.startsWith("/blog") ? "underline" : ""
              )}
              prefetch
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className={cn(
                "flex w-full items-center justify-between font-medium",
                pathname === "/team" ? "underline" : ""
              )}
              prefetch
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/live-news"
              className={cn(
                "flex w-full items-center justify-between font-medium",
                pathname === "/live-news" ? "underline" : ""
              )}
              prefetch
            >
              Live News!
            </Link>
          </li>
          {/* <li>
            <Link
                href="/top-news"
                className={cn(
                "flex w-full items-center justify-between font-medium",
                pathname === "/top-news" ? "underline" : ""
                )}
                prefetch>
                
                Top News!
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
