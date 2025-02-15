import Image from "next/image";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";
import Link from "next/link";
import StarBorder from "./StarComponent";


export default function AppStoresV2() {
    return (
        <div className="max-container padding-container text-center ">
            <div className="flex flex-col  md:m-0 lg:flex-row mt-8 lg:justify-center items-center gap-5 lg:gap-9 ">
                <StarBorder
                    as="button"
                    color="white"
                    speed="2.8s"
                    className="w-[200px] md:w-auto"
                >
                    <Link
                        href="https://apps.apple.com/in/app/unbiasly/id6477892005"
                        target="_blank"
                    >
                        <Image 
                            src={AppleStore} 
                            alt="Apple Store" 
                            className="w-full h-full " 
                        />
                    </Link>
                </StarBorder>
                <StarBorder
                    as="button"
                    color="white"
                    speed="2.5s"
                    className="w-[200px] md:w-auto"
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
                    </Link>
                </StarBorder>
            </div>
        </div>
    );
}
