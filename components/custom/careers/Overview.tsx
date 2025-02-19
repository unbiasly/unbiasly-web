"use client"

import { Button } from "@/components/ui/button"
import { CAREER_CONSTANTS } from "@/lib/constants/career-constants"
import Link from "next/link"
import React from "react"
import { useSelector } from 'react-redux';
import { Remark } from "react-remark"
import { RootState } from '@/lib/redux/store';
import { Tag } from "@/components/custom/Tag"

export type TabType = "overview" | "application" | "preview";

export type TabProps = {
    activeTab?: TabType;
    setActiveTab: (tab: TabType) => void;
};

const Overview: React.FC<TabProps> = ({ setActiveTab }) => {
  const selectedJob = useSelector((state: RootState) => state.career.selectedJob);

  if (!selectedJob) {
    return <div>{CAREER_CONSTANTS.NOT_AVAILABLE.job}</div>;
  }

  return (
    <div className="lg:py-8 text-sm">
      <h1 className="lg:text-xl text-lg lg:font-bold font-semibold text-white mb-4">
        {selectedJob?.job_name}: {selectedJob.description?.title || CAREER_CONSTANTS.NOT_AVAILABLE.title}
      </h1>
      <p className="lg:font-normal lg:mb-4 lg:text-lg font-medium text-white">
        <Remark>{selectedJob.description?.description || CAREER_CONSTANTS.NOT_AVAILABLE.description}</Remark>
      </p>
      <p className="lg:mb-4 lg:text-lg font-semibold text-white">
        Experience Level: {selectedJob.description?.experience_level || CAREER_CONSTANTS.NOT_AVAILABLE.experience}
      </p>
      <div className="lg:font-bold lg:mb-4 lg:text-lg font-semibold text-white">
        Skills Required:
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedJob.description?.skills?.length > 0 ? (
            selectedJob.description.skills.map((skill, index) => (
              <Tag key={index}>{skill}</Tag>
            ))
          ) : (
            <p className="text-sm text-gray-400">{CAREER_CONSTANTS.NOT_AVAILABLE.skills}</p>
          )}
        </div>
      </div>
      
      <div className="pt-4 flex flex-col gap-3 items-center">
        <Button 
          onClick={() => setActiveTab("application")} 
          size="lg" 
          className="w-full text-lg rounded-xl text-black bg-[#D9D9D9]"
        >
          {CAREER_CONSTANTS?.APPLY}
        </Button>
        <p className="block lg:hidden">OR</p>
        <Link href="/careers" className="block lg:hidden underline">
          {CAREER_CONSTANTS?.OPEN_POSTIONS}
        </Link>
      </div>
    </div>
  )
}

export default Overview