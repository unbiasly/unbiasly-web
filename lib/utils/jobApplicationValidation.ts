import { FormData } from "@/components/custom/careers/Application";

export const validateJobApplication = (formData: FormData): string[] => {
    const errors: string[] = [];

    // Validate personal information
    if (!formData.full_name?.trim()) {
        errors.push("Name is required");
    }

    // Validate contact information
    if (!formData.contact_information.email?.trim()) {
        errors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact_information.email)) {
        errors.push("Invalid email format");
    }

    if (!formData.contact_information.phone?.trim()) {
        errors.push("Phone number is required");
    }

    if (!formData.contact_information.address?.trim()) {
        errors.push("Address is required");
    }

    // Validate education
    if (!formData.education.length) {
        errors.push("At least one education entry is required");
    } else {
        formData.education.forEach((edu, index) => {
            if (!edu.degree?.trim()) {
                errors.push(`Degree is required for education entry ${index + 1}`);
            }
            if (!edu.institution?.trim()) {
                errors.push(`Institution is required for education entry ${index + 1}`);
            }
            if (!edu.dates?.trim()) {
                errors.push(`Dates are required for education entry ${index + 1}`);
            }
        });
    }

    // Validate employment
    if (!formData.employment.length) {
        errors.push("At least one employment entry is required");
    } else {
        formData.employment.forEach((emp, index) => {
            if (!emp.position?.trim()) {
                errors.push(`Position is required for employment entry ${index + 1}`);
            }
            if (!emp.company_name?.trim()) {
                errors.push(`Company name is required for employment entry ${index + 1}`);
            }
            if (!emp.date?.trim()) {
                errors.push(`Date is required for employment entry ${index + 1}`);
            }
        });
    }

    // Validate skills
    if (!formData.key_skills?.length) {
        errors.push("At least one skill is required");
    }

    return errors;
};
