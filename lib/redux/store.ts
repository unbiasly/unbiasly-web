import { configureStore } from '@reduxjs/toolkit';
import careerReducer from './features/careerSlice';
import applicationReducer from './features/applicationSlice';

export const store = configureStore({
  reducer: {
    career: careerReducer,
    application: applicationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 