import Image from "next/image";
import Link from "next/link";
import SubscribeForm from "./subscribe";
import MailIcon from "@/public/mail.svg";
import LocationIcon from "@/public/location.svg";
import ScrollToTop from "./scroll-to-top";

export default function Footer() {
  return (
    <footer className="bg-[#242424] text-white md:px-41 px-6 py-18 text-xs lg:text-base mt-auto relative">
      <ScrollToTop />
      <div className="relative w-32 h-8 md:w-[136px] md:h-[34px]">
        <Image
          src="/unbiasly-ai-logo.png"
          alt="UnbiaslyAI logo"
          fill
          sizes="(min-width: 768px) w-32, w-[136px]"
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row mt-7 lg:mt-8 leading-consistent">
        <div className="flex-1 mt-9 lg:mt-0">
          <div>Get the latest Unbiasly news</div>
          <SubscribeForm />
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <MailIcon color="bg-white" />
            <Link href="mailto:info@unbiasly.ai" className="ml-3">
              contact@unbiasly.ai
            </Link>
          </div>
          <div className="flex items-center mt-3 lg:mt-4">
            <LocationIcon color="bg-white" />
            <div className="ml-3">
              Basement C11, Green Park Extension, New Delhi-110016
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 lg:mt-7 flex flex-col-reverse lg:flex-row leading-consistent">
        <div className="flex-1 max-lg:mt-9 text-center lg:text-left">
          <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
          <div className="mt-2 lg:mt-6">
            @2024, Triverge Insight Private Limited
          </div>
        </div>
        <div className="flex flex-1 lg:gap-5 box-border max-lg:justify-between">
          <Link
            href="https://www.linkedin.com/company/unbiasly-ai"
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              alt="UnbiaslyAI LinkedIn page"
              width={32}
              height={32}
              className="lg:ml-11 min-w-6 lg:min-w-8"
            />
          </Link>
          <Link href="https://www.instagram.com/unbiasly.ai" target="_blank">
            <Image
              src="/instagram.svg"
              alt="UnbiaslyAI Instagram page"
              width={32}
              height={32}
              className="min-w-6 lg:min-w-8"
            />
          </Link>
          <Link href="https://medium.com/@unbiaslyAI" target="_blank">
            <Image
              src="/medium.svg"
              alt="UnbiaslyAI Medium page"
              width={32}
              height={32}
              className="min-w-6 lg:min-w-8"
            />
          </Link>
          <Link href="https://www.youtube.com/@unbiaslyai" target="_blank">
            <Image
              src="/youtube.svg"
              alt="UnbiaslyAI Youtube page"
              width={32}
              height={32}
              className="min-w-6 lg:min-w-8"
            />
          </Link>
          <Link href="https://www.facebook.com/UnbiaslyAI" target="_blank">
            <Image
              src="/facebook.svg"
              alt="UnbiaslyAI Facebook page"
              width={32}
              height={32}
              className="min-w-6 lg:min-w-8"
            />
          </Link>
          <Link href="https://x.com/unbiaslyai" target="_blank">
            <Image
              src="/twitter.svg"
              alt="UnbiaslyAI Twitter page"
              width={32}
              height={32}
              className="min-w-6 lg:min-w-8"
            />
          </Link>
          <Link href="https://www.quora.com/profile/UnbiaslyAI" target="_blank">
            <Image
              src="/quora.svg"
              alt="UnbiaslyAI Quora page"
              width={32}
              height={32}
              className="min-w-6 lg:min-w-8"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
