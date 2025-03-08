"use client"
import Image from "next/image";
import Link from "next/link";
import ParticlesBackground from "../components/custom/Particle";
import AppStoresV2 from "@/components/custom/AppStoreV2";
import { useEffect, useState } from "react";
import Loader from "@/components/custom/Loader";
import { HOME_PAGE } from "@/lib/constants";
import AppSplashScreenV2 from "@/public/app-images/AppSplashScreenV2.png"
import HomePhone from "@/components/custom/HomePhone";
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

      <div className=" md:mx-auto md:padding-container max-container flex flex-col md:flex-row items-center justify-center text-white text-5xl md:text-7xl py-16 relative z-10 ">
        <div className="flex flex-col items-center justify-center text-center px-12 py-12 w-full md:w-4/6 cursor-default ">
            {HOME_PAGE?.HEADLINE}
        </div>

        <div className="flex flex-col max-container items-center justify-center w-full md:w-2/6">
          <HomePhone/>
        {/* <Image
            src={AppSplashScreenV2}
            alt="App Screenshot"
            className="w-[200px] md:w-[263px] lg:w-[263px]"
            quality={100}
          /> */}
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
        <div className="w-full border-t border-white rounded-lg ">
        
        <Link
          href="https://www.linkedin.com/company/unbiasly-ai/jobs/"
          target="_blank"
          className="max-w-xs text-center rounded-xl text-black bg-[#D9D9D9] px-6 w-2/6 text-sm md:text-md py-2 absolute ml-10 -top-5"
        >
            {HOME_PAGE?.COME_WORK_WITH_US}
        </Link>
        </div>
      </div>
    </div>

  );
}
