import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MyRejectValue, handleAxiosError } from '../../helpers/handleAxiosError';

const AUTH_URL = 'http://127.0.0.1:3000';

export const tokenStatus = createAsyncThunk<string, string, { rejectValue: MyRejectValue }>(
  'login/tokenStatus',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(`${AUTH_URL}/auth/status`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      return handleAxiosError(error, thunkAPI);
    }
  }
);

export const login = createAsyncThunk<string, object, { rejectValue: MyRejectValue }>(
  'login/loginUser',
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post(`${AUTH_URL}/auth/login`, loginData);
      // console.log('response: ', response.data);
      return response.data.accessToken;
    } catch (error) {
      return handleAxiosError(error, thunkAPI);
    }
  }
);

export const signUp = createAsyncThunk<string, object, { rejectValue: MyRejectValue }>(
  'login/signUpUser',
  async (signUpData, thunkAPI) => {
    try {
      const response = await axios.post(`${AUTH_URL}/users`, signUpData);
      const { data } = response;
      console.log('data: ', data);
      return data;
    } catch (error) {
      return handleAxiosError(error, thunkAPI);
    }
  }
);
