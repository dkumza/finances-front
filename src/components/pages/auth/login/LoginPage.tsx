import { useNavigate } from 'react-router-dom';
import { Button } from '../../../inputs/Button';
import { AuthHeader } from '../../../UI/Header';
import { LoginForm } from './LoginForm';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleNavigateToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center md:w-96 w-80'>
      <div className='flex flex-col w-full px-4'>
        <AuthHeader h='Welcome back' p='Enter your login information to see your account' />
        <LoginForm />
        <div className='divider'>
          <p className='text-sm'>OR</p>
        </div>
        <Button action={handleNavigateToSignUp} text='Sign Up' color='' />
      </div>
    </div>
  );
};
