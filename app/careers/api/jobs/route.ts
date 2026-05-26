import AppApi from "@/service/app.api";
import { NextResponse } from "next/server";

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