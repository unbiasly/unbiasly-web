import Image from "next/image";
import Link from "next/link";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";

export default function FinalCTA() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="section-num mb-4">№ 08 — Join us</div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl font-light leading-[0.92] tracking-tightest text-balance">
              By choosing UnbiaslyAI,
              <br />
              you&apos;re joining{" "}
              <em className="italic font-normal text-accent">
                a movement.
              </em>
            </h2>
            <p className="mt-8 text-[16px] lg:text-[18px] leading-[1.6] text-ink-soft max-w-2xl">
              Toward a more informed, aware, and engaged society. Trust UnbiaslyAI
              to be your reliable source for news — and help us build a stronger,
              better-informed community.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="https://apps.apple.com/in/app/unbiasly/id6477892005"
                target="_blank"
                className="transition-transform hover:scale-[1.03]"
              >
                <Image
                  src={AppleStore}
                  alt="Download on the App Store"
                  width={170}
                  className="max-w-[170px]"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.unbiasly.app"
                target="_blank"
                className="transition-transform hover:scale-[1.03]"
              >
                <Image
                  src={GoogleStore}
                  alt="Get it on Google Play"
                  width={170}
                  className="max-w-[170px]"
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border border-ink/20 p-8 lg:p-10 bg-rule-soft/30">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                Or skip ahead
              </div>
              <h3 className="font-display text-3xl font-light leading-tight tracking-tight">
                Read what&apos;s happening in India,{" "}
                <em className="italic">right now.</em>
              </h3>
              <Link
                href="/live-news"
                className="group mt-7 inline-flex items-center gap-3 bg-ink text-paper px-5 py-3.5 hover:bg-accent transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-paper transition-colors animate-pulse" />
                <span className="text-[14px] font-medium">Open Live News</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <div className="mt-6 text-[12px] text-ink-muted leading-relaxed">
                Updated continuously across Hindi, English &amp; Bangla. Every story
                with source attribution.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
