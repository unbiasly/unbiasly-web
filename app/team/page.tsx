'use client'
import TeamMemberCarousel from "@/components/custom/TeamMemberCarousel"
import { TEAM_PAGE } from "@/lib/constants/team"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect } from 'react'

const Page = () => {
    // window.onload = function() {
    //     window.scrollTo(0, 0); // Scroll to the top (0, 0) coordinates
    // };
  return (
    <div className='bg-black w-full h-full py-8 '>
      <div className="padding-container max-container w-full flex flex-col justify-center ">
        <div className="flex flex-col items-center text-white py-10">
          <h1 className="text-5xl font-bold text-center mb-8 py-2 md:w-3/4">{TEAM_PAGE?.HEADLINE }</h1>
          <p className="md:w-3/4 text-center text-lg">{TEAM_PAGE?.SUB_HEADLINE }</p>
        </div>
        <TeamMemberCarousel></TeamMemberCarousel>
        <div className="mt-16 relative">
          <div className="flex flex-col md:flex-row  w-full ">
            <div className="md:w-3/4 py-4 md:py flex flex-col  items-center md:items-start ">
              <p className="text-2xl md:text-3xl text-white md:w-3/4 text-center md:text-left">
               {TEAM_PAGE?.JOIN_TEAM_HEADLINE}
              </p>
              <Link
                href="https://www.linkedin.com/company/unbiasly-ai/jobs/"
                target="_blank"
                className="max-w-lg rounded-xl text-center text-black bg-[#D9D9D9] px-6 w-full text-sm md:text-md mt-5 py-2 "
              >
              <button
                aria-label={TEAM_PAGE?.JOIN_TEAM_BUTTON}
                type="button"
                className=""
              >
                  {TEAM_PAGE?.JOIN_TEAM_BUTTON}
              </button>
                </Link>
            </div>
            <div className="md:w-1/4 flex flex-col items-center  md:items-start md:border-l-2 border-white rounded-lg px-4  ">
              <p className="text-2xl md:text-3xl text-white md:w-1/2  ">
                {TEAM_PAGE?.STAY_CONNECTED_HEADLINE}
              </p>
              <p className="text-white text-md py-2">
                {TEAM_PAGE?.STAY_CONNECTED_SUB_HEADLINE}
              </p>
              <div className="flex gap-4 py-2">
                {TEAM_PAGE?.SOCIALS?.LINKS.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=''
                  >
                    <Image src={link.src} alt={link.href} width={24} height={24} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full border-t border-white rounded-lg absolute"></div>
        </div>
      </div>

      {/* <div className="mt-6 lg:mt-12">
        <AppStores />
      </div> */}
    </div>
  )
}

export default Page