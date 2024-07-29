import Image from "next/image";
import Link from "next/link";

interface ProfileCardProps {
  photo: string;
  name: string;
  contactUrl: string;
  designation: string;
  workplace?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  photo,
  name,
  contactUrl,
  designation,
  workplace,
}) => {
  return (
    <Link href={contactUrl} target="_blank">
      <div className="bg-white shadow-lg rounded-2xl py-5 lg:py-8 w-full lg:w-[316px]">
        <div className="flex flex-row lg:flex-col lg:items-center text-black px-5 lg:px-0">
          <div className="box-border relative min-w-18 lg:w-[172px] h-18 lg:h-[172px] border-2 border-[#999999] rounded-full">
            <Image
              src={photo}
              alt={name}
              fill
              sizes="(min-width: 768px) min-w-18, w-[172px]"
              // className="grayscale"
            />
          </div>
          <div className="lg:text-center mt-1 lg:mt-7 px-5 lg:px-0">
            <h2 className="text-base leading-consistent lg:text-xl lg:leading-consistent font-bold">
              {name}
            </h2>
            <div className="text-xs leading-consistent lg:text-sm lg:leading-consistent">
              <p className="mt-2">{designation}</p>
              {workplace && <p>{workplace}</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
