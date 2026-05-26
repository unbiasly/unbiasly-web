import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '@/components/custom/careers/Application';

interface ApplicationState {
    formData: FormData;
}

const initialState: ApplicationState = {
    formData: {
        full_name: '',
        contact_information: {
            email: '',
            phone: '',
            address: ''
        },
        education: [{
            degree: '',
            institution: '',
            dates: ''
        }],
        employment: [{
            position: '',
            company_name: '',
            date: ''
        }],
        job_titles: [],
        company_names: [],
        key_skills: [],
        relevant_certifications: [''],
        possible_join_date: '',
        additional_information: ''
    },
};

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        updateFormData: (state, action: PayloadAction<FormData>) => {
            state.formData = action.payload;
        },
        resetFormData: (state) => {
            state.formData = initialState.formData;
        },
    }
});

export const { updateFormData, resetFormData } = applicationSlice.actions;
export default applicationSlice.reducer; 