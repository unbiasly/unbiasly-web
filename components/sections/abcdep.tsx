const categories = [
  {
    letter: "A",
    name: "Astrology",
    note: "Daily forecasts, festival timing, life-event guidance.",
  },
  {
    letter: "B",
    name: "Bollywood",
    note: "Film, music, celebrity culture, OTT releases.",
  },
  {
    letter: "C",
    name: "Cricket",
    note: "Live scores, match reports, IPL coverage, player news.",
  },
  {
    letter: "D",
    name: "Devotion",
    note: "Religious updates, temple events, sacred calendars.",
  },
  {
    letter: "E",
    name: "Economics",
    note: "Markets, policy, business, personal finance.",
  },
  {
    letter: "P",
    name: "Politics",
    note: "National, state, and constituency-level coverage.",
  },
];

export default function ABCDEP() {
  return (
    <section id="abcdep" className="border-b border-rule bg-ink text-paper relative overflow-hidden">
      {/* Decorative oversized letters */}
      <div
        className="absolute inset-0 font-display text-[40vw] lg:text-[28vw] leading-none text-paper/[0.025] select-none whitespace-nowrap tracking-tightest pointer-events-none"
        aria-hidden
      >
        ABCDEP
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14 lg:mb-20">
          <div className="lg:col-span-6">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent mb-4">
              № 04 — The Wedge
            </div>
            <h2 className="font-display text-5xl lg:text-7xl font-light leading-[0.95] tracking-tightest text-balance">
              Indian attention
              <br />
              doesn&apos;t live in
              <br />
              <em className="italic font-normal text-accent">&ldquo;news.&rdquo;</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
            <p className="text-[16px] lg:text-[18px] leading-[1.6] text-paper/70">
              It lives in six high-frequency categories that existing news apps treat
              as side categories. We treat them as the main wedge — because this is
              where Indians spend time every day, and where framing, rumors, and
              misinformation spread fastest.
            </p>
          </div>
        </div>

        {/* The six categories */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-paper/10 border border-paper/10">
          {categories.map((c) => (
            <div
              key={c.letter}
              className="bg-ink p-6 lg:p-8 group hover:bg-accent transition-colors duration-500 cursor-default"
            >
              <div className="font-display text-7xl lg:text-8xl font-light leading-none text-paper group-hover:text-paper transition-colors">
                {c.letter}
              </div>
              <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 group-hover:text-paper/70 transition-colors">
                {c.name}
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-paper/60 group-hover:text-paper/90 transition-colors">
                {c.note}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-16 lg:mt-24 max-w-4xl">
          <div className="font-display text-3xl lg:text-5xl font-light italic leading-[1.15] text-paper/90 text-balance">
            &ldquo;Native Indic neutralisation is a moat, not a feature. Loaded language
            in Hindi or Bangla can&apos;t be reliably detected by translating to
            English first — bias lives in idioms, implication, honorifics, and local
            framing.&rdquo;
          </div>
          <div className="mt-6 font-mono text-[11px] tracking-[0.2em] uppercase text-accent">
            — UnbiaslyAI Engineering
          </div>
        </div>
      </div>
    </section>
  );
}
