import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/pages/auth/login/LoginPage';
import { SignUpPage } from './components/pages/auth/signUp/SignUpPage';
import { Home } from './components/pages/home/Home';

function App() {
  const logged = false;
  return (
    <div className='flex flex-col items-center align-middle'>
      <Routes>
        <Route path='/' element={logged ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
