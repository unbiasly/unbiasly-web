import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Job } from '@/service/api.interface';

interface CareerState {
  selectedJob: Job | null;
}

const initialState: CareerState = {
  selectedJob: null
};

const careerSlice = createSlice({
  name: 'career',
  initialState,
  reducers: {
    setSelectedJob: (state, action: PayloadAction<Job>) => {
      state.selectedJob = action.payload;
    },
    clearSelectedJob: (state) => {
      state.selectedJob = null;
    }
  }
});

export const { setSelectedJob, clearSelectedJob } = careerSlice.actions;
export default careerSlice.reducer; 