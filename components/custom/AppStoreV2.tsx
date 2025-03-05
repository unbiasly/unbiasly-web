import Image from "next/image";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";
import Link from "next/link";
import StarBorder from "./StarComponent";


const AppStoreContainer = ({ image, link }: { image: any; link: string }) => {
  return (
    <StarBorder
        as="button"
        color="white"
        speed="2.8s"
        className="w-[200px] lg:w-[120px] 2xl:w-[150px]  "
    >
        <Link
            href={link}
            target="_blank"
        >
            <Image 
                src={image} 
                alt={"App Store"} 
                className="w-full h-full " 
            />
        </Link>
    </StarBorder>
  )
}

export default function AppStoresV2() {
    return (
        <div className="text-center ">
            <div className="flex flex-col md:m-0 lg:flex-row mt-8 lg:justify-center items-center gap-5">
                <AppStoreContainer image={AppleStore} link="https://apps.apple.com/in/app/unbiasly/id6477892005" />
                <AppStoreContainer image={GoogleStore} link="https://play.google.com/store/apps/details?id=com.unbiasly.app" />
            </div>
        </div>
    );
}
