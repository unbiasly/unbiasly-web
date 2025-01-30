import Image from "next/image";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";
import IndusStore from "@/public/app-stores/indus.png";
import Link from "next/link";
import { APP_CONSTANTS } from "@/lib/constants/constants";

export default function AppStores() {
  return (
    <div className="px-6 lg:px-41 text-center">
      <p className="text-sm text-white lg:text-xl leading-consistent">
        {APP_CONSTANTS.APP_STORE_HEADLINE}
      </p>
      <div className="flex flex-col lg:flex-row mt-6 lg:mt-8 lg:justify-center items-center gap-5 lg:gap-9">
        <Link
          href="https://apps.apple.com/in/app/unbiasly/id6477892005"
          target="_blank"
        >
          <Image src={AppleStore} alt="Apple Store" className="max-w-[163px]" />
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=com.unbiasly.app"
          target="_blank"
        >
          <Image
            src={GoogleStore}
            alt="Google Store"
            className="max-w-[163px]"
          />
        </Link>
      </div>
    </div>
  );
}
