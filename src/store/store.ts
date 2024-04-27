import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/login-slices';
import { loginMW } from '../middlewares/loginMW';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loginMW),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
