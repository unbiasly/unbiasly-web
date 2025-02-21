import { RelevantCertifications, PersonalInput } from '@/components/custom/careers/ApplicationInput'
import { Button } from '@/components/ui/button'
import Autofill from "@/public/career-icons/ai-beautify.svg"
import { CAREER_CONSTANTS } from '@/lib/constants/career-constants'
import React, { useState, useEffect, createContext, useContext } from 'react'
import Link from 'next/link'
import { Loader2, Upload } from 'lucide-react'
import { EducationSection } from '@/components/custom/careers/ApplicationInput';
import { EmploymentInput } from '@/components/custom/careers/ApplicationInput';
import AppApi from '@/service/app.api'
import { SkillsSection } from '@/components/custom/careers/ApplicationInput'
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '@/lib/redux/features/applicationSlice';
import { RootState } from '@/lib/redux/store';
import { TabProps } from './Overview'
import { validateJobApplication } from '@/lib/utils/jobApplicationValidation'
import { toDate } from 'date-fns'

export interface FormData {
    full_name: string;
    contact_information: {
        email: string;
        phone: string;
        address: string;
    };
    education: Array<{
        degree: string;
        institution: string;
        dates: string;
    }>;
    employment: Array<{
        position: string;
        company_name: string;
        date: string;
    }>;
    job_titles: string[];
    company_names: string[];
    key_skills: string[];
    relevant_certifications: string[];
    possible_join_date: string;
    additional_information: string;
    [key: string]: any;
}

interface ResumeFileContextType {
  resumeFile: File | null;
  setResumeFile: (file: File | null) => void;
}

export const ResumeFileContext = createContext<ResumeFileContextType>({
  resumeFile: null,
  setResumeFile: () => {},
});

export const ResumeFileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  return (
    <ResumeFileContext.Provider value={{ resumeFile, setResumeFile }}>
      {children}
    </ResumeFileContext.Provider>
  );
};

