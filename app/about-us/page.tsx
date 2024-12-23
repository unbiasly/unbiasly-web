import AppStores from "@/components/custom/app-stores";
import HighlightContent from "@/components/custom/highlight-content";
import SubTitle from "@/components/custom/page-subtitle";
import PageTitle from "@/components/custom/page-title";
import { cn } from "@/lib/utils";
import Image from "next/image";
import UnbiaslyLogo from "@/public/unbiasly-logo.png";

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
            className="max-w-14 lg:min-w-[135px] max-lg:mx-auto"/>

      <div className="mt-4 lg:mt-0 lg:ml-12 text-center lg:text-left">
        <div className="inline-block relative">
          <div className="text-base leading-consistent lg:text-2.5xl lg:leading-consistent font-medium text-black">
            {title}
          </div>
          {tagValue && (
            <div className="absolute left-full -top-1 lg:top-1 ml-2 lg:ml-6">
              <Tag>{tagValue}</Tag>
            </div>
          )}
        </div>
        <p className="text-xs leading-consistent lg:text-base lg:leading-consistent mt-1 lg:mt-2 text-black">
          {description}
        </p>
      </div>
    </div>
  );
};

type KeyFeatureItem = {
  title: string;
  description: string;
  imageSrc: string;
};

type KeyFeaturesProps = {
  features: Array<KeyFeatureItem>;
} & React.HTMLAttributes<HTMLDivElement>;

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ features, ...props }) => {
  return (
    <div {...props}>
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className={cn(
            "flex flex-col min-h-[524px] relative items-center lg:items-start",
            index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row",
            index !== 0 && "mt-8 lg:-mt-36"
          )}
        >
        <Image
            src={feature.imageSrc}
            alt={feature.title}
            width={260}
            height={524}
            className={cn("min-w-[173px]")}/>

          <div className="max-w-[400px] mt-5 lg:my-auto ml-8 max-lg:text-center lg">
            <div className="text-base leading-consistent lg:text-2.5xl lg:leading-consistent font-medium text-black">
              {feature.title}
            </div>
            <p className="text-xs leading-consistent lg:text-base lg:leading-consistent mt-1 lg:mt-3 text-black">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <main className="text-xs leading-consistent lg:text-base lg:leading-consistent text-black mt-[58px] md:mt-[120px] mb-6 lg:mb-12">
      <div className="md:px-41 px-6">
        <PageTitle>About Us</PageTitle>
      </div>

      <div className="md:px-41 px-6 mt-3 lg:mt-6 flex">
        <div className="mr-1 lg:w-3/4">
          <p>
            Unbiasly is an AI-powered news aggregator app dedicated to combating
            misinformation and fake news. We curate reliable content from
            authentic national and international sources, providing
            easy-to-understand 55-word summaries with source verification. Our
            personalized news delivery, supported by advanced AI technology,
            ensures you stay informed about what matters most to you. With
            multilingual support, we aim to break language barriers and bring
            trustworthy news to everyone. Join us in promoting a culture of
            accurate information consumption and rebuilding trust in the media.
          </p>
          {/* <p className="mt-2 lg:mt-4">
            We will engage in community-driven campaigns to raise awareness
            about the harmful impact of misinformation and fake news.
          </p> */}
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
      <HighlightContent className="font-bold">
        We are not just an app but a committed community service, promoting a
        culture of accurate information consumption for everyone.
      </HighlightContent>
      <div className="md:px-41 px-6 mt-6 lg:mt-12 mx-auto">
        <SubTitle>Our key features include</SubTitle>
        <KeyFeatures
          className="mt-5 lg:mt-6"
          features={[
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
          ]}
        />
      </div>
      <div className="md:px-41 px-6 py-12 w-full bg-[#F1F1F1] mt-8 lg:mt-14">
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
          description="Unbiasly is committed to delivering trustworthy, fact-checked news through advanced AI technology. We aim to combat misinformation by verifying sources, providing concise summaries, and promoting media literacy. Our mission is to ensure that everyone has access to accurate information and to support a well-informed community."
          className="mt-12"
        />
      </div>
      {/* <div className="md:px-41 px-6 mt-6 lg:mt-12">
        <SubTitle>Our Partner</SubTitle>
        <Objective
          imageSrc="/undp-logo.png"
          imageAlt="UNDP Logo"
          title="UNDP India"
          description="We are extremely grateful and delighted to have UNDP India as our partner."
          className="mt-5 lg:mt-6"
        />
      </div> */}
      <div className="md:px-41 px-6 mt-6 lg:mt-12">
        <SubTitle>Other features include</SubTitle>
        <Objective
          imageSrc="/community.png"
          imageAlt="Community Driver Campaign"
          title="Community Driver Campaign"
          description="Beyond being a news app, Unbiasly engages in community-driven campaigns to raise awareness about the harmful impact of misinformation and fake news, fostering a culture of accurate information consumption"
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
          description='At Unbiasly, we aim to change the way people consume news, making a big impact and building trust in "The Fourth Pillar of Democracy." We are dedicated to delivering trustworthy news through AI-powered technology, ensuring source verification and personalized content. Our goal is to combat misinformation, promote media literacy, and uphold the integrity of journalism as the cornerstone of democracy.'
          className="mt-12"
        />
        <Objective
          imageSrc="/other-features/sentiment-analysis.png"
          imageAlt="Sentiment Analysis"
          title="Sentiment Analysis"
          description='At Unbiasly, we aim to change the way people consume news, making a big impact and building trust in "The Fourth Pillar of Democracy." We are dedicated to delivering trustworthy news through AI-powered technology, ensuring source verification and personalized content. Our goal is to combat misinformation, promote media literacy, and uphold the integrity of journalism as the cornerstone of democracy.'
          className="mt-12"
          tagValue="Upcoming"
        />
      </div>
      <HighlightContent className="font-bold">
        By choosing Unbiasly, you are not just getting an app, you are joining a
        movement towards a more informed, aware, and engaged society. Trust
        Unbiasly to be your reliable source for news and help us build a
        stronger, more informed community.
      </HighlightContent>
      <div className="mt-6 lg:mt-12">
        <AppStores />
      </div>
    </main>
  );
}
