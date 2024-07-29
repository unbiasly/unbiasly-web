import AdvisorCard from "@/components/custom/advisor-card";
import AppStores from "@/components/custom/app-stores";
import ContentContainer from "@/components/custom/content-container";
import HighlightContent from "@/components/custom/highlight-content";
import SubTitle from "@/components/custom/page-subtitle";
import PageTitle from "@/components/custom/page-title";
import ProfileCard from "@/components/custom/profile-card";
import Link from "next/link";

const userProfiles = [
  {
    photo: "/people/robin-singh.png",
    name: "Robin Singh",
    contactUrl: "https://x.com/robinjpsingh",
    designation: "Founder and Chief Executive Officer",
    workplace: "University of Delhi",
  },
  {
    photo: "/people/rajveer-kaur.png",
    name: "Rajveer Kaur",
    contactUrl: "https://www.linkedin.com/in/rajveer-kaur-b493b1265",
    designation: "Co-founder & Chief Content Officer",
    workplace: "University of Delhi",
  },
  {
    photo: "/people/kriti-agarwal.png",
    name: "Kriti Agarwal",
    contactUrl: "https://x.com/KritiAgarwal29",
    designation: "Co-founder and Chief Strategy Officer",
    workplace: "LSE-University of London, UK",
  },
];

const advisors = [
  {
    photo: "/people/riyanka-roy.png",
    name: "Riyanka Roy Choudhury",
    contactUrl: "https://www.linkedin.com/in/riyanka-roy-choudhury/",
    description: (
      <>
        <p className="mt-2">(AI Governance, MIT, IBM, Meta & Responsible AI)</p>
        <p className="mt-2">Ex-Lead, Policy & Teach Program, PathCheck, MIT</p>
        <p className="mt-2">
          Fellow - CodeX, The Stanford Center for Legal Informatics,
          LLM-University of California Berkeley, USA
        </p>
      </>
    ),
  },
  {
    photo: "/people/ashwani-jp-singh.png",
    name: "Ashwani JP Singh",
    contactUrl: "https://x.com/ashwanijpsingh",
    description: (
      <>
        <p className="mt-2">
          (Additional PS to Minister for Culture and Tourism, Government of
          India)
        </p>
        <p className="mt-2">
          16 Years of Experience in Political & Government Affairs, Founder
          Green Governance India, Founding Member GCTC, Founder - People’s
          Parliament School
        </p>
      </>
    ),
  },
];

export default function Team() {
  return (
    <main className="text-[#4A4A4A] mb-6 lg:mb-12">
      <HighlightContent>
        <PageTitle className="mt-5 lg:mt-12">Meet Our Team</PageTitle>
        <p className="mt-4 lg:mt-6 text-xs leading-consistent lg:text-base lg:leading-consistent text-black">
          Get to know the brilliant minds behind Unbiasly. Our dedicated team
          and expert advisors bring a wealth of experience and insight, driving
          innovation and excellence. Discover the people who are shaping our
          vision and guiding us to success.
        </p>
        <div className="grid grid-cols-1 lg:flex lg:justify-between lg:flex-wrap gap-5 lg:gap-11 mt-5 lg:mt-10 mb-4">
          {userProfiles.map((profile) => (
            <ProfileCard
              key={profile.name}
              photo={profile.photo}
              name={profile.name}
              contactUrl={profile.contactUrl}
              designation={profile.designation}
              workplace={profile.workplace}
            />
          ))}
        </div>
      </HighlightContent>
      <ContentContainer className="mt-12">
        <SubTitle>Our Honorary Advisors</SubTitle>
        <div className="grid grid-cols-1 lg:flex lg:justify-around lg:flex-wrap gap-5 lg:gap-11 mt-5 lg:mt-10">
          {advisors.map((profile) => (
            <AdvisorCard
              key={profile.name}
              photo={profile.photo}
              contactUrl={profile.contactUrl}
              name={profile.name}
              description={profile.description}
            />
          ))}
        </div>
      </ContentContainer>
      <HighlightContent className="mt-12">
        <SubTitle>Join Our Team</SubTitle>
        <p className="mt-2 lg:mt-6 text-xs leading-consistent lg:text-base lg:leading-consistent text-black">
          Are you passionate about innovation and making a difference? At
          Unbiasly, we&apos;re always on the lookout for talented individuals to
          help us shape the future. Discover exciting opportunities and grow
          with us. Come work with us and be a part of something extraordinary!
        </p>
        <div className="mt-6 lg:mt-8">
          <Link
            href="https://www.linkedin.com/company/unbiasly-ai/jobs/"
            className="text-sm leading-consistent lg:text-xl lg:leading-consistent text-hyperlink hover:underline"
            target="_blank"
          >
            Check out the openings here!
          </Link>
        </div>
      </HighlightContent>
      <div className="mt-6 lg:mt-12">
        <AppStores />
      </div>
    </main>
  );
}
