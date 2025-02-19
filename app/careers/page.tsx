"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import CareerContact from "@/components/custom/careers/CareerContact";
import { CareerDropdown } from "@/components/custom/careers/CareerDropdown";
import AppApi from "@/service/app.api";
import { useDispatch } from 'react-redux';
import { setSelectedJob } from '@/lib/redux/features/careerSlice';
import { Job } from '@/service/api.interface';

export default function CareerIntro() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [departments, setDepartments] = useState<Array<{ value: string; label: string }>>([]);
  const [positions, setPositions] = useState<Array<{ value: string; label: string }>>([]);
  const router = useRouter();
  const dispatch = useDispatch();

  // Add state to store the full job data
  const [jobsData, setJobsData] = useState<Job[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await AppApi.getDepartment();
        const departmentOptions = response.data.map(dept => ({
          value: dept.name,
          label: dept.name
        }));
        setDepartments(departmentOptions);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchPositions = async () => {
      if (!selectedDepartment) return;
      
      try {
        const response = await AppApi.getJobByDepartment(selectedDepartment);
        
        // Store full job data
        setJobsData(response);


        const positionOptions = response.map(job => ({
          value: job.job_name,
          label: `${job.job_name}${job.description?.title ? ` - ${job.description.title}` : ''}`
        })).filter(option => option.value !== '');

        setPositions(positionOptions);
      } catch (error) {
        console.error("Error fetching positions:", error);
        setPositions([]);
        setJobsData([]);
      }
    };

    fetchPositions();
  }, [selectedDepartment]);

  const handleDepartmentChange = (value: string) => {
    setSelectedDepartment(value);
    setSelectedPosition(null); // Reset position when department changes
    setPositions([]); // Clear positions when department changes
  };

  const handlePositionChange = (value: string) => {
    setSelectedPosition(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (selectedPosition && selectedDepartment) {
      // Find the selected job from jobsData
      const selectedJobData = jobsData.find(
        job => job.job_name === selectedPosition && job.department === selectedDepartment
      );

    if (selectedJobData) {
        // Dispatch selected job to Redux store
        dispatch(setSelectedJob(selectedJobData));
        // Navigate using job_id
        router.push(`/careers/${selectedJobData.job_id}`);
    } else {
        console.log('No matching job found:', { selectedPosition, selectedDepartment })
    }
    }
  };

  return (
    <div className="lg:my-20 padding-container max-container p-4 md:p-8 flex items-center  justify-center">
      <div className="w-full  lg:p-6 border border-white bg-[#0C0C0C] rounded-[32px] overflow-hidden md:flex">
        {/* Left Section - Hidden on Mobile */}
        <CareerContact />

        {/* Right Section - Form */}
        <div className="md:w-1/2 bg-[#D9D9D9] p-8 md:pb-5 md:px-12 rounded-[32px] "> 

          <h1 className="text-2xl md:text-3xl w-3/5 font-bold mb-2">
            Got some ideas? we've got them team for it!
          </h1>
          <p className="text-black mb-5">
            Tell us more about yourself and what you got in your mind.
          </p>

          <form className="space-y-8">
            <div className="space-y-6">
              <CareerDropdown 
                options={departments} 
                placeholder="Select Department" 
                onChange={handleDepartmentChange} 
                value={selectedDepartment || undefined} 
              />
              {selectedDepartment && (
                <CareerDropdown 
                  options={positions} 
                  placeholder="Select Position" 
                  onChange={handlePositionChange} 
                  value={selectedPosition || undefined} 
                />
              )}
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition-colors text-lg"
            >
              Let's get started!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
