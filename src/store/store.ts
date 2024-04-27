import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/login-slices';
import { localStorageMW } from '../middlewares/localStorageMW';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMW),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
