import { createSlice } from '@reduxjs/toolkit';
import { createExpense, fetchExpenses } from '../actions/expensesActions';

export interface Transaction {
  _id: string;
  category: string;
  description: string;
  date: string;
  amount: number;
  createdAt: string;
}

export interface Expense {
  allExpenses: Transaction[];
  allIncomes: Transaction[];
  balance: number;
  totalExpense: number;
  totalIncome: number;
  transactions: Transaction[];
  savings: number;
}

export interface ExpenseState {
  expense: string;
  fetchedExpenses: Expense;
  expensesStatus: 'idle' | 'loading' | 'success' | 'failed';
  error: string | undefined;
}

export const initialState: ExpenseState = {
  expense: '',
  fetchedExpenses: {
    allExpenses: [],
    allIncomes: [],
    balance: 0,
    totalExpense: 0,
    totalIncome: 0,
    transactions: [
      {
        _id: '',
        category: '',
        description: '',
        date: '',
        amount: 0,
        createdAt: '',
      },
    ],
    savings: 0,
  },
  expensesStatus: 'idle',
  error: undefined,
};

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setExpenses: (state, action) => {
      state.fetchedExpenses = action.payload;
    },
    setExpenseToDelete: (state, action) => {
      state.expense = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createExpense.pending, (state) => {
        state.expensesStatus = 'loading';
      })
      .addCase(createExpense.fulfilled, (state, { payload }) => {
        state.expensesStatus = 'success';
        state.expense = payload;
        state.error = undefined;
      })
      .addCase(createExpense.rejected, (state, action) => {
        state.expensesStatus = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchExpenses.pending, (state) => {
        state.expensesStatus = 'loading';
      })
      .addCase(fetchExpenses.fulfilled, (state, { payload }) => {
        state.expensesStatus = 'success';
        state.fetchedExpenses = payload;
        state.error = undefined;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.expensesStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setExpenses, setExpenseToDelete } = expensesSlice.actions;

export default expensesSlice.reducer;
