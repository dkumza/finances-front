// login-slices.ts
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../app/createSlice';
import { login } from '../actions/login-actions';

export interface LoginState {
  token: string;
  loading: boolean;
  error: string | null;
}

const localStorageToken = localStorage.getItem('token');

export const initialState: LoginState = {
  token: localStorageToken || '',
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
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.token = payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setLoading } = loginSlice.actions;

export default loginSlice.reducer;
