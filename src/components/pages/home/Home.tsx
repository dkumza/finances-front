import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { tokenStatus } from '../../../store/actions/authActions';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../../../store/slices/authSlice';

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

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
    toast.success('Logged out');
  };

  return (
    <div>
      <div>Home</div>
      <div className='cursor-pointer' onClick={handleLogout}>
        Logout
      </div>
      <div className='cursor-pointer' onClick={() => navigate('/dash')}>
        Dashboard
      </div>
    </div>
  );
};
