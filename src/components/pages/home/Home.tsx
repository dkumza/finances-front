import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { tokenStatus } from '../../../store/actions/authActions';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.login.token);

  // Check if token is valid if not redirect to login
  useEffect(() => {
    if (token) {
      dispatch(tokenStatus(token))
        .then(unwrapResult)
        .catch((error) => {
          console.log('Token validation error: ', error);
          navigate('/login');
          toast.error('Session expired');
        });
    }
  }, [token, dispatch, navigate]);

  return <div>Home</div>;
};
