import AppApi from '@/service/app.api';
import { NextResponse } from 'next/server';

// Autofill Resume
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const data = await AppApi.postAutofillResume(formData);
    console.log(data);
    return NextResponse.json(data);

    // Mock response - replace with actual API call
    return NextResponse.json({
      data: {
        full_name: 'Nazeef Ahmad',
        contact_information: {
          email: 'nazeefahmadgzb@gmail.com',
          phone: '9990518959',
          address: ''
        },
        education: [
          {
            degree: 'Intermediate in Science (PCM)',
            institution: 'K.D.B Public School',
            dates: '03/2022'
          },
          {
            degree: 'B.Tech in Computer Science and Information Technology',
            institution: 'Institutions Ghaziabad',
            dates: 'Ongoing'
          }
        ],
        job_titles: ['Team Lead', 'Co-Founder', 'Freelance App Developer'],
        company_names: ['Rajasthan Police', 'Team Black Pearl', 'Buyall 2u.com'],
        key_skills: [
          'C/C++', 'Dart', 'Data Structures', 'Java', 'Python',
          'Docker', 'Flutter', 'Git', 'Linux', 'Unity 3D',
          'Vercel', 'Artificial Intelligence', 'Firebase',
          'Machine Learning', 'VR'
        ],
        major_achievements: [
          { achievement: '20% increase in client satisfaction' },
          { achievement: '57% improvement in team performance' },
          { achievement: 'Improved Police trainee scores by 25%' }
        ],
        employment: [
          {
            position: 'Developed a performance tracking system',
            company_name: 'Rajasthan Police',
            date: '01/2024 - Present'
          }
        ],
        relevant_certifications: []
      }
    });
  } catch (error) {
    console.error('Error processing file:', error);
    return NextResponse.json(
      { error: 'Error processing file' },
      { status: 500 }
    );
  }
} 

// get departments, positions, & jobDetails
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('id');
    const department = searchParams.get('department');

    // If jobId is provided, get specific job details
    if (jobId) {
      const jobData = await AppApi.getJobById(jobId);   
      return NextResponse.json({ data: jobData.data });
    }
    
    if (department) {
      const data = await AppApi.getJobByDepartment(department);
      return NextResponse.json({ data: data });
    }
    // Otherwise get all jobs
    const data = await AppApi.getDepartment();
    return NextResponse.json({ data: data.data });

    

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error fetching data' },
      { status: 500 }
    );
  }
}   