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

  } catch (error) {
    console.error('Error processing file:', error);
    return NextResponse.json(
      { error: 'Error processing file' },
      { status: 500 }
    );
  }
}