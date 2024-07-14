import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/pages/auth/login/LoginPage';
import { SignUpPage } from './components/pages/auth/signUp/SignUpPage';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { ToastThemed } from './components/UI/ToastThemed.tsx';
import 'react-toastify/dist/ReactToastify.css';
import { PageNotFound } from './components/pages/pageNotFound/PageNotFound.tsx';
import { ExpensesPage } from './components/pages/expenses/ExpensesPage.tsx';
import { DashContainer } from './components/pages/dashboard/DashContainer.tsx';
import { useEffect } from 'react';
import { tokenStatus } from './store/actions/authActions.ts';
import { logout } from './store/slices/authSlice.ts';

function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.login.token);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(tokenStatus(token)).then((res) => {
        if (res.type === 'auth/tokenStatus/rejected') {
          dispatch(logout());
        }
      });
    }
  }, [token, dispatch]);

  return (
    <div className='flex flex-col items-center align-middle'>
      <ToastThemed />
      <Routes>
        <Route
          path='/login'
          element={token ? <Navigate to='/' /> : <LoginPage />}
        />
        <Route
          path='/signup'
          element={token ? <Navigate to='/' /> : <SignUpPage />}
        />
        <Route
          path='/expenses'
          element={!token ? <Navigate to='/' /> : <ExpensesPage />}
        />
        <Route
          path='/*'
          element={token ? <DashContainer /> : <Navigate to='/login' />}
        />
        {/* 404 route */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
