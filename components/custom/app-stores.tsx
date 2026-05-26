import Image from "next/image";
import Link from "next/link";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";

export default function AppStores() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16 lg:py-24 text-center">
        <div className="eyebrow mb-5">Download</div>
        <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-[0.95] text-balance">
          Read with the trust layer{" "}
          <em className="italic font-normal text-accent">always on.</em>
        </h3>
        <p className="mt-5 text-ink-muted max-w-xl mx-auto text-[15px] leading-relaxed">
          Free. Indic-first. Works on Android and iOS. Get the UnbiaslyAI app and
          read 10,000+ stories a day with source attribution and framing analysis.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="https://apps.apple.com/in/app/unbiasly/id6477892005"
            target="_blank"
            className="transition-transform hover:scale-[1.03]"
          >
            <Image
              src={AppleStore}
              alt="Download on the App Store"
              width={180}
              className="max-w-[180px]"
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
              width={180}
              className="max-w-[180px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
