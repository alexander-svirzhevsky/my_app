import { User, userActions } from '@/entities/User';
import i18n from '@/shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constant/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authActions } from '../../slice/authSlice';

type LoginParams = {
    username: string;
    password: string;
};

export const loginByUsername = createAsyncThunk<User, LoginParams, { rejectValue: string }>(
    'auth/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username,
                password,
            });
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            thunkAPI.dispatch(authActions.clearAuthData());

            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('Wrond credentials');
        }
    },
);
