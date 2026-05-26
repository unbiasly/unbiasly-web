import { NextResponse } from 'next/server';
import AppApi from '@/service/app.api';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        
        // Get all required fields
        const file = formData.get('file') as File;
        const parsed_data = JSON.parse(formData.get('parsed_data') as string);
        const resume_email = formData.get('resume_email') as string;
        const resume_name = formData.get('resume_name') as string;
        const job_id = formData.get('job_id') as string;

        // Validate required fields
        if (!file || !parsed_data || !resume_email || !resume_name || !job_id) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Forward the request to AppApi
        const apiResponse = await AppApi.postJobApply({
            file,
            parsed_data,
            resume_email,
            resume_name,
            job_id
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
