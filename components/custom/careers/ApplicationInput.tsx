import { Input } from "../../ui/input";
import { Plus, X } from 'lucide-react'
import { Textarea } from "../../ui/textarea";
import React, { useState, useEffect } from "react";
import { CAREER_CONSTANTS } from "@/lib/constants/career-constants";

interface PersonalInputFields {
    id: string;
    label : string;
    type : string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    min?: string;
}

interface TitleInputFields {
    title: string;
    onClick: () => void;
}

interface RemoveButtonProps {
    onClick: () => void;
}

interface EmploymentInputFields {
    employment: {
        position: string;
        company_name: string;
        date: string;
    }[];
    onChange?: (employment: Array<{
        position: string;
        company_name: string;
        date: string;
    }>) => void;
}

interface EducationInputFields {
    education: {
        degree: string;
        institution: string;
        dates: string;
        status?: 'current' | 'completed';
        startDate?: string;
        endDate?: string;
    }[];
    onChange?: (education: any[]) => void;
}

interface CertificationInputs {
    certifications: string[];
    onChange?: (certifications: string[]) => void;
}

interface SkillListProps {
  skills: string[]  
  onChange?: (skills: string[]) => void
}

export const PersonalInput: React.FC<PersonalInputFields> = ({ 
    id, 
    label, 
    type, 
    value, 
    onChange, 
    placeholder,
    min,
    required = id !== 'address' && id !== 'additional' // Set default based on field id
}) => {
    const getValidationProps = () => {
        const props: any = {
            required: required,
            'aria-required': required,
        };

        switch (type) {
            case 'email':
                props.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
                props.title = "Please enter a valid email address";
                break;
            case 'tel':
                props.pattern = "[0-9]{10}";
                props.title = "Please enter a valid 10-digit phone number";
                break;
            case 'text':
                if (required) {
                    props.minLength = 2;
                    props.title = "This field is required";
                }
                break;
        }

        return props;
    };

    return (
        <div className="border-gray-30">
            <label htmlFor={id} className="block font-bold text-lg mb-2">
                {label} {required && <span className="text-white">*</span>}
            </label>
            {type === "textarea" ? (
                <Textarea 
                    id={id} 
                    required={required}
                    className="border-gray-30 min-h-[100px] rounded-xl" 
                    value={value} 
                    onChange={onChange} 
                    placeholder={placeholder}
                    minLength={required ? 10 : undefined}
                    title={required ? "Please enter at least 10 characters" : undefined}
                />
            ) : (
                <Input 
                    id={id} 
                    type={type} 
                    className="lg:rounded-xl border-gray-30 rounded-full" 
                    value={value} 
                    min={min}
                    onChange={onChange} 
                    placeholder={placeholder}
                    {...getValidationProps()}
                />
            )}
        </div>
    );
};

const TitleAddButton: React.FC<TitleInputFields> = ({ title, onClick }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick();
    };

    return (
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button title='Add Entry' onClick={handleClick} className="flex bg-[#D9D9D98A] rounded-full items-center space-x-2 p-1 text-gray-400">
                <Plus color="white" className="h-5 w-5" />
            </button>
        </div>
    )
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick }) => {
    return (
        <div className="w-full flex justify-end">
            <button aria-label="Remove" type="button" onClick={onClick} className="flex bg-[#D9D9D98A] rounded-full items-center space-x-1 p-1 text-gray-400">
                <X color="white" className="h-5 w-5" />
            </button>
        </div>
    )
}

