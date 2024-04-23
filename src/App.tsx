import { LoginPage } from './components/pages/auth/login/LoginPage';
import { SignUpPage } from './components/pages/auth/signUp/SignUpPage';

function App() {
  return (
    <div className='flex flex-col items-center align-middle'>
      {/* <LoginPage /> */}
      <SignUpPage />
    </div>
  );
}

export default App;