const JobApplication: React.FC<TabProps> = ({ setActiveTab }) => {
    const dispatch = useDispatch();
    const savedFormData = useSelector((state: RootState) => state.application.formData);
    const [formData, setFormData] = useState<FormData>(savedFormData);
    const { setResumeFile } = useContext(ResumeFileContext);
    const [isLoading, setIsLoading] = useState(false);

    // Update Redux when form data changes
    useEffect(() => {
        dispatch(updateFormData(formData));
    }, [formData, dispatch]);

    const handlePreview = () => {
        const errors = validateJobApplication(formData);
        if (errors.length === 0) {
            dispatch(updateFormData(formData));
            setActiveTab("preview");
        } else {
            // Show error toast or alert
            alert("Problems Found:\n\n" + errors.join("\n"));
        }
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            try {
                setIsLoading(true);
                setResumeFile(file);
                
                const fileFormData = new FormData();
                fileFormData.append('file', file);
                
                const response = await AppApi.postAutofillResume(fileFormData);
                if (response.data) {
                    interface EducationData {
                        degree?: string;
                        institution?: string;
                        dates?: string;
                    }

                    interface EmploymentData {
                        position?: string;
                        company_name?: string;
                        date?: string;
                    }

                    const transformedData = {
                        ...response.data,
                        education: (response.data.education || []).map((edu: EducationData) => {
                            const [fromDate, toDate] = (edu.dates || '').split(' - ');
                            return {
                                degree: edu.degree || '',
                                institution: edu.institution || '',
                                dates: edu.dates || '',
                                fromDate: fromDate || '',
                                toDate: toDate || ''
                            };
                        }),
                        employment: (response.data.employment || []).map((emp: EmploymentData) => {
                            const [fromDate, toDate] = (emp.date || '').split(' - ');
                            return {
                                position: emp.position || '',
                                company_name: emp.company_name || '',
                                date: emp.date || '',
                                fromDate: fromDate || '',
                                toDate: toDate || ''
                            };
                        })
                    };

                    console.log('Transformed Data:', transformedData);
                    setFormData({
                        ...transformedData,
                        education: transformedData.education,
                        employment: transformedData.employment,
                        relevant_certifications: transformedData.relevant_certifications || [],
                        possible_join_date: '',
                        additional_information: ''
                    });
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleInputChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => {
            if (id === 'email' || id === 'phone' || id === 'address') {
                return {
                    ...prev,
                    contact_information: {
                        ...prev.contact_information,
                        [id]: event.target.value
                    }
                };
            }
            if (id === 'name') {
                return {
                    ...prev,
                    full_name: event.target.value
                };
            }
            if (id === 'date' || id === 'dates') {
                return {
                    ...prev,
                    [id]: event.target.value
                };
            }
            return {
                ...prev,
                [id]: event.target.value
            };
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        // Get the form element
        const form = event.target as HTMLFormElement;
        if (!form.checkValidity()) {
            // Let the browser handle showing the validation messages
            return;
        }
    };  


  return (
    <div className="py-6 ">
        <div className="mb-3 px-4 py-3 lg:mb-8  p-5 flex flex-row items-center justify-between rounded-2xl border border-white border-opacity-50">
            <div className="flex flex-col">
                <div className="flex items-center text-lg lg:text-xl lg:gap-4 lg:mb-0 mb-2 gap-2">
                    <Autofill />
                    <h3 className="font-bold text-white ">{CAREER_CONSTANTS?.AUTOFILL}</h3>
                </div>
                <p className="lg:text-lg text-sm text-[#d9d9d9]">
                    {CAREER_CONSTANTS?.UPLOAD}
                </p>
            </div>
            <label htmlFor="file-upload" className="lg:w-30 rounded-2xl lg:text-lg lg:font-bold p-1 lg:px-4 lg:text-[#D9D9D9] border border-gray-30 bg-[#1E1E1E] cursor-pointer flex items-center justify-center hover:scale-95">
                {isLoading ? <Loader2 className="animate-spin" /> : (
                    <div className='flex items-center p-2 lg:p-0'>
                        <p className="lg:block hidden">
                            {CAREER_CONSTANTS?.UPLOAD_FILE}
                        </p>
                        <Upload color="white" className="lg:hidden block" />
                    <input
                        id="file-upload"
                        accept=".pdf"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    </div>
                )}
            </label>
        </div>
        
        <form 
            className="lg:space-y-6 space-y-5 my-3 text-lg font-medium text-white bg-transparent rounded-xl"
            onSubmit={handleSubmit}
            noValidate={false}
        >
            {CAREER_CONSTANTS?.JOB_INPUTS.map((personalInput, index) => (
                <PersonalInput 
                    key={index} 
                    id={personalInput.id} 
                    label={personalInput.label} 
                    type={personalInput.type} 
                    placeholder={personalInput.placeholder}
                    value={personalInput.id === 'name' ? formData.full_name : 
                            formData.contact_information[personalInput.id as keyof typeof formData.contact_information] || ''} 
                    onChange={handleInputChange(personalInput.id)}
                />
            ))}
            <EducationSection 
                education={formData.education || [{ degree: '', institution: '', dates: '' }]}
                onChange={(education) => {
                    setFormData(prev => ({
                        ...prev,
                        education
                    }));
                }}
            />
            <EmploymentInput 
                employment={formData.employment || [{ position: '', company_name: '', date: '' }]}
                onChange={(employment) => {
                    setFormData(prev => ({
                        ...prev,
                        employment
                    }));
                }}
            />
            <RelevantCertifications 
                certifications={formData.relevant_certifications || []}
                onChange={(certifications) => {
                    setFormData(prev => ({
                        ...prev,
                        relevant_certifications: certifications
                    }));
                }}
            />
            <SkillsSection 
                skills={formData.key_skills || []}
                onChange={(skills) => {
                    setFormData(prev => ({
                        ...prev,
                        key_skills: skills
                    }));
                }}
            />
            {CAREER_CONSTANTS?.OTHER_INPUTS.map((input, index) => (
                <PersonalInput 
                    key={index} 
                    id={input.id} 
                    label={input.label} 
                    type={input.type} 
                    value={formData[input.id] || ''}
                    placeholder={input.placeholder}
                    onChange={handleInputChange(input.id)}
                />
            ))}
        <div className="pt-4 flex flex-col gap-3 items-center">
            <Button 
                type="button"
                onClick={handlePreview} 
                size="lg" 
                className="w-full text-lg rounded-xl text-black bg-[#D9D9D9]"
            >
                {CAREER_CONSTANTS?.APPLY}
            </Button>
            <p className='lg:hidden block'>OR</p>
            <Link href="/careers" className="underline lg:hidden block">
                {CAREER_CONSTANTS?.OPEN_POSTIONS}
            </Link>
        </div>

        </form>
    </div>
  )
}

export default JobApplication