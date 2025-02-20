import Image from "next/image";
import { timeElapsed } from "@/lib/utils";
import Link from "next/link";


type NewsCardProps = {
    image: string;
    title: string;
    description: string;
    date: string;
    articleUrl:string,
    publisher:string

  };
  
  export const NewsCard: React.FC<NewsCardProps> = ({
    title,
    description,
    date,
    image,
    articleUrl,
    publisher
  }) => {
    // console.log(publisher)
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
                    priority
                    className="rounded-xl"
                />
            )}
        </div>
        <div className="flex flex-col flex-grow">
            <h3 className="text-white text-md  ">{title}</h3>
            <div className="flex flex-col  text-left gap-2 text-sm text-gray-400 py-2">
            <span>{timeElapsed(date)}</span>
            <Link
            href={articleUrl}
            target="_blank"
            className=""
          >
            Click to read full article <span className="">{
             publisher.charAt(0).toUpperCase()
             + publisher.slice(1)}</span>
          </Link>
            </div>
        </div>
      </div>
      {/* Desktop VIEW */}
        <div className="hidden md:flex flex-row justify-between  ">
                 {/* Image */}
            {image && image.startsWith("http") && (
                <div className="w-full md:max-w-[200px] h-[180px] md:h-[125px] bg-[#1e1e1e] rounded-xl relative">
                    <Image
                        alt={`News article thumbnail for ${title}`}
                        src={image}
                        fill
                        sizes="(min-width: 768px) w-full, h-full max-w-[190px]"
                        className="rounded-xl"
                        quality={100}
                        unoptimized
                    />
                </div>
            )}
            {/* Text Content */}
            <div className="flex flex-col justify-center px-5 flex-grow ">
                <div>
                    <div className="lg:text-2xl text-2xl leading-consistent text-white ">{title}</div>
                </div>
             <div className="max-md:mt-3 mt-4 text-xs leading-consistent lg:text-sm lg:leading-consistent flex tex text-gray-400 py-2">
         <div className="mr-1"> {timeElapsed(date)}  </div>
          <Link
            href={articleUrl}
            target="_blank"
            className=""
          >
            • Click to read full article <span className="">{
             publisher.charAt(0).toUpperCase()
             + publisher.slice(1)}</span>
          </Link>
        </div>
            </div>
       
        </div>
    </div>
    );
  };
