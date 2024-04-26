import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/slices/login-slices';
import { localStorageMW } from '../middlewares/localStorageMW';

export default configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMW),
});
