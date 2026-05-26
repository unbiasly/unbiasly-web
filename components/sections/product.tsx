import Image from "next/image";
import GroupScreen from "@/public/app-images/group-screen4.png";

const steps = [
  {
    n: "01",
    title: "Ingest",
    body:
      "We pull stories from authentic Indian and international sources — ~10,000 articles a day across Hindi, English, and Bangla.",
  },
  {
    n: "02",
    title: "Analyse in language",
    body:
      "Our pipeline reads in the original Indic language wherever possible. We don&apos;t translate to English first — bias lives in idioms, honorifics, and local framing.",
  },
  {
    n: "03",
    title: "Attribute",
    body:
      "Every claim is tied back to its source. Loaded language, one-sided framing, missing attribution, and unsupported claims are flagged before content reaches the feed.",
  },
  {
    n: "04",
    title: "Summarise",
    body:
      "Each story is condensed to a 60-word summary with the source visible. Read it, click through, decide what to believe.",
  },
];

export default function Product() {
  return (
    <section id="product" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-32">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="lg:col-span-5">
            <div className="section-num mb-4">№ 02 — Product</div>
            <h2 className="font-display text-5xl lg:text-7xl font-light leading-[0.95] tracking-tightest text-balance">
              The pipeline
              <br />
              <em className="italic font-normal text-accent">behind every story.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
            <p className="text-[17px] leading-[1.6] text-ink-soft">
              Most misinformation in India doesn&apos;t start as completely fake news.
              It starts as selective framing, emotional phrasing, missing context, or
              source-less forwarding. That&apos;s the layer UnbiaslyAI is built to
              solve — four stages of work between a publisher hitting &quot;publish&quot;
              and a reader seeing the story.
            </p>
          </div>
        </div>

        {/* Steps grid + image */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-px bg-rule">
              {steps.map((step) => (
                <article
                  key={step.n}
                  className="bg-paper p-7 lg:p-9 hover:bg-rule-soft/50 transition-colors group"
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
                      {step.n}
                    </span>
                    <span className="font-display text-2xl lg:text-3xl font-medium tracking-tight">
                      {step.title}
                    </span>
                  </div>
                  <p
                    className="text-[14px] lg:text-[15px] leading-relaxed text-ink-muted"
                    dangerouslySetInnerHTML={{ __html: step.body }}
                  />
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-accent -z-10" />
              <Image
                src={GroupScreen}
                alt="UnbiaslyAI on multiple devices"
                className="w-full h-auto bg-rule-soft"
                quality={100}
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-px bg-rule border border-rule">
              <div className="bg-paper p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                  Latency
                </div>
                <div className="font-display text-2xl font-light mt-1">15–30 min</div>
                <div className="text-[11px] text-ink-muted mt-1">publisher → feed</div>
              </div>
              <div className="bg-paper p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                  Crash-free
                </div>
                <div className="font-display text-2xl font-light mt-1">99.5%</div>
                <div className="text-[11px] text-ink-muted mt-1">across Android &amp; iOS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
