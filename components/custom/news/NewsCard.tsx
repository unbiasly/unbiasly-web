import Image from "next/image";
import { timeElapsed } from "@/lib/utils";
import Link from "next/link";
import { APP_CONSTANTS } from "@/lib/constants/constants";
import { Language } from "@/service/api.interface";

type NewsCardProps = {
    image: string;
    title: string;
    description: string;
    date: string;
    articleUrl:string,
    publisher:string,
    // isHindiSelected:boolean
    selectedLanguage: string;
  };
  
  export const NewsCard: React.FC<NewsCardProps> = ({
    title,
    description,
    date,
    image,
    articleUrl,
    publisher,
    selectedLanguage,
    // isHindiSelected
  }) => {
    
    const getReadFullArticleText = (language: string) => {
      switch(language) {
        case Language.HINDI:
          return APP_CONSTANTS?.NEWS_CARD?.READ_FULL_ARTICLE_HINDI;
        case Language.BENGALI:
          return APP_CONSTANTS?.NEWS_CARD?.READ_FULL_ARTICLE_BENGALI;
        case Language.ENGLISH:
        default:
          return APP_CONSTANTS?.NEWS_CARD?.READ_FULL_ARTICLE_ENGLISH;
      }
    };

    return (
    <div className="w-full bg-[#1e1e1e] rounded-2xl overflow-hidden">
        <Link
            href={articleUrl}
            target="_blank"
            className=""
          >
      {/* Mobile and Tablet View */}
    <div className="md:hidden flex flex-col p-3">
      <div className="relative w-full h-[180px] aspect-video bg-[#1e1e1e] rounded-xl mb-2">
        {image && image.startsWith("http") && (
            <Image
              src={image}
              alt={`Thumbnail for ${title}`}
              fill
              sizes="(max-width: 768px) 100vw"
              className="rounded-xl object-cover"
              unoptimized
            />
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="text-white text-base font-medium line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-xs mt-1.5 ">{description}</p>
        <div className="flex items-start text-center text-xs text-gray-400 mt-2.5 pt-1">
            <span>{timeElapsed(date, selectedLanguage)}</span>
            • {getReadFullArticleText(selectedLanguage)}
            <span> - {publisher.charAt(0).toUpperCase() + publisher.slice(1)}</span>
        </div>
      </div>
    </div>
      {/* Desktop VIEW */}
        <div className="hidden md:flex flex-row items-center p-2 justify-between  ">
                 {/* Image */}
            {image && image.startsWith("http") && (
                <div className="w-full  md:max-w-[400px] md:h-[225px] aspect-[4/3] lg:aspect-video  bg-[#1e1e1e] rounded-xl relative">
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
                    <div className="text-gray-400 text-xs lg:text-base leading-consistent mt-2 ">
                        {description}
                        </div>
                </div>
             <div className="max-md:mt-3 mt-4 text-xs leading-consistent lg:text-sm lg:leading-consistent flex tex text-gray-400 py-2">
         <div className="mr-1"> {timeElapsed(date, selectedLanguage)}  </div>
          <Link
            href={articleUrl}
            target="_blank"
            className=""
          >
            • {getReadFullArticleText(selectedLanguage)} 
            <span> - {publisher.charAt(0).toUpperCase() + publisher.slice(1)}</span>
          </Link>
        </div>
            </div>
       
        </div>
        </Link>
    </div>

    );
  };