export const EmploymentInput: React.FC<EmploymentInputFields> = ({ employment = [], onChange }) => {
    const [employeeInputs, setEmployeeInputs] = useState(employment);

    useEffect(() => {
        setEmployeeInputs(employment);
    }, [employment]);

    const addEmployeeInput = () => {
        const newInputs = [...employeeInputs, { position: '', company_name: '', date: '' }];
        setEmployeeInputs(newInputs);
        onChange?.(newInputs);
    };

    const removeEmployeeInput = (index: number) => {
        const newInputs = employeeInputs.filter((_, i) => i !== index);
        setEmployeeInputs(newInputs);
        onChange?.(newInputs);
    }

    const handleInputChange = (index: number, field: string, value: string) => {
        const newInputs = employeeInputs.map((input, i) => {
            if (i === index) {
                return { ...input, [field]: value };
            }
            return input;
        });
        setEmployeeInputs(newInputs);
        onChange?.(newInputs);
    };

    return (
        <div className="py-1">
            <TitleAddButton title="Recent Employment" onClick={addEmployeeInput} />
            {employeeInputs.map((employeeInput, index) => (
                <div className=" relative rounded-lg mb-8 mt-3 space-y-4" key={index}>
                    <div className="border-gray-30 space-y-2">
                        <label htmlFor={`position-${index}`} className="block text-sm font-medium">
                            {CAREER_CONSTANTS?.EMPLOYMENT_INPUTS.position}
                        </label>
                        <Input 
                            id={`position-${index}`}
                            value={employeeInput.position}
                            onChange={(e) => handleInputChange(index, 'position', e.target.value)}
                            placeholder={CAREER_CONSTANTS?.EMPLOYMENT_INPUTS.examples.position}
                            className="lg:rounded-xl border-gray-30 rounded-full"
                            required
                            minLength={2}
                            title="Position is required"
                        />
                    </div>

                    <div className="border-gray-30 space-y-2">
                        <label htmlFor={`company-${index}`} className="block text-sm font-medium">
                            {CAREER_CONSTANTS?.EMPLOYMENT_INPUTS.company}
                        </label>
                        <Input 
                            id={`company-${index}`}
                            value={employeeInput.company_name}
                            onChange={(e) => handleInputChange(index, 'company_name', e.target.value)}
                            placeholder={CAREER_CONSTANTS?.EMPLOYMENT_INPUTS.examples.company}
                            className="lg:rounded-xl border-gray-30 rounded-full"
                            required
                            minLength={2}
                            title="Company name is required"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Duration</label>
                        <div className="border-gray-30">
                            <Input 
                                type="text"
                                value={employeeInput.date}
                                onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                                placeholder="e.g. Feb 2024 - Present"
                                className="w-full lg:rounded-xl border-gray-30 rounded-full"
                            />
                        </div>
                    </div>
                    <RemoveButton onClick={() => removeEmployeeInput(index)} />
                </div>
            ))}
        </div>
    );
};

