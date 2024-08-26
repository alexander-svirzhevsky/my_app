import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileType } from '../../types/profile';

export const getProfileData = createAsyncThunk<ProfileType, string, ThunkConfig<string>>(
  'profile/getProfileData',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<ProfileType>(`/profile/${profileId}`);

      return response.data;
    } catch (error) {
      return rejectWithValue('Error while fetching profile data');
    }
  },
);
