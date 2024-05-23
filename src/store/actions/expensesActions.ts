import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MyRejectValue, handleAxiosError } from '../../helpers/handleAxiosError';

const EXP_URL = 'http://127.0.0.1:3000//expenses';

export const createExpense = createAsyncThunk<string, string, { rejectValue: MyRejectValue }>(
  'expenses/createExpense',
  async (expensesData, thunkAPI) => {
    try {
      const response = await axios.post(EXP_URL, expensesData);
      const { data } = response;
      console.log('data: ', data);
      return data;
    } catch (error) {
      console.error('error: ', error);
      return handleAxiosError(error, thunkAPI);
    }
  }
);