export const EducationSection: React.FC<EducationInputFields> = ({ education = [], onChange }) => {
    const [educationInputs, setEducationInputs] = useState(education);

    useEffect(() => {
        setEducationInputs(education);
    }, [education]);

    const addEducationInput = () => {
        const newInput = {
            degree: '',
            institution: '',
            dates: '',
            startDate: '',
            endDate: '',
            status: 'completed' as const
        };
        const newInputs = [...educationInputs, newInput];
        setEducationInputs(newInputs);
        onChange?.(newInputs);
    };

    const removeEducationInput = (index: number) => {
        const newInputs = educationInputs.filter((_, i) => i !== index);
        setEducationInputs(newInputs);
        onChange?.(newInputs);
    };

    const handleInputChange = (index: number, field: string, value: string) => {
        const newInputs = educationInputs.map((input, i) => {
            if (i === index) {
                const updatedInput = { ...input, [field]: value };
                
                return updatedInput;
            }
            return input;
        });
        setEducationInputs(newInputs);
        onChange?.(newInputs);
    };

    const handleStatusChange = (index: number, value: string) => {
        const newInputs = educationInputs.map((input, i) => {
            if (i === index) {
                if (value === 'current') {
                    return { ...input, status: 'current' as const };
                }
                return { ...input, status: 'completed' as const };
            }
            return input;
        });
        setEducationInputs(newInputs);
        onChange?.(newInputs);
    };

    return (
        <div className="py-5">
            <TitleAddButton title="Education" onClick={addEducationInput} />
            {educationInputs.map((educationInput, index) => (
                <div className="space-y-4 rounded-lg mt-3 mb-10" key={index}>
                    <div className="grid grid-cols-4 gap-2">
                        <div className="border-gray-30 col-span-3 space-y-2">
                            <label htmlFor={`institution-${index}`} className="block text-sm font-medium">
                                {CAREER_CONSTANTS?.EDUCATION_INPUTS?.institute} <span className="text-white">*</span>
                            </label>
                            <Input 
                                id={`institution-${index}`}
                                value={educationInput.institution}
                                onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
                                className="lg:rounded-xl border-gray-30 rounded-full"
                                required
                                minLength={2}
                                title="Institution name is required"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor={`status-${index}`} className="block text-sm font-medium">
                                Status
                            </label>
                            <select
                                id={`status-${index}`}
                                value={educationInput.status}
                                onChange={(e) => handleStatusChange(index, e.target.value)}
                                className="bg-transparent flex h-10 items-center w-full justify-between rounded-xl lg:rounded-xl border-gray-30 border px-2 text-sm focus:ring-0"
                            >
                                <option className="text-white bg-black" value="completed">Completed</option>
                                <option className="text-white bg-black" value="current">Current</option>
                            </select>
                        </div>
                    </div>

                    <div className="border-gray-30 space-y-2">
                        <label htmlFor={`degree-${index}`} className="block text-sm font-medium">
                            {CAREER_CONSTANTS?.EDUCATION_INPUTS?.degree}
                        </label>
                        <Input 
                            id={`degree-${index}`}
                            value={educationInput.degree}
                            onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                            className="lg:rounded-xl border-gray-30 rounded-full"
                            required
                            minLength={2}
                            title="Degree name is required"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Duration</label>
                        <div className="flex items-center gap-4">
                            <div className="border-gray-30 flex-1">
                                <Input 
                                    type="text"
                                    value={educationInput.dates}
                                    onChange={(e) => handleInputChange(index, 'dates', e.target.value)}
                                    placeholder="e.g. Aug 2019 - July 2023"
                                    className="w-full lg:rounded-xl border-gray-30 rounded-full"
                                />
                            </div>
                            <span className="text-lg">
                                {educationInput.status === 'current' ? 'ongoing' : 'to'}
                            </span>
                            {educationInput.status !== 'current' && (
                                <div className="border-gray-30 flex-1">
                                    <Input 
                                        type="text"
                                        value={educationInput.endDate}
                                        onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
                                        placeholder="e.g. July 2023"
                                        className="w-full lg:rounded-xl border-gray-30 rounded-full"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <RemoveButton onClick={() => removeEducationInput(index)} />
                </div>
            ))}
        </div>
    );
}

export const RelevantCertifications: React.FC<CertificationInputs> = ({ certifications = [], onChange }) => {
    const [certificationList, setCertificationList] = useState(certifications);

    useEffect(() => {
        setCertificationList(certifications);
    }, [certifications]);

    const addCertification = () => {
        const newList = [...certificationList, ''];
        setCertificationList(newList);
        onChange?.(newList);
    };

    const handleRemoveCertification = (index: number) => {
        const newList = certificationList.filter((_, i) => i !== index);
        setCertificationList(newList);
        onChange?.(newList);
    };

    const handleCertificationChange = (index: number, value: string) => {
        const newList = certificationList.map((item, i) => 
            i === index ? value : item
        );
        setCertificationList(newList);
        onChange?.(newList);
    };

    return(
        <div className="py-1">
            <TitleAddButton title="Relevant Certifications" onClick={addCertification} />
            {certificationList.map((certification: string, index: number) => (
                <div className="flex items-center gap-3" key={index}>
                <Input 
                    key={index}
                    id={`certification-${index}`}
                    type="text" 
                    placeholder="e.g. AWS Certified Solutions Architect"
                    required={false}
                    className="placeholder-white/50 lg:rounded-xl border-gray-30 rounded-full my-5" 
                    value={certification}
                    onChange={(e) => handleCertificationChange(index, e.target.value)}
                />
                <button aria-label="Remove Certification" onClick={() => handleRemoveCertification(index)} className="flex items-center text-gray-400">
                        <X color="white" className="h-5 w-5" />
                    </button>
                </div>
            ))}

        </div>
    );
};

export const SkillsSection: React.FC<SkillListProps> = ({ skills = [], onChange }) => {
  const [localSkills, setLocalSkills] = useState<string[]>(skills)
  const [inputValue, setInputValue] = useState("")

  // Sync with parent's skills data
  useEffect(() => {
    setLocalSkills(skills)
  }, [skills])

  const handleAddSkill = () => {
    if (inputValue.trim()) {
      const updatedSkills = [...localSkills, inputValue.trim()]
      setLocalSkills(updatedSkills)
      onChange?.(updatedSkills)
      setInputValue("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>,) => {
    if (e.key === "Enter") {
        e.preventDefault()
        handleAddSkill()
    }
  }

  const removeSkill = (indexToRemove: number) => {
    const updatedSkills = localSkills.filter((_, index) => index !== indexToRemove)
    setLocalSkills(updatedSkills)
    onChange?.(updatedSkills)
  }

  return (
    <div className="py-2">
      <h2 className="mb-2 text-2xl font-bold text-white">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {localSkills.map((skill, index) => (
          <div
            key={index}
            className="group relative flex items-center rounded-full border border-white/20 bg-transparent px-4 py-1.5 transition-colors hover:bg-[#D9D9D9] text-white hover:text-black"
          >
            <span className="text-sm">{skill}</span>
            <button
              aria-label="Remove Skill"
              type="button"
              onClick={() => removeSkill(index)}
              className="ml-2 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <X className="h-4 w-4 text-black" />
            </button>
          </div>
        ))}
        <button 
            type="button"
            aria-label="Add Skill" 
            onClick={handleAddSkill} 
            className="flex py-2 px-7 items-center justify-center rounded-xl opacity-80 bg-[#D9D9D98A]">
          <Plus className="h-5 w-5 text-white" />
        </button>
      </div>
      <div className="mt-4">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={CAREER_CONSTANTS?.SKILLS_INPUTS.placeholder}
          className="w-1/2 rounded-2xl border border-gray-30 bg-transparent px-4 py-2 text-white placeholder-white/50 focus:outline-none"
        />
      </div>
    </div>
  )
}

