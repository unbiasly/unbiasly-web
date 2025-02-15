import AppStores from "@/components/custom/app-stores";
import HighlightContent from "@/components/custom/highlight-content";
import NotFoundIcon from "@/public/not-found.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="mt-[58px] md:mt-[120px]">
      <div className="flex flex-col items-center">
        <Image
          src={NotFoundIcon}
          alt="Page not found icon"
          className="w-[150px] lg:w-[278px] ml-10"
        />
        <div className="text-sm lg:text-xl leading-consistent lg:leading-consistent text-black mt-7 font-bold">
          Sorry, the page not found!
        </div>
        <p className="mt-2 lg:mt-3 max-w-[228px] lg:max-w-[304px] text-xs lg:text-base leading-consistent lg:leading-consistent text-gray-29 text-center">
          The link you followed probably broken or the page has been removed.
        </p>
      </div>
      <HighlightContent className="pt-6 lg:pt-12 pb-6 lg:pb-12">
        <AppStores />
      </HighlightContent>
    </main>
  );
}
