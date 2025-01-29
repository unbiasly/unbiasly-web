import Image from "next/image";
import { timeElapsed } from "@/lib/utils";


type NewsCardProps = {
    image: string;
    title: string;
    description: string;
    date: string;
    
  };
  
  export const NewsCard: React.FC<NewsCardProps> = ({
    title,
    description,
    date,
    image,
  }) => {
    return (
    <div className="w-full bg-[#1e1e1e] rounded-2xl overflow-hidden">
      {/* Mobile and Tablet View */}
      <div className="md:hidden flex items-center gap-4 p-2">
        <div className="relative min-w-24 min-h-24">
            {image && image.startsWith("http") && (
                <Image
                    src={image}
                    alt={`Thumbnail for ${title}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            )}
        </div>
        <div className="flex flex-col flex-grow">
            <h3 className="text-white text-md font-bold ">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{timeElapsed(date)}</span>
            </div>
        </div>
      </div>
      {/* Desktop VIEW */}
        <div className="hidden md:flex flex-row justify-between pl-5 ">
            {/* Text Content */}
            <div className="flex flex-col justify-center flex-grow">
                <div>
                    <div className="text-3xl leading-consistent text-white font-bold">{title}</div>
                </div>
                <div className="mt-4 text-gray-400 text-md leading-consistent">{timeElapsed(date)}</div>
            </div>
            {/* Image */}
            {image && image.startsWith("http") && (
                <div className="w-full md:max-w-[192px] h-[180px] md:h-[125px] bg-[#1e1e1e] rounded-xl relative">
                    <Image
                        alt={`News article thumbnail for ${title}`}
                        src={image}
                        fill
                        sizes="(min-width: 768px) w-full, h-full max-w-[188px]"
                        className="rounded-xl"
                        quality={100}
                        unoptimized
                    />
                </div>
            )}
        </div>
    </div>
    );
  };
