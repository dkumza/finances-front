import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MyRejectValue, handleAxiosError } from '../../helpers/handleAxiosError';

const EXP_URL = 'http://127.0.0.1:3000/expenses';
const token = localStorage.getItem('token');

export const createExpense = createAsyncThunk<string, object, { rejectValue: MyRejectValue }>(
  'expenses/createExpense',
  async (expensesData, thunkAPI) => {
    try {
      const response = await axios.post(EXP_URL, expensesData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { data } = response;
      console.log('data: ', data);
      return data;
    } catch (error) {
      console.error('error: ', error);
      return handleAxiosError(error, thunkAPI);
    }
  }
);

export const fetchExpenses = createAsyncThunk<string, void, { rejectValue: MyRejectValue }>(
  'expenses/fetchExpenses',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(EXP_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { data } = response;
      console.log('data: ', data);
      return data;
    } catch (error) {
      console.error('error: ', error);
      return handleAxiosError(error, thunkAPI);
    }
  }
);
