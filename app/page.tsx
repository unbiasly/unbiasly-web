import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="md:px-41 px-6 text-xs lg:text-base mt-[58px] md:mt-[120px] mb-6 lg:mb-12">
      <div className="flex">
        <div className="text-xs leading-consistent lg:text-xl lg:leading-consistent flex-1">
          <Image
            src="/unbiasly-ai-icon.svg"
            alt="Unbiasly AI icon"
            height={80}
            width={80}
            className="max-w-10 lg:min-w-20"
          />
          <h1 className="text-sm lg:text-4xl text-black mt-2 lg:mt-5 leading-consistent">
            Unbiasly
          </h1>
          <p className="mt-3 lg:mt-6">
            India&apos;s first AI-powered news aggregator app that features only
            reliable content from authentic national and international sources.
            <Link href="/about-us" className="text-hyperlink underline">
              {" "}
              Learn more about us
            </Link>
          </p>

          <Image
            className="lg:hidden mt-7 mx-auto"
            src="/home-page-banner-iphone.png"
            alt="App Screenshot"
            width={180}
            height={362}
            quality={100}
          />
          <p className="mt-7 lg:mt-5">
            We engage in community-driven campaigns to raise awareness about the
            harmful impact of misinformation and fake news.
          </p>
          <p className="mt-4 lg:mt-5">
            We are not just an app but a committed community service, promoting
            a culture of accurate information consumption for everyone.
          </p>
          <p className="mt-4 lg:mt-[6.63rem]">
            We are a small team based in New Delhi.{" "}
            <Link href="#" className="text-hyperlink underline">
              Come work with us
            </Link>
          </p>
        </div>
        <div className="hidden lg:block lg:ml-12 min-w-[263px]">
          <Image
            src="/home-page-banner-iphone.png"
            alt="App Screenshot"
            height={530}
            width={263}
            quality={100}
          />
        </div>
      </div>
    </main>
  );
}
