import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';
import { getProfileData } from '../services/getProfileData/getProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfileData.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
