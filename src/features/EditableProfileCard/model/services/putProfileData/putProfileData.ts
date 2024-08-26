import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProfileType } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const putProfileData = createAsyncThunk<ProfileType, string, ThunkConfig<string>>(
  'profile/putProfileData',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const profileData = getProfileForm(getState());

    try {
      const response = await extra.api.put<ProfileType>(`/profile/${profileId}`, profileData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Error while fetching profile data');
    }
  },
);
