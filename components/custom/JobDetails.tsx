"use client"

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';

export const JobDetails = () => {
  const selectedJob = useSelector((state: RootState) => state.career.selectedJob);

  if (!selectedJob) {
    return null;
  }

  const jobDetailsList = [
    {
      name: "Location",
      value: selectedJob.description?.location || 'Location not specified'
    },
    {
      name: "Type",
      value: selectedJob.job_type || 'Type not specified'
    },
    {
      name: "Department",
      value: selectedJob.department || 'Department not specified'
    }
  ];

  return (
    <div>
      {jobDetailsList.map((detail, index) => (
        <div key={index} className="mb-4 lg:space-y-3">
          <h2 className="text-white lg:text-xl text-sm font-semibold">{detail.name}</h2>
          <p className="text-[#717171] text-sm lg:text-lg">{detail.value}</p>
          <div className="bg-white opacity-50 w-full h-[0.5px]" />
        </div>
      ))}
    </div>
  );
};
