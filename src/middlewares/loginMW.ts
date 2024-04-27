import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  email: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const loginMW: Middleware<{}, RootState> = (storeApi) => (next) => (action) => {
  const result = next(action);
  // getting only the token from the store, and saving as JSON to local storage
  const tokenState = storeApi.getState().login.token;
  const tokenJSON = JSON.stringify(tokenState);
  localStorage.setItem('token', tokenJSON);

  //  decode the token and save needed data to local storage
  if (tokenState) {
    const decodedToken: DecodedToken = jwtDecode(tokenState);
    const email = decodedToken.email;
    localStorage.setItem('email', email);
  }
  return result;
};
