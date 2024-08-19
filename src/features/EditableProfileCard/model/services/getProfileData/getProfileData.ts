import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileType } from '../../types/profile';

export const getProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
  'profile/getProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<ProfileType>('/profile');

      return response.data;
    } catch (error) {
      return rejectWithValue('Error while fetching profile data');
    }
  },
);
