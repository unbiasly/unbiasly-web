import { NextResponse } from 'next/server';
import AppApi from '@/service/app.api';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { useContext } from 'react';
import { ResumeFileContext } from '@/components/custom/careers/Application';

export async function POST(request: Request) {
    const applicationData = useSelector((state: RootState) => state.application);
  const selectedJob = useSelector((state: RootState) => state.career.selectedJob);
  const documentJobId = selectedJob?._id;
  const { resumeFile } = useContext(ResumeFileContext);
    try {

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


        const apiResponse = await AppApi.postJobApply({
            file: resumeFile || new File([], ''),
            parsed_data: parsedData,
            resume_email: applicationData.formData.contact_information.email,
            resume_name: applicationData.formData.full_name,
            job_id: documentJobId || ''
        });
        return NextResponse.json(apiResponse);

    } catch (error) {
        console.error('Error processing application:', error);
        return NextResponse.json(
            { error: 'Failed to process application' },
            { status: 500 }
        );
    }
}
