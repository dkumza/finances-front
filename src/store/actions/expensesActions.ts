import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MyRejectValue, handleAxiosError } from '../../helpers/handleAxiosError';
import { FormValues } from '../../components/inputs/Input';

const EXP_URL = 'http://127.0.0.1:3000/expenses';
const token = localStorage.getItem('token');

export const createExpense = createAsyncThunk<string, FormValues, { rejectValue: MyRejectValue }>(
  'expenses/createExpense',
  async (expensesData, thunkAPI) => {
    const fixData = { ...expensesData };
    // "??" 0 Prevents errors when trying to access property 'amount' on null or undefined
    if (expensesData.category !== 'Salary') fixData.amount = -Math.abs(expensesData.amount ?? 0);
    try {
      const response = await axios.post(EXP_URL, fixData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { data } = response;
      console.log('data: ', data);
      return data._id;
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
