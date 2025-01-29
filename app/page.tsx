"use client"
import Image from "next/image";
import Link from "next/link";
import AppSplashScreen from "@/public/app-images/splash-screen-2.png";
import ParticlesBackground from "../components/custom/Particle";
import AppStoresV2 from "@/components/custom/AppStoreV2";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";
import {HOME_PAGE } from "@/lib/constants";
import AppSplashScreenV2 from "@/public/app-images/AppSplashScreenV2.png"
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 300); 
    return () => clearTimeout(timeout); 
  }, []);

  if (isLoading) {
    return (
        <Loader  color='black'/>
    );
  }
  return (

    <div className="flex flex-col bg-transparent max-container">
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>

      <div className="max-w-full mx-auto padding-container flex flex-col md:flex-row items-center justify-center text-white text-7xl py-16  relative  z-10 ">
        {/* <div className="flex items-center justify-center text-center md:text-wrap px-6 py-12 w-full md:w-1/2 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% cursor-default "> */}
        <div className="flex flex-col items-center justify-center text-center px-12 py-12 w-full md:w-4/6 cursor-default ">
        {/* <div className="w-full py-2 flex items-center ">
          <Image
                  src="/unbiasly-ai-logo-new.svg"
                  alt="menu"
                  width={32}
                  height={32}
                class="w-[49px] h-[42px]"
                />
        </div> */}
          {HOME_PAGE?.HEADLINE}
        </div>

        <div className="flex flex-col items-center justify-center w-full md:w-2/6">
          <Image
            src={AppSplashScreenV2}
            alt="App Screenshot"
            className="w-[200px] md:w-[263px] lg:w-[263px]"
            quality={100}
          />
          <AppStoresV2 />

        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 pb-8  text-white">
        <div className="w-full md:w-2/6"></div>
        <div className="w-full md:w-4/6 text-center  md:text-left px-4">
          <p className="text-3xl font-semibold mb-4">
            {HOME_PAGE?.TAG_LINE}
          </p>
          <p className="text-md font-light leading-relaxed md:pl-8">
           {HOME_PAGE?.SUB_TAG_LINE}
          </p>
        </div>
      </div>
      <div className="padding-container   flex relative  pb-16">
        <div className="w-full border-t border-white rounded-lg "></div>
        <button
          className="max-w-xs rounded-xl text-black bg-[#D9D9D9] px-6 w-2/6 text-sm md:text-md py-2 absolute ml-10 -top-5 "
        >
          <Link
            href="https://www.linkedin.com/company/unbiasly-ai/jobs/"
            target="_blank"
            className=""
          >
            {HOME_PAGE?.COME_WORK_WITH_US}
          </Link>
        </button>
      </div>
    </div>

  );
}
