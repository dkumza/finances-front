import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_URL = 'http://127.0.0.1:3000/auth/login';

export const login = createAsyncThunk(
  'login/loginUser',

  async (loginData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(LOGIN_URL, loginData);
      // console.log('response: ', response.data);
      return response.data.accessToken;
    } catch (error) {
      // console.log('error: ', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
