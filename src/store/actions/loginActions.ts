import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MyRejectValue, handleAxiosError } from '../../helpers/handleAxiosError';

const AUTH_URL = 'http://127.0.0.1:3000/auth';

export const login = createAsyncThunk<
  string,
  { email?: string; password?: string },
  { rejectValue: MyRejectValue }
>('login/loginUser', async (loginData, thunkAPI) => {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, loginData);
    // console.log('response: ', response.data);
    return response.data.accessToken;
  } catch (error) {
    return handleAxiosError(error, thunkAPI);
  }
});

export const tokenStatus = createAsyncThunk<string, string, { rejectValue: MyRejectValue }>(
  'login/tokenStatus',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(`${AUTH_URL}/status`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      return handleAxiosError(error, thunkAPI);
    }
  }
);
