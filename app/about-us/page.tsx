"use client";
import AppStores from "@/components/custom/app-stores";
import HighlightContent from "@/components/custom/highlight-content";
import SubTitle from "@/components/custom/page-subtitle";
import PageTitle from "@/components/custom/page-title";
import { cn } from "@/lib/utils";
import Image from "next/image";
import UnbiaslyLogo from "@/public/key-features/key-feature-1.png";
import { ABOUT_US_CONSTANTS } from "@/lib/constants/aboutUs-constants";
import { KeyFeatures } from "@/components/custom/key-features";


type ObjectiveProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tagValue?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Tag: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div className="inline-block rounded-[20px] bg-[#E3E3E3] text-[#666666] py-[6px] px-[16px] text-xs leading-consistent lg:text-base lg:leading-consistent">
      {children}
    </div>
  );
};

const Objective: React.FC<ObjectiveProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  className,
  tagValue,
  ...props
}) => {
  return (
    <div className={cn("lg:flex", className)} {...props}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={135}
        height={135}
        className="max-w-14 lg:min-w-[135px] max-lg:mx-auto"
      />
      <div className="mt-4 lg:mt-0 lg:ml-12 text-center lg:text-left">
        <div className="inline-block relative">
          <div className="text-base leading-consistent lg:text-2.5xl lg:leading-consistent font-medium text-white">
            {title}
          </div>
          {tagValue && (
            <div className="absolute left-full -top-1 lg:top-1 ml-2 lg:ml-6">
              <Tag>{tagValue}</Tag>
            </div>
          )}
        </div>
        <p className="text-xs leading-consistent lg:text-base lg:leading-consistent mt-1 lg:mt-2 text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

interface Feature {
    title: string
    description: string
    imageSrc: string
  }

const features: Feature[] = [
    {
        title: "Easy-to-understand",
        description:
            "Get concise 55-word news summaries that are quick to read and easy to understand. Stay informed without the clutter.",
        imageSrc: "/key-features/key-feature-1.png",
        },
        {
        title: "Source of verification",
        description:
            "Every article is thoroughly verified to ensure it comes from reliable and authentic sources. Trust the news you read.",
        imageSrc: "/key-features/key-feature-2.png",
        },
        {
        title: "Personalized news",
        description:
            "Receive news tailored to your interests with our advanced AI and machine learning technology. Stay updated on what matters most to you.",
        imageSrc: "/key-features/key-feature-3.png",
        },
        {
        title: "Multilingual support",
        description:
            "Access news in your preferred language, including Hindi and English. Breaking barriers with multilingual support.",
        imageSrc: "/key-features/key-feature-4.png",
        },
  ]


export default function Page() {
  return (
    <main className="text-xs leading-consistent lg:text-base  text-white mt-[58px] md:mt-[120px] mb-6 lg:mb-12">
    
        <div className="flex flex-col">
        <div className="md:px-41 px-6">
            <PageTitle>{ABOUT_US_CONSTANTS.PAGE_TITLE}</PageTitle>
        </div>
        

        <div className="md:px-41 px-6 mt-3 lg:mt-6 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
                <p className="lg:text-lg text-sm text-gray-400 ">{ABOUT_US_CONSTANTS.ABOUT_US}</p>
            </div>
            <div className="hidden lg:block ml-auto">
            <Image
                src={UnbiaslyLogo}
                alt="UnbiaslyAI logo"
                width={200}
                className="min-w-[104px]"
            />
            </div>
        </div>
        </div>
        <HighlightContent className="font-bold">{ABOUT_US_CONSTANTS.DIVIDER_1}</HighlightContent>
        
        <div className="md:px-41 px-6 mt-6 lg:mt-12 mx-auto">
            <SubTitle>{ABOUT_US_CONSTANTS.FEATURES.TITLE}</SubTitle>
            <KeyFeatures
            className=" text-white mt-5 lg:mt-6"
            features={features}
            />
            
        </div>
      <div className="md:px-41 px-6 py-12 w-full  mt-8 lg:mt-14">
        <Objective
          imageSrc="/vision.png"
          imageAlt="UnbiaslyAI Vision"
          title="Vision"
          description="To empower individuals with reliable and accurate news, fostering an informed society and rebuilding trust in the media."
        />
        <Objective
          imageSrc="/mission.png"
          imageAlt="UnbiaslyAI Mission"
          title="Mission"
          description="UnbiaslyAI is committed to delivering trustworthy, fact-checked news through advanced AI technology. We aim to combat misinformation by verifying sources, providing concise summaries, and promoting media literacy. Our mission is to ensure that everyone has access to accurate information and to support a well-informed community."
          className="mt-12"
        />
      </div>

      <div className="md:px-41 px-6 mt-6 lg:mt-12">
        <SubTitle>Other features include</SubTitle>
        <Objective
          imageSrc="/community.png"
          imageAlt="Community Driver Campaign"
          title="Community Driver Campaign"
          description="Beyond being a news app, UnbiaslyAI engages in community-driven campaigns to raise awareness about the harmful impact of misinformation and fake news, fostering a culture of accurate information consumption"
          className="mt-6"
        />
        <Objective
          imageSrc="/literacy.png"
          imageAlt="Promoting Media Literacy"
          title="Promoting Media Literacy"
          description="We are committed to promoting media literacy, helping users develop the skills to critically evaluate the information they encounter and make informed decisions"
          className="mt-12"
        />
        <Objective
            imageSrc="/information.png"
            imageAlt="Combating Misinformation and Fake News"
            title="Combating Misinformation and Fake News"
            description='At UnbiaslyAI, we aim to change the way people consume news, making a big impact and building trust in "The Fourth Pillar of Democracy." We are dedicated to delivering trustworthy news through AI-powered technology, ensuring source verification and personalized content. Our goal is to combat misinformation, promote media literacy, and uphold the integrity of journalism as the cornerstone of democracy.'
            className="mt-12"/>
            
        <Objective
            imageSrc="/other-features/sentiment-analysis.png"
            imageAlt="Sentiment Analysis"
            title="Sentiment Analysis"
            description='At UnbiaslyAI, we aim to change the way people consume news, making a big impact and building trust in "The Fourth Pillar of Democracy." We are dedicated to delivering trustworthy news through AI-powered technology, ensuring source verification and personalized content. Our goal is to combat misinformation, promote media literacy, and uphold the integrity of journalism as the cornerstone of democracy.'
            className="mt-12"
            tagValue="Upcoming"/>
            
      </div>
      <HighlightContent className="font-bold">
        By choosing UnbiaslyAI, you are not just getting an app, you are joining a
        movement towards a more informed, aware, and engaged society. Trust
        UnbiaslyAI to be your reliable source for news and help us build a
        stronger, more informed community.
      </HighlightContent>
      <div className="mt-6 lg:mt-12">
        <AppStores />
      </div>
    </main>
  );
}
