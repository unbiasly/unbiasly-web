import React, { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CAREER_CONSTANTS } from '@/lib/constants/career-constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { TabProps } from './Overview';
import AppApi from '@/service/app.api';
import { ResumeFileContext } from './Application';
import { updateFormData } from '@/lib/redux/features/applicationSlice';

const PreviewSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6 bg-[#1E1E1E] p-4 rounded-xl">
    <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const PreviewField = ({ label, value }: { label: string; value: string | undefined }) => (
  <div className="flex flex-col">
    <span className="text-base text-gray-400">{label}</span>
    <span className="text-white">{value || 'Not provided'}</span>
  </div>
);

const Preview: React.FC<TabProps> = ({ setActiveTab }) => {
  const applicationData = useSelector((state: RootState) => state.application);
  const selectedJob = useSelector((state: RootState) => state.career.selectedJob);
  const documentJobId = selectedJob?._id;
  const { resumeFile } = useContext(ResumeFileContext);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!resumeFile) {
        alert('Please upload a resume first');
        return;
    }
    try {
        dispatch(updateFormData(applicationData.formData));

        const parsedData = {
            full_name: applicationData.formData.full_name,
            contact_information: {
                email: applicationData.formData.contact_information.email,
                phone: applicationData.formData.contact_information.phone,
                address: applicationData.formData.contact_information.address
            },
            education: applicationData.formData.education.map(edu => ({
                degree: edu.degree,
                institution: edu.institution,
                dates: edu.dates
            })),
            employment: applicationData.formData.employment.map(emp => ({
                position: emp.position,
                company_name: emp.company_name,
                date: emp.date || ''
            })),
            job_titles: applicationData.formData.job_titles,
            company_names: applicationData.formData.company_names,
            key_skills: applicationData.formData.key_skills,
            relevant_certifications: applicationData.formData.relevant_certifications,
            possible_join_date: applicationData.formData.possible_join_date || '',
            additional_information: applicationData.formData.additional_information || ''
        };

        const response = await AppApi.postJobApply({
            file: resumeFile,
            parsed_data: parsedData,
            resume_email: applicationData.formData.contact_information.email,
            resume_name: applicationData.formData.full_name,
            job_id: documentJobId || ''
        });

        console.log(response);
        // if(response.message)

    } catch (error) {
        console.error('Error submitting application:', error);
    }
  };

  return (
    <div className="py-6">
      <div className="space-y-6">
        {/* Personal Information */}
        <PreviewSection title="Personal Information">
          <PreviewField label={CAREER_CONSTANTS.JOB_INPUTS[0].label} value={applicationData.formData.full_name} />
          <PreviewField label={CAREER_CONSTANTS.JOB_INPUTS[1].label} value={applicationData.formData.contact_information.email} />
          <PreviewField label={CAREER_CONSTANTS.JOB_INPUTS[2].label} value={applicationData.formData.contact_information.phone} />
          <PreviewField label={CAREER_CONSTANTS.JOB_INPUTS[3].label} value={applicationData.formData.contact_information.address} />
        </PreviewSection>

        {/* Education */}
        <PreviewSection title={CAREER_CONSTANTS.EDUCATION_INPUTS.education}>
          {applicationData.formData.education.map((edu, index) => (
            <div key={index} className="bg-[#2A2A2A] p-4 rounded-lg mb-2">
              <PreviewField label={CAREER_CONSTANTS.EDUCATION_INPUTS.institute} value={edu.institution} />
              <PreviewField label={CAREER_CONSTANTS.EDUCATION_INPUTS.degree} value={edu.degree} />
              <PreviewField 
                label={CAREER_CONSTANTS.EDUCATION_INPUTS.labels.duration} 
                value={edu.dates} 
              />
            </div>
          ))}
        </PreviewSection>

        {/* Employment */}
        <PreviewSection title={CAREER_CONSTANTS.EMPLOYMENT_INPUTS.employment}>
          {applicationData.formData.employment.map((emp, index) => (
            <div key={index} className="bg-[#2A2A2A] p-4 rounded-lg mb-2">
              <PreviewField label={CAREER_CONSTANTS.EMPLOYMENT_INPUTS.company} value={emp.company_name} />
              <PreviewField label={CAREER_CONSTANTS.EMPLOYMENT_INPUTS.position} value={emp.position} />
              <PreviewField 
                label={CAREER_CONSTANTS.EMPLOYMENT_INPUTS.labels.duration} 
                value={emp.date} 
              />
            </div>
          ))}
        </PreviewSection>

        {/* Skills */}
        <PreviewSection title="Skills">
          <div className="flex flex-wrap gap-2">
            {applicationData.formData.key_skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-[#2A2A2A] px-3 py-1 rounded-full text-base text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </PreviewSection>

        {/* Achievements */}
        <PreviewSection title="Relevant Certifications">
          {applicationData.formData.relevant_certifications.map((achievement, index) => (
            <div key={index} className="bg-[#2A2A2A] p-3 rounded-lg mb-2 text-white">
              {achievement}
            </div>
          ))}
        </PreviewSection>

        {/* Additional Information */}
        <PreviewSection title="Additional Information">
          <PreviewField 
            label={CAREER_CONSTANTS.OTHER_INPUTS[0].label}
            value={applicationData.formData.possible_join_date || ''}
          />
          <PreviewField 
            label={CAREER_CONSTANTS.OTHER_INPUTS[1].label}
            value={applicationData.formData.additional_information || ''}
          />
        </PreviewSection>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Button 
            onClick={() => setActiveTab("application")} 
            size="lg" 
            className="w-full text-black hover:bg-gray-200 transition-colors bg-[#D9D9D9]"
          >
            {CAREER_CONSTANTS?.PREVIEW.EDIT}
          </Button>
          <Button 
            onClick={handleSubmit}
            className="w-full bg-[#D9D9D9] text-black hover:bg-gray-200 transition-colors"
          >
            {CAREER_CONSTANTS?.PREVIEW.SUBMIT}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
