import { createSlice } from '@reduxjs/toolkit';
import { createExpense } from '../actions/expensesActions';

export interface ExpenseState {
  expense: string;
  expensesStatus: boolean;
  error: string | null;
}

const initialState: ExpenseState = {
  expense: '',
  expensesStatus: false,
  error: null,
};

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createExpense.pending, (state) => {
        state.expensesStatus = true;
      })
      .addCase(createExpense.fulfilled, (state, { payload }) => {
        state.expensesStatus = false;
        state.expense = payload;
        state.error = null;
      })
      .addCase(createExpense.rejected, (state, action) => {
        state.expensesStatus = false;
        state.error = (action.payload as { message: string }).message;
      });
  },
});

export default expensesSlice.reducer;
