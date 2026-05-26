import Image from "next/image";
import Link from "next/link";
import AppSplashScreen from "@/public/app-images/splash-screen-2.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-12 lg:pt-20 pb-16 lg:pb-28">
        {/* Tiny dateline strip */}
        <div className="flex items-center justify-between mb-8 lg:mb-12 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-muted">
          <span>New Delhi · Estd. 2024</span>
          <span className="hidden sm:inline">India&apos;s First AI News Trust Layer</span>
          <span>Vol. I, № 01</span>
        </div>

        {/* Big nameplate rule */}
        <div className="hairline-ink mb-8 lg:mb-12" />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left side - headline */}
          <div className="lg:col-span-8">
            <div className="eyebrow mb-6 animate-fade-up" style={{ animationDelay: "0.05s" }}>
              ◆ The Trust Layer
            </div>
            <h1
              className="font-display font-light text-[11vw] md:text-[8vw] lg:text-[6.5rem] xl:text-[8rem] leading-[0.88] tracking-tightest text-balance animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              Read the news.
              <br />
              <em className="italic font-normal">See the source.</em>
              <br />
              <span className="text-accent">Decide for yourself.</span>
            </h1>

            <div
              className="mt-10 lg:mt-12 grid md:grid-cols-12 gap-6 lg:gap-10 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <div className="md:col-span-7">
                <p className="text-[17px] lg:text-[19px] leading-[1.55] text-ink-soft max-w-[58ch]">
                  UnbiaslyAI is India&apos;s first AI-powered news platform built for{" "}
                  <span className="font-medium">900+ million internet users</span> who
                  want fast information but no longer fully trust the feeds they use.
                  Every story gets a 60-word summary with the source in plain sight —
                  and our pipeline reads in the original Indian language wherever
                  possible, flagging loaded framing, missing attribution, and
                  source-less claims before they reach you.
                </p>
              </div>
              <div className="md:col-span-5 md:border-l md:border-rule md:pl-8">
                <div className="space-y-5 text-[14px]">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
                      What we don&apos;t do
                    </div>
                    <div className="text-ink-muted leading-relaxed">
                      Claim to determine the truth.
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
                      What we do
                    </div>
                    <div className="text-ink-muted leading-relaxed">
                      Show what was reported, who reported it, and how it was framed.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-10 lg:mt-12 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Link
                href="/live-news"
                className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 hover:bg-accent transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-paper transition-colors animate-pulse" />
                <span className="text-[14px] font-medium tracking-wide">
                  Read the live feed
                </span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#product"
                className="inline-flex items-center gap-2 px-6 py-4 border border-ink/20 hover:border-accent hover:text-accent transition-colors text-[14px] font-medium"
              >
                How it works
              </Link>
            </div>
          </div>

          {/* Right side - phone mockup with annotation */}
          <div className="lg:col-span-4 relative">
            <div
              className="relative animate-fade-up mx-auto max-w-[260px] lg:max-w-none"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Background shape */}
              <div className="absolute -inset-4 lg:-inset-6 bg-accent/5 -z-10" />
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent" />

              <Image
                src={AppSplashScreen}
                alt="UnbiaslyAI mobile app — news feed with source attribution"
                className="w-full h-auto"
                quality={100}
                priority
              />

              {/* Annotation */}
              <div className="absolute -bottom-6 -right-2 lg:-right-8 bg-ink text-paper px-3 py-2 max-w-[180px]">
                <div className="font-mono text-[9px] uppercase tracking-wider text-accent">
                  Live
                </div>
                <div className="text-[11px] leading-tight mt-0.5">
                  ~10,000 articles processed daily
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 lg:mt-32 border-t border-rule pt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-x-12">
            {[
              { num: "900M+", label: "Indian internet users we&apos;re built for" },
              { num: "10K/day", label: "Articles processed across HI / EN / BN" },
              { num: "60 words", label: "Length of every story summary" },
              { num: "4.5 ★", label: "Average rating, Android beta" },
            ].map((stat, i) => (
              <div
                key={i}
                className="animate-fade-up"
                style={{ animationDelay: `${0.6 + i * 0.08}s` }}
              >
                <div className="font-display text-4xl lg:text-5xl font-light tracking-tightest leading-none">
                  {stat.num}
                </div>
                <div
                  className="mt-3 text-[12px] lg:text-[13px] text-ink-muted leading-snug max-w-[18ch]"
                  dangerouslySetInnerHTML={{ __html: stat.label }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
