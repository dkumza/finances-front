import { configureStore } from '@reduxjs/toolkit';
import { loginMW } from '../middlewares/loginMW';
import expensesReducer from './slices/expensesSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    login: authReducer,
    expenses: expensesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loginMW),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
