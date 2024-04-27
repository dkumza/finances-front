import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

// eslint-disable-next-line @typescript-eslint/ban-types
export const localStorageMW: Middleware<{}, RootState> = (storeApi) => (next) => (action) => {
  const result = next(action);
  // getting only the token from the store, and saving as JSON to local storage
  const tokenState = storeApi.getState().login.token;
  const tokenJSON = JSON.stringify(tokenState);
  localStorage.setItem('token', tokenJSON);
  return result;
};
