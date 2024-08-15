import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileType } from '../../types/profile';

export const getProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
  'profile/getProfileData',
  async (_, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<ProfileType>('/profile');
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Wrond credentials');
    }
  },
);
