const features = [
  {
    title: "60-word summaries",
    body:
      "Every story condensed to a single, scannable paragraph with the source visible. Read more in a minute than you would in an hour of doom-scrolling.",
    icon: "60",
  },
  {
    title: "Source attribution",
    body:
      "Every article links back to a verified publisher. We surface who reported it, when, and how — never anonymous, never source-less.",
    icon: "✓",
  },
  {
    title: "Framing analysis",
    body:
      "Loaded language, one-sided framing, and missing attribution flagged in real time. The bias is visible — you can&apos;t address what you can&apos;t see.",
    icon: "↔",
  },
  {
    title: "Indic-first AI",
    body:
      "Hindi, Bangla, English — and 19 more on the roadmap. Built on AI4Bharat embeddings with a proprietary Indic news SLM in development.",
    icon: "अ",
  },
  {
    title: "Recommendation feed",
    body:
      "Learns what you read, skip, and return to. Recommends source-attributed content in your language and format — never publisher-first.",
    icon: "◯",
  },
  {
    title: "AI audio &amp; video",
    body:
      "Coming this year: every verified story available as AI-generated audio and AI-anchor short-form video, across Indian languages.",
    icon: "▶",
    upcoming: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="border-b border-rule bg-rule-soft/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-32">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="section-num mb-4">№ 03 — Features</div>
          <h2 className="font-display text-5xl lg:text-7xl font-light leading-[0.95] tracking-tightest text-balance">
            Six things that make
            <br />
            <em className="italic font-normal">a feed trustworthy.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {features.map((f) => (
            <article
              key={f.title}
              className="bg-paper p-7 lg:p-10 relative group hover:bg-paper transition-all"
            >
              {f.upcoming && (
                <div className="absolute top-5 right-5 font-mono text-[9px] tracking-[0.2em] uppercase text-accent border border-accent px-2 py-0.5">
                  Coming
                </div>
              )}
              <div className="font-display text-5xl lg:text-6xl font-light text-accent leading-none mb-6 group-hover:rotate-[-3deg] transition-transform origin-bottom-left">
                {f.icon}
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-medium tracking-tight leading-tight">
                {f.title}
              </h3>
              <p
                className="mt-3 text-[14px] lg:text-[15px] leading-relaxed text-ink-muted"
                dangerouslySetInnerHTML={{ __html: f.body }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
