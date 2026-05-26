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
        errors.push("Phone No. is required");
    }

    if (!formData.contact_information.address?.trim()) {
        errors.push("Address is required");
    }

    // Validate education
    if (!formData.education.length) {
            errors.push("Please add at least one educational qualification");
    } else {
        formData.education.forEach((edu, index) => {
            const missingFields = [];
            if (!edu.degree?.trim()) missingFields.push("Degree");
            if (!edu.institution?.trim()) missingFields.push("Institution");
            if (!edu.dates?.trim()) missingFields.push("Dates");
            
            if (missingFields.length > 0) {
                errors.push(`Fill all Required Fields\n (Education Entry ${index + 1}) \n ${missingFields.join("\n ")}`);
            }
        });
    }

    // Validate employment
    if (!formData.employment.length) {
        errors.push("Please add at least one Employment History");
    } else {
        formData.employment.forEach((emp, index) => {
            const missingFields = [];
            if (!emp.position?.trim()) missingFields.push("Position");
            if (!emp.company_name?.trim()) missingFields.push("Company Name");
            if (!emp.date?.trim()) missingFields.push("Date");
            
            if (missingFields.length > 0) {
                errors.push(`Fill all Required Fields\n (Employment Entry ${index + 1}) \n ${missingFields.join("\n ")}`);
            }
        });
    }

    // Validate skills
    if (!formData.key_skills?.length) {
        errors.push("Please add at least one skill");
    }
    if (!formData.possible_join_date) {
        errors.push("Please select a possible join date");
    } else {
        const selectedDate = new Date(formData.possible_join_date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time portion for date comparison

        if (isNaN(selectedDate.getTime())) {
            errors.push("Invalid join date format");
        } else if (selectedDate < today) {
            errors.push("Join date cannot be in the past");
        } else if (selectedDate.getFullYear() > today.getFullYear() + 100) {
            errors.push("Please select a reasonable join date");
        }
    }

    

    return errors;
};
