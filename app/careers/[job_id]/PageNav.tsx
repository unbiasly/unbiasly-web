"use client"

import { CAREER_CONSTANTS } from '@/lib/constants/career-constants'
import React from 'react'

export type PageNavProps = {
    activeTab: "overview" | "application" | "preview";
    setActiveTab: React.Dispatch<React.SetStateAction<"overview" | "application" | "preview">>;
  };

const PageNav: React.FC<PageNavProps> = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab: "overview" | "application" | "preview") => {
    setActiveTab(tab);
  };

  return (
    <nav className="flex gap-8 lg:gap-16">
      <button
        onClick={() => handleTabClick("overview")}
        className={`py-4 relative text-xl ${
          activeTab === "overview" ? "text-white" : "text-[#717171] hover:text-gray-300"
        }`}
      >
        {CAREER_CONSTANTS?.OVERVIEW}
        {activeTab === "overview" && <div className="lg:absolute lg:bottom-3 lg:left-0 lg:right-0 h-[2px] bg-white" />}
      </button>
      <button
        onClick={() => handleTabClick("application")}
        className={`py-4 relative text-xl ${
          activeTab === "application" ? "text-white" : "text-[#717171] hover:text-gray-300"
        }`}
      >
        {CAREER_CONSTANTS?.APPLICATION}
        {activeTab === "application" && <div className="lg:absolute lg:bottom-3 lg:left-0 lg:right-0 h-[2px] bg-white" />}
      </button>
      <button
        onClick={() => handleTabClick("preview")}
        className={`py-4 relative text-xl ${
          activeTab === "preview" ? "text-white" : "text-[#717171] hover:text-gray-300"
        }`}
      >
        Preview
        {activeTab === "preview" && <div className="lg:absolute lg:bottom-3 lg:left-0 lg:right-0 h-[2px] bg-white" />}
      </button>
    </nav>
  )
}

export default PageNav