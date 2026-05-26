const upcoming = [
  {
    label: "AI Audio",
    title: "Verified stories, listenable.",
    body: "Every story available as AI-generated audio, across Indian languages. For commutes, kitchens, and accessibility.",
    eta: "12 months",
  },
  {
    label: "AI Anchor Video",
    title: "Short-form, source-attributed.",
    body: "AI-anchor video for verified news. Watch the same trusted summary you&apos;d read — in 30 seconds.",
    eta: "12 months",
  },
  {
    label: "Indic News SLM",
    title: "300M–500M parameters, ours.",
    body: "A proprietary Indic news small language model for source-attributed summarisation and framing detection.",
    eta: "Roadmap",
  },
  {
    label: "Real-time Pipeline",
    title: "Sub-5-minute latency.",
    body: "From publisher upload to verified feed. Down from 15–30 minutes today.",
    eta: "Roadmap",
  },
  {
    label: "Sentiment Analysis",
    title: "How a story feels, measured.",
    body: "Loaded language and emotional framing surfaced alongside the story. Make sentiment visible.",
    eta: "Beta",
  },
  {
    label: "WhatsApp Bot",
    title: "Forward, verify, forward.",
    body: "Send any WhatsApp forward to our bot. Get source verification and framing analysis in seconds.",
    eta: "Roadmap",
  },
];

export default function Roadmap() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="section-num mb-4">№ 04½ — What&apos;s next</div>
            <h2 className="font-display text-5xl lg:text-7xl font-light leading-[0.95] tracking-tightest text-balance">
              Trust scales{" "}
              <em className="italic font-normal">in formats.</em>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[15px] leading-relaxed text-ink-muted">
              Text was the start. The next 12 months take verified content into
              audio, video, and conversational interfaces — without losing
              provenance.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {upcoming.map((u, i) => (
            <article
              key={i}
              className="bg-paper p-7 lg:p-9 flex flex-col group hover:bg-rule-soft/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
                  {u.label}
                </span>
                <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-muted border border-rule px-2 py-1">
                  {u.eta}
                </span>
              </div>
              <h3 className="font-display text-[22px] lg:text-[26px] font-medium leading-[1.15] tracking-tight">
                {u.title}
              </h3>
              <p
                className="mt-3 text-[14px] leading-relaxed text-ink-muted flex-1"
                dangerouslySetInnerHTML={{ __html: u.body }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
