import { cn } from "@/lib/utils";
import Image from "next/image";
import { Tag } from "./Tag";

type ObjectiveProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    tagValue?: string;
  } & React.HTMLAttributes<HTMLDivElement>;
  
  
  export const Objective: React.FC<ObjectiveProps> = ({
    imageSrc,
    imageAlt,
    title,
    description,
    className,
    tagValue,
    ...props
  }) => {
    return (
      <div className={cn("lg:flex lg:flex-row py-5 flex flex-col items-center ", className)} {...props}>
        {/* Icons */}
          <div className="rounded-full bg-[#191919] w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] p-[2rem] lg:p-[3rem] flex items-center justify-center">
              <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={62}
                  height={62}
                  className="max-w-14 lg:min-w-[62px] max-lg:mx-auto"
              />
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-12 text-center lg:text-left">
              <div className="inline-block relative">
                  <div className="text-xl font-bold lg:text-4xl text-white">
                      {title}
                  </div>
                  {tagValue && (
                      <div className="absolute left-full -top-1 lg:top-1 ml-2 lg:ml-6">
                          <Tag>{tagValue}</Tag>
                      </div>
                  )}
              </div>
              <div className="w-full text-base md:text-lg lg:text-xl mt-1 lg:mt-2 text-white">
                  {description}
              </div>
          </div>
      </div>
    );
  };