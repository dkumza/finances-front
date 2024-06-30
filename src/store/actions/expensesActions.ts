import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  MyRejectValue,
  handleAxiosError,
} from '../../helpers/handleAxiosError';
import { FormValues } from '../../components/inputs/Input';
import { Expense } from '../slices/expensesSlice';
import { RootState } from '../store';

export interface FetchExp {
  payload: {
    message: string;
    status: number;
  };
}

const EXP_URL = 'http://127.0.0.1:3000/expenses';

export const createExpense = createAsyncThunk<
  string,
  FormValues,
  { state: RootState; rejectValue: MyRejectValue }
>('expenses/createExpense', async (expensesData, thunkAPI) => {
  const token = thunkAPI.getState().login.token;
  const fixData = { ...expensesData };
  // "??" 0 Prevents errors when trying to access property 'amount' on null or undefined
  if (expensesData.category !== 'Salary')
    fixData.amount = -Math.abs(expensesData.amount ?? 0);
  try {
    const response = await axios.post(EXP_URL, fixData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { data } = response;
    return data._id;
  } catch (error) {
    console.error('error: ', error);
    return handleAxiosError(error, thunkAPI);
  }
});

export const fetchExpenses = createAsyncThunk<
  Expense,
  void,
  { state: RootState; rejectValue: MyRejectValue }
>('expenses/fetchExpenses', async (_, thunkAPI) => {
  const token = thunkAPI.getState().login.token;
  try {
    const response = await axios.get(EXP_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.error('error: ', error);
    const axiosError = handleAxiosError(error, thunkAPI) as unknown as FetchExp;
    const { message, status } = axiosError.payload;
    return thunkAPI.rejectWithValue({ message, status });
  }
});
