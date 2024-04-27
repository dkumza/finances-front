import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/pages/auth/login/LoginPage';
import { SignUpPage } from './components/pages/auth/signUp/SignUpPage';
import { Home } from './components/pages/home/Home';
import { useAppSelector } from './store/hooks';
import { ToastThemed } from './components/UI/ToastThemed.tsx';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const token = useAppSelector((state) => state.login.token);

  return (
    <div className='flex flex-col items-center align-middle'>
      <ToastThemed />
      <Routes>
        <Route path='/' element={token ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
