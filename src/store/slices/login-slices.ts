// login-slices.ts
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from './createSlice';
import { login, tokenStatus } from '../actions/login-actions';

export interface LoginState {
  token: string;
  tokenStatus: string;
  email: string;
  loading: boolean;
  error: string | null;
}

const localStorageToken = localStorage.getItem('token');
const localStorageEmail = localStorage.getItem('email');

export const initialState: LoginState = {
  token: localStorageToken || '',
  tokenStatus: '',
  email: localStorageEmail || '',
  loading: false,
  error: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(tokenStatus.fulfilled, (state, action: PayloadAction<string>) => {
        state.tokenStatus = action.payload;
        state.error = null;
      })
      .addCase(tokenStatus.rejected, (state, action: PayloadAction<unknown>) => {
        state.tokenStatus = '';
        state.error = (action.payload as { message: string }).message;
      });
  },
});

export const { setLoading } = loginSlice.actions;

export default loginSlice.reducer;
