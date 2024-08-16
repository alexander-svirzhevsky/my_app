import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema, ProfileType } from '../types/profile';
import { getProfileData } from '../services/getProfileData/getProfileData';
import { putProfileData } from '../services/putProfileData/putProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  form: undefined,
  error: undefined,
  isLoading: false,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    restoreForm: (state) => {
      state.form = state.data;
      state.readonly = true;
    },
    modifyProfileForm: (state, action: PayloadAction<ProfileType>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getProfileData.fulfilled, (state, action: PayloadAction<ProfileType>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(getProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(putProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(putProfileData.fulfilled, (state, action: PayloadAction<ProfileType>) => {
        state.isLoading = false;
        state.readonly = true;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(putProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
