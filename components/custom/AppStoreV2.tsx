import Image from "next/image";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";
import IndusStore from "@/public/app-stores/indus.png";
import Link from "next/link";
import StarBorder from "./StarComponent";


export default function AppStoresV2() {
  return (
    <div className="px-6 lg:px-41 text-center ">
      {/* <p className="text-sm lg:text-base leading-consistent">
        To enjoy all the benefits of the UnbiaslyAI news app, download it now!
      </p> */}
      <div className="flex flex-col lg:flex-row mt-6 lg:mt-8 lg:justify-center items-center gap-5 lg:gap-9 ">
        <StarBorder
          as="button"
          color="white"
          speed="2.8s"
        >
          <Link
            href="https://apps.apple.com/in/app/unbiasly/id6477892005"
            target="_blank"
          >
            <Image src={AppleStore} alt="Apple Store" 
            className="w-full h-full " 
            />
          </Link>
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class"
            color="white"
            speed="2.5s"
          >
          <Link
            href="https://play.google.com/store/apps/details?id=com.unbiasly.app"
            target="_blank"
          >
            <Image
              src={GoogleStore}
              alt="Google Store"
              className="w-full h-full " 
              />
          </Link></StarBorder>


        {/* <Link href="#" target="_blank">
          <Image src={IndusStore} alt="Indus Store" className="max-w-[163px]" />
        </Link> */}
      </div>
    </div>
  );
}
