"use client"

import PageNav from "@/components/custom/careers/PageNav"
import Overview from "@/components/custom/careers/Overview"
import JobApplication, { ResumeFileProvider } from "@/components/custom/careers/Application"
import React, { useEffect } from "react"
import { useState } from "react"
import { JobDetails } from "@/components/custom/careers/JobDetails"
import { useParams } from "next/navigation"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/lib/redux/store"
import { setSelectedJob } from "@/lib/redux/features/careerSlice"
import AppApi from "@/service/app.api"
import Loader from "@/components/custom/Loader"
import Preview from "@/components/custom/careers/Preview"

type TabType = "overview" | "application" | "preview"

export default function CareersPage() {
    const [activeTab, setActiveTab] = useState<TabType>("overview")
    const [isLoading, setIsLoading] = useState(true)
    const { job_id } = useParams()
    const dispatch = useDispatch()
    const selectedJob = useSelector((state: RootState) => state.career.selectedJob)

    useEffect(() => {
        const fetchJobData = async () => {
            try {
                setIsLoading(true)
                if (!selectedJob || selectedJob.job_id !== job_id) {
                    const jobData = await AppApi.getJobById(job_id as string)
                    dispatch(setSelectedJob(jobData.data))
                }
            } catch (error) {
                console.error('Error fetching job details:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchJobData()
    }, [job_id, selectedJob, dispatch])

    if (isLoading) {
        return <Loader  color='black'/>
    }

    return (
        <ResumeFileProvider>

        <div className="w-full text-white rounded-md lg:pt-10">
            <div className="padding-container max-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16">
                    <div className="w-1/3"/>
                    <div className="w-2/3">
                        <PageNav activeTab={activeTab} setActiveTab={setActiveTab}/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16">
                    <div className="w-full md:w-1/3">
                        <JobDetails />
                    </div>
                    <div className="w-full mb-8 lg:mb-0 md:w-2/3">
                        {activeTab === "overview" ? (
                            <Overview setActiveTab={setActiveTab}/>
                        ) : activeTab === "application" ? (
                            <JobApplication setActiveTab={setActiveTab} />
                        ) : activeTab === "preview" && (
                            <Preview
                            setActiveTab={setActiveTab}
                            
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
        </ResumeFileProvider>
    )
}

