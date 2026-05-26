import Image from "next/image";
import MissionImg from "@/public/mission.png";
import VisionImg from "@/public/vision.png";
import CommunityImg from "@/public/community.png";
import LiteracyImg from "@/public/literacy.png";
import InformationImg from "@/public/information.png";

const blocks = [
  {
    img: VisionImg,
    eyebrow: "Vision",
    title: "An informed society.",
    body: "To empower individuals with reliable, accurate news — fostering informed citizens and rebuilding trust in the media.",
  },
  {
    img: MissionImg,
    eyebrow: "Mission",
    title: "Trustworthy news, delivered.",
    body: "Combat misinformation through source verification, concise summaries, and media literacy. Ensure everyone has access to accurate information.",
  },
  {
    img: CommunityImg,
    eyebrow: "Community",
    title: "More than an app.",
    body: "Beyond a news app, UnbiaslyAI runs community-driven campaigns about the harmful impact of misinformation and fake news.",
  },
  {
    img: LiteracyImg,
    eyebrow: "Media Literacy",
    title: "Critical reading, at scale.",
    body: "We help users develop the skills to critically evaluate the information they encounter — and make informed decisions.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="lg:col-span-6">
            <div className="section-num mb-4">№ 05 — Why we exist</div>
            <h2 className="font-display text-5xl lg:text-7xl font-light leading-[0.95] tracking-tightest text-balance">
              The fourth pillar
              <br />
              <em className="italic font-normal">deserves better.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
            <p className="text-[16px] lg:text-[18px] leading-[1.6] text-ink-soft">
              India has 900M+ internet users, 22 official languages, and 1.5 lakh+
              registered newspapers and periodicals. People consume news every day —
              and often don&apos;t know the source or reliability of what they&apos;re
              reading. We&apos;re fixing the trust layer underneath.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule">
          {blocks.map((b, i) => (
            <div key={i} className="bg-paper p-7 lg:p-12 flex gap-6 lg:gap-8 items-start">
              <div className="relative w-16 h-16 lg:w-24 lg:h-24 shrink-0 bg-rule-soft">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-accent">
                  {b.eyebrow}
                </div>
                <h3 className="mt-2 font-display text-2xl lg:text-3xl font-medium tracking-tight leading-tight">
                  {b.title}
                </h3>
                <p className="mt-3 text-[14px] lg:text-[15px] leading-relaxed text-ink-muted">
                  {b.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
