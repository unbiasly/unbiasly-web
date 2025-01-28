
import { FOOTER } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SubscribeForm from "./subscribe";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] py-9 ">
      <div className="padding-container max-container w-full flex flex-col  gap-6 ">
        <div className="flex flex-col sm:flex-row justify-evenly items-start text-center md:text-start  w-full gap-10 ">
          {/* Left Section */}
          <div className="flex flex-col gap-6 md:items-start items-center w-full md:w-1/2">
            <Link href="/">
              <Image src="/unbiasly-ai-logo.png" alt="UnbiaslyAI logo" width={140} height={29} />
            </Link>
            <p className="text-white text-base md:text-xl">
              {FOOTER?.SUBSCRIBE}
            </p>
            <SubscribeForm />
            <div className="text-white text-sm">
              <Link href="/privacy-policy" className="hover:underline">
                {FOOTER?.PRIVACY_POLICY}
              </Link>{" "}
              |{" "}
              <Link href="/terms-and-conditions" className="hover:underline">
                {FOOTER?.TERMS_CONDITION}
              </Link>
              <p className="pt-2">
                © {new Date().getFullYear()}{FOOTER?.COMPANY_NAME}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:items-start items-center w-full md:w-1/2">
            <div>
              <p className="text-xl text-white font-bold">{FOOTER?.CHAT_WITH_US}</p>
              <Link
                href={`mailto:${FOOTER?.CONTACT_US_EMAIL}`}
                className="text-white text-sm underline hover:no-underline"
              >
                {FOOTER?.CONTACT_US_EMAIL}
              </Link>
            </div>

            <div className=''>
              <p className="text-xl text-white font-bold "></p>
              <p className="text-white text-sm">
                {FOOTER?.ADDRESS}
              </p>
            </div>

            <div className="flex gap-4">
              {FOOTER?.SOCIALS?.links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={link.src} alt={link.href} width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;