import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../app/createSlice';

export interface LoginState {
  email: string;
  token: string;
  loading: boolean;
}

export const initialState: LoginState = {
  email: '',
  token: '',
  loading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: (create) => ({
    setEmail: create.reducer((state, action: PayloadAction<string>) => {
      state.email = action.payload;
    }),
    setToken: create.reducer((state, action: PayloadAction<string>) => {
      state.token = action.payload;
    }),
    setLoading: create.reducer((state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }),
  }),
});
