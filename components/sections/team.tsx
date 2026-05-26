import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

import RobinImg from "@/public/people/robin-singh.png";
import KritiImg from "@/public/people/kriti-agarwal.png";
import UmeshImg from "@/public/people/umesh-sharma.png";
import AshwaniImg from "@/public/people/ashwani-jp-singh.png";
import UdayImg from "@/public/people/uday-mahurkar.png";
import AnilImg from "@/public/people/anil-rao.png";
import RiyankaImg from "@/public/people/riyanka-roy.png";

type Founder = {
  num: string;
  photo: StaticImageData | null;
  name: string;
  role: string;
  pedigree: string;
  bio: string;
  contactUrl: string;
};

const founders: Founder[] = [
  {
    num: "01",
    photo: UmeshImg,
    name: "Umesh Sharma",
    role: "Co-Founder & CEO",
    pedigree: "Carnegie Mellon University",
    bio: "Built the original AI pipeline. Owns model architecture, the neutralisation evaluation system, and the proprietary Indic SLM roadmap.",
    contactUrl: "https://www.linkedin.com/in/r-umeshsharma/",
  },
  {
    num: "02",
    photo: AshwaniImg,
    name: "Ashwani JP Singh",
    role: "Co-Founder & COO",
    pedigree: "16 years, Government of India",
    bio: "Owns strategy, growth, institutional distribution, partnerships, and editorial operations. Founder of Green Governance India and People's Parliament School.",
    contactUrl: "https://x.com/ashwanijpsingh",
  },
  {
    num: "03",
    photo: null,
    name: "Saharsh Sikaria",
    role: "Chief Technology Officer",
    pedigree: "IIT Delhi",
    bio: "Tech Lead. Owns the application stack, infrastructure, ingestion systems, and ML serving. Works directly with Umesh on the AI integration layer.",
    contactUrl: "https://www.linkedin.com/in/saharshsikaria",
  },
  {
    num: "04",
    photo: KritiImg,
    name: "Kriti Agarwal",
    role: "Co-Founder & Chief Content Officer",
    pedigree: "LSE — University of London",
    bio: "Owns content strategy, editorial standards, and the verified-creator program. Sets the bar for what gets published — and how.",
    contactUrl: "https://x.com/KritiAgarwal29",
  },
  {
    num: "05",
    photo: RobinImg,
    name: "Robin Singh",
    role: "Co-Founder & Chief Business Officer",
    pedigree: "University of Delhi",
    bio: "Owns revenue, partnerships, and go-to-market. Leads B2B verification pilots, institutional channels, and the advertising/subscription roadmap.",
    contactUrl: "https://x.com/robinjpsingh",
  },
];

type Advisor = {
  photo: StaticImageData;
  name: string;
  role: string;
  affiliation: string;
  contactUrl: string;
};

const advisors: Advisor[] = [
  {
    photo: UdayImg,
    name: "Uday Mahurkar",
    role: "Former Information Commissioner, GoI",
    affiliation: "Former Deputy Editor, India Today Group",
    contactUrl: "https://www.linkedin.com/in/uday-mahurkar-391830219/",
  },
  {
    photo: AnilImg,
    name: "Anil Rao, IPS (Retd.)",
    role: "Former CID Chief, Haryana",
    affiliation: "Vice President, DAV College Managing Committee",
    contactUrl: "https://www.linkedin.com/in/anil-rao-846220220/",
  },
  {
    photo: RiyankaImg,
    name: "Riyanka Choudhury",
    role: "AI Governance — MIT, IBM, Meta",
    affiliation: "Fellow, CodeX — Stanford Center for Legal Informatics",
    contactUrl: "https://www.linkedin.com/in/riyanka-roy-choudhury/",
  },
];

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink text-paper">
      <div className="font-display text-4xl lg:text-5xl font-light tracking-tight">
        {initials}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <>
      {/* Founders */}
      <section id="team" className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-20">
            <div className="lg:col-span-7">
              <div className="section-num mb-4">№ 06 — The Founders</div>
              <h2 className="font-display text-5xl lg:text-7xl font-light leading-[0.95] tracking-tightest text-balance">
                Built by people who
                <br />
                <em className="italic font-normal">work in person, in Delhi.</em>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
              <p className="text-[15px] leading-[1.65] text-ink-muted">
                Two ends of the same problem. Umesh saw it as an AI and language
                problem at Carnegie Mellon. Ashwani saw it on the ground across
                millions of citizens. Eighteen months of building together, always
                in person, in New Delhi.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
            {founders.map((f) => (
              <Link
                key={f.name}
                href={f.contactUrl}
                target="_blank"
                rel="noreferrer"
                className="group bg-paper p-6 lg:p-8 hover:bg-rule-soft/40 transition-colors"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-accent pt-2">
                    {f.num}
                  </span>
                  <div className="relative w-24 h-24 lg:w-28 lg:h-28 overflow-hidden bg-rule-soft shrink-0">
                    {f.photo ? (
                      <Image
                        src={f.photo}
                        alt={f.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        sizes="112px"
                      />
                    ) : (
                      <Initials name={f.name} />
                    )}
                  </div>
                </div>
                <h3 className="font-display text-2xl lg:text-[26px] font-medium leading-tight tracking-tight">
                  {f.name}
                </h3>
                <div className="mt-1 text-[12px] font-mono tracking-wider uppercase text-accent">
                  {f.role}
                </div>
                <div className="mt-1 text-[12px] text-ink-muted italic">
                  {f.pedigree}
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-ink-muted">
                  {f.bio}
                </p>
                <div className="mt-5 text-[12px] font-mono tracking-wider uppercase text-ink-muted group-hover:text-accent transition-colors flex items-center gap-2">
                  <span>Profile</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section id="advisors" className="border-b border-rule bg-rule-soft/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14 lg:mb-20">
            <div className="lg:col-span-7">
              <div className="section-num mb-4">№ 07 — Honorary Advisors</div>
              <h2 className="font-display text-4xl lg:text-6xl font-light leading-[0.95] tracking-tightest text-balance">
                The people behind
                <br />
                <em className="italic font-normal">the people building this.</em>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-rule border border-rule">
            {advisors.map((a) => (
              <Link
                key={a.name}
                href={a.contactUrl}
                target="_blank"
                rel="noreferrer"
                className="group bg-paper p-7 lg:p-10 hover:bg-rule-soft/40 transition-colors"
              >
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 overflow-hidden bg-rule-soft mb-6">
                  <Image
                    src={a.photo}
                    alt={a.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="96px"
                  />
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-medium leading-tight">
                  {a.name}
                </h3>
                <div className="mt-2 text-[13px] text-ink-soft font-medium">
                  {a.role}
                </div>
                <div className="mt-1 text-[13px] text-ink-muted">
                  {a.affiliation}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
