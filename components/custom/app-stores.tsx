import Image from "next/image";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";
import IndusStore from "@/public/app-stores/indus.png";
import Link from "next/link";

export default function AppStores() {
  return (
    <div className="px-6 lg:px-41 text-center">
      <p className="text-sm lg:text-base leading-consistent">
        To enjoy all the benefits of the Unbiasly news app, download it now!
      </p>
      <div className="flex flex-col lg:flex-row mt-6 lg:mt-8 lg:justify-center items-center gap-5 lg:gap-9">
        <Link
          href="https://apps.apple.com/in/app/unbiasly/id6477892005"
          target="_blank"
        >
          <Image src={AppleStore} alt="Apple Store" className="max-w-[163px]" />
        </Link>
        <Link href="#" target="_blank">
          <Image
            src={GoogleStore}
            alt="Google Store"
            className="max-w-[163px]"
          />
        </Link>
        {/* <Link href="#" target="_blank">
          <Image src={IndusStore} alt="Indus Store" className="max-w-[163px]" />
        </Link> */}
      </div>
    </div>
  );
}
