import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/pages/auth/login/LoginPage';
import { SignUpPage } from './components/pages/auth/signUp/SignUpPage';
import { Home } from './components/pages/home/Home';
import { useAppSelector } from './store/hooks';
import { ToastThemed } from './components/UI/ToastThemed.tsx';
import 'react-toastify/dist/ReactToastify.css';
import { PageNotFound } from './components/pages/pageNotFound/PageNotFound.tsx';
import { ExpensesPage } from './components/pages/expenses/ExpensesPage.tsx';
import { ExpensesAll } from './components/pages/expenses/ExpensesAll.tsx';
import { DashContainer } from './components/pages/dashboard/DashContainer.tsx';

function App() {
  const token = useAppSelector((state) => state.login.token);

  return (
    <div className='flex flex-col items-center align-middle'>
      <ToastThemed />
      <Routes>
        <Route path='/login' element={token ? <Navigate to='/' /> : <LoginPage />} />
        <Route path='/signup' element={token ? <Navigate to='/' /> : <SignUpPage />} />
        <Route path='/' element={token ? <Home /> : <Navigate to='/login' />} />
        <Route path='/dash' element={token ? <DashContainer /> : <Navigate to='/login' />} />
        <Route path='/expenses' element={token ? <Navigate to='/' /> : <ExpensesPage />} />
        <Route path='/expenses-all' element={<ExpensesAll />} />
        {/* 404 route */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
