import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

const AUTH_URL = 'http://127.0.0.1:3000/auth';

export const login = createAsyncThunk(
  'login/loginUser',

  async (loginData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(`${AUTH_URL}/login`, loginData);
      // console.log('response: ', response.data);
      return response.data.accessToken;
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue({
        message: axiosError.message,
        status: axiosError.response?.status,
      });
    }
  }
);

export const tokenStatus = createAsyncThunk(
  'login/tokenStatus',

  async (token: string, thunkAPI) => {
    try {
      const response = await axios.get(`${AUTH_URL}/status`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue({
        message: axiosError.message,
        status: axiosError.response?.status,
      });
    }
  }
);
