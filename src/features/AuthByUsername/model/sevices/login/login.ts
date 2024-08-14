import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constant/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type LoginParams = {
  username: string;
  password: string;
};

export const loginByUsername = createAsyncThunk<User, LoginParams, ThunkConfig<string>>(
  'auth/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<User>('/login', {
        username,
        password,
      });
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Wrond credentials');
    }
  },
);
