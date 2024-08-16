import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileType } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const putProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
  'profile/putProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const profileData = getProfileForm(getState());

    try {
      const response = await extra.api.put<ProfileType>('/profile', profileData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Error while fetching profile data');
    }
  },
);
