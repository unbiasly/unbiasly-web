"use client"
import React, { useState, memo } from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { TEAM_PAGE } from "@/lib/constants/team";
import Link from "next/link";
import Image from 'next/image';




const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("founders");
  const [modalData, setModalData] = useState(null);
  const teamData: any = TEAM_PAGE?.TEAM_DATA

  const TeamCard = memo(({ member, onClick }: any) => (
    <div
      className="min-w-[300px] bg-black p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={() => onClick(member)}
      onKeyDown={(e) => e.key === "Enter" && onClick(member)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${member?.name}`}
    >
      <div className="relative w-full h-64 mb-4">
        <Image
          src={member?.image}
          alt={member?.name}
          fill
          className="object-cover rounded-lg"
          loading="lazy"
          onError={(e: any) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde";
          }}
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{member?.name}</h3>
      <p className="text-gray-300 mb-2 w-[20ch] truncate">{member?.role}</p>
      <p className="text-gray-400 mb-4 w-[20ch] truncate">{member?.bio}</p>
      {/* <div className="flex space-x-4">
      {member?.social.linkedin && (
                <FaLinkedin className="text-white text-2xl hover:scale-125 transition-all" />
              )}
              {member?.social.twitter && (
                <BsTwitterX className="text-white text-2xl hover:scale-125 transition-all" />
              )}
      </div> */}
    </div>
  ));

  TeamCard.displayName = 'TeamCard';

  const Modal = ({ member, onClose }: any) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-black p-8  rounded-lg max-w-2xl w-full mx-4 relative border border-gray-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <MdClose size={24} />
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-1/2 h-[300px]">
            <Image
              src={member?.image}
              alt={member?.name}
              fill
              className="object-contain  rounded-lg"
              onError={(e: any) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde";
              }}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">{member?.name}</h2>
            <p className="text-xl text-gray-300 mb-4">{member?.role}</p>
            <p className="text-gray-400 mb-6">{member?.bio}</p>
            <div className="flex space-x-6">
                {member?.social.linkedin && (
                    <Link href={member?.social.linkedin}>
                        <FaLinkedin className="text-white text-xl hover:scale-125 transition-all" />
                    </Link>
                )}
                {member?.social.twitter && (
                    <Link href={member?.social.twitter}>
                        <BsTwitterX className="text-white text-xl hover:scale-125 transition-all" />
                    </Link>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className=" bg-black text-white ">

      <div className="flex justify-center mb-8 space-x-4">
        {Object.keys(teamData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-lg font-medium transition-all duration-300 border-b-2 ${activeTab === tab
                ? "border-white text-white"
                : "border-transparent text-gray-400 hover:text-white"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Team
          </button>
        ))}
      </div>
        <div className="flex hide-scrollbar overflow-x-auto gap-8 pb-8 px-4 min-w-full">
            <div className="flex gap-8 px-4">
                {teamData[activeTab].map((member: any) => (
                    <TeamCard
                        key={member?.id}
                        member={member}
                        onClick={(member: any) => setModalData(member)}
                    />
                ))}
            </div>
        </div>

      {modalData && <Modal member={modalData} onClose={() => setModalData(null)} />}
    </div>
  );
};

export default TeamSection;
