import { createSlice } from '@reduxjs/toolkit';
import { createExpense } from '../actions/expensesActions';

export interface ExpenseState {
  expense: string;
  expensesStatus: boolean;
  error: string | undefined;
}

export const initialState: ExpenseState = {
  expense: '',
  expensesStatus: false,
  error: undefined,
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
        state.error = undefined;
      })
      .addCase(createExpense.rejected, (state, action) => {
        state.expensesStatus = false;
        state.error = action.error.message;
      });
  },
});

export default expensesSlice.reducer;
