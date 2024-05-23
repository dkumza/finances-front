import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { tokenStatus } from '../../../store/actions/loginActions';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginState } from '../../../store/slices/login-slices';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.login.token);

  // Check if token is valid if not redirect to login
  useEffect(() => {
    if (token) {
      dispatch(tokenStatus(token)).then((result: AsyncThunkAction<LoginState, string, object>) => {
        if (tokenStatus.rejected.match(result)) {
          navigate('/login');
          toast.error('Session expired');
          console.log('error: ', result.error);
        }
      });
    }
  }, [token, dispatch, navigate]);

  return <div>Home</div>;
};
