import Image from "next/image";
import Link from "next/link";

interface AdvisorCardProps {
  photo: string;
  name: string;
  contactUrl: string;
  description: string | React.ReactNode;
}

const AdvisorCard: React.FC<AdvisorCardProps> = ({
  photo,
  name,
  contactUrl,
  description,
}) => {
  return (
    <Link href={contactUrl} target="_blank">
      <div className="bg-white shadow-lg rounded-2xl py-5 lg:py-8 w-full lg:w-[316px]">
        <div className="lg:flex lg:flex-col lg:items-center text-black px-5 lg:px-0">
          <div className="box-border relative min-w-18 max-lg:w-18 lg:w-[172px] h-18 lg:h-[172px] border-2 border-[#999999] rounded-full max-lg:ml-auto max-lg:mr-auto">
            <Image
              src={photo}
              alt={name}
              fill
              sizes="(min-width: 768px) min-w-18, w-[172px]"
            />
          </div>
          <div className="text-center mt-1 lg:mt-7 px-5 lg:px-0">
            <h2 className="text-base leading-consistent lg:text-xl lg:leading-consistent font-bold">
              {name}
            </h2>
            <div className="text-xs leading-consistent lg:text-sm lg:leading-consistent">
              <div className="mt-2 lg:px-4">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AdvisorCard;
