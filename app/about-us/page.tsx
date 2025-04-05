"use client"

import HighlightContent from "@/components/custom/highlight-content";
import SubTitle from "@/components/custom/page-subtitle";
import PageTitle from "@/components/custom/page-title";
import Image from "next/image";
import Screen from "@/public/app-images/group-screen4.png";
import { ABOUT_US_CONSTANTS } from "@/lib/constants/aboutUs-constants";
import { KeyFeatures } from "@/components/custom/KeyFeatures";
import { Objective } from "@/components/custom/Objective";
import { useEffect } from "react";




export default function Page() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <main className="padding-container max-container text-xs leading-consistent lg:text-base  text-white pt-[58px] md:pt-[120px] pb-6 lg:pb-12">
    
        <div className="flex lg:flex-row flex-col space-y-5">
            <div className=" md:px-30 lg:w-4/5  mt-3 lg:mt-6 flex flex-col lg:text-start text-center gap-y-5 lg:gap-y-10 px-6">
                <PageTitle>{ABOUT_US_CONSTANTS?.PAGE_TITLE}</PageTitle>
                <div className="w-full ">
                    <p className="lg:text-xl lg:text-start  text-center  text-base text-white" dangerouslySetInnerHTML={{ __html: ABOUT_US_CONSTANTS?.ABOUT_US }} />
                </div>
            </div>
            <div className="w-full flex justify-center lg:w-2/5 lg:block ml-auto">
                <Image
                    src={Screen}
                    alt="UnbiaslyAI News"
                    width={600}
                    className="min-w-[104px]"
                />
            </div>
        </div>
        <HighlightContent dangerouslySetInnerHTML={{ __html: ABOUT_US_CONSTANTS?.DIVIDER_1 }} />
        
        <div className="md:px-41 px-6 mt-6 lg:mt-12 mx-auto">
            <SubTitle>{ABOUT_US_CONSTANTS?.FEATURES_TITLE}</SubTitle>
            <KeyFeatures/>
            
        </div>
      <div className="px-6 mt-6 lg:mt-14">
        {ABOUT_US_CONSTANTS?.OBJECTIVES.map((objective, index) => (
          <Objective
            key={index}
            imageSrc={objective.imageSrc}
            imageAlt={objective.imageAlt}
            title={objective.title}
            description={objective.description}
            className={index == 0 ? "mt-12" : ""}
          />
        ))}
      </div>

      <div className=" px-6 mt-6 lg:mt-12">
        <SubTitle>Other features include</SubTitle>
        {ABOUT_US_CONSTANTS?.OTHER_FEATURES.map((feature, index) => (
          <Objective
            key={index}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            title={feature.title}
            description={feature.description}
            // tagValue={feature.tagValue}
            className={index == 0 ? "mt-12" : ""}
          />
        ))}
      </div>
      <HighlightContent className="">
        {ABOUT_US_CONSTANTS?.DIVIDER_2}
      </HighlightContent>
    </main>
  );
}
