import Link from "next/link";
import Image from "next/image";
import SubscribeForm from "./subscribe";
import UnbiaslyLogo from "@/public/unbiasly-ai-logo.png";

const socials = [
  { href: "https://www.linkedin.com/company/unbiasly-ai", label: "LinkedIn", short: "Li" },
  { href: "https://www.instagram.com/unbiasly.ai", label: "Instagram", short: "Ig" },
  { href: "https://x.com/unbiaslyai", label: "X / Twitter", short: "X" },
  { href: "https://www.youtube.com/@unbiaslyai", label: "YouTube", short: "Yt" },
  { href: "https://medium.com/@unbiaslyAI", label: "Medium", short: "Md" },
  { href: "https://www.facebook.com/UnbiaslyAI", label: "Facebook", short: "Fb" },
  { href: "https://www.quora.com/profile/UnbiaslyAI", label: "Quora", short: "Qa" },
];

const links = {
  product: [
    { href: "/live-news", label: "Live News" },
    { href: "/#product", label: "How it works" },
    { href: "/#features", label: "Features" },
    { href: "/#abcdep", label: "ABCDEP wedge" },
  ],
  company: [
    { href: "/#mission", label: "Mission" },
    { href: "/#team", label: "Team" },
    { href: "/#advisors", label: "Advisors" },
    { href: "https://www.linkedin.com/company/unbiasly-ai/jobs/", label: "Careers", external: true },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-10 bg-ink text-paper">
      {/* Top hairline */}
      <div className="border-b border-paper/10" />

      {/* Subscribe block */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-16 lg:pt-24 pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent mb-4">
              The Bulletin
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-balance">
              Get the briefing.
              <br />
              <em className="font-normal italic text-paper/70">
                Source-attributed, every week.
              </em>
            </h2>
            <p className="mt-6 text-paper/60 max-w-xl text-[15px] leading-relaxed">
              A weekly dispatch from New Delhi — what India read, what was framed
              honestly, and what wasn&apos;t. Free. No spam. Unsubscribe in one click.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <SubscribeForm variant="dark" />
            <div className="mt-6 flex items-center gap-3 text-[12px] text-paper/50">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Trusted by readers across 22+ Indian languages.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10" />

      {/* Link columns */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block">
              <div className="relative w-[140px] h-[34px]">
                <Image
                  src={UnbiaslyLogo}
                  alt="UnbiaslyAI"
                  fill
                  className="object-contain object-left invert"
                  quality={100}
                />
              </div>
            </Link>
            <p className="mt-5 text-[14px] leading-relaxed text-paper/60 max-w-xs">
              India&apos;s trust layer for news and content. Verified sources, native
              Indic-language framing analysis, 60-word clarity.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://apps.apple.com/in/app/unbiasly/id6477892005"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-mono uppercase tracking-wider px-3 py-2 border border-paper/20 hover:border-accent hover:text-accent transition-colors"
              >
                iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.unbiasly.app"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-mono uppercase tracking-wider px-3 py-2 border border-paper/20 hover:border-accent hover:text-accent transition-colors"
              >
                Android
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/40 mb-5">
              Product
            </div>
            <ul className="space-y-3">
              {links.product.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14px] text-paper/80 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/40 mb-5">
              Company
            </div>
            <ul className="space-y-3">
              {links.company.map((l) => (
                <li key={l.href}>
                  {("external" in l && l.external) ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[14px] text-paper/80 hover:text-accent transition-colors"
                    >
                      {l.label} ↗
                    </a>
                  ) : (
                    <Link href={l.href} className="text-[14px] text-paper/80 hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/40 mb-5">
              Contact
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@unbiasly.ai"
                  className="text-[14px] text-paper/80 hover:text-accent transition-colors"
                >
                  contact@unbiasly.ai
                </a>
              </li>
              <li className="text-[14px] text-paper/60 leading-relaxed">
                Basement C11,
                <br /> Green Park Extension,
                <br /> New Delhi — 110016
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Huge nameplate */}
      <div className="border-t border-paper/10 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-12 lg:py-16">
          <div className="font-display font-light text-[18vw] lg:text-[14vw] leading-[0.8] tracking-tightest text-paper/[0.06] select-none whitespace-nowrap -ml-2">
            Unbiasly<em className="italic">AI</em>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="text-[12px] text-paper/50 font-mono">
            © 2025 Triverge Insight Private Limited ·{" "}
            {links.legal.map((l, i) => (
              <span key={l.href}>
                <Link href={l.href} className="hover:text-accent transition-colors">
                  {l.label}
                </Link>
                {i < links.legal.length - 1 && <span> · </span>}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center text-[10px] font-mono tracking-wider border border-paper/15 hover:border-accent hover:text-accent hover:bg-paper/5 transition-all uppercase"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
