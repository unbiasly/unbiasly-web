"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import UnbiaslyLogoBlack from "@/public/unbiasly-ai-logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flexBetween  max-container padding-container relative z-30 py-5 bg-black">
      <Link href="/">
        <Image src={UnbiaslyLogoBlack} alt="logo" width={140} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
              pathname === link.href ? "font-bold underline underline-offset-8" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <Image
        src="/menu1.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-40">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`py-6 text-2xl transition-all hover:font-bold  ${
                pathname === link.href ? "font-bold underline underline-offset-8" : ""
              }`}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
