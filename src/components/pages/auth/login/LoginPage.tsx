import { Button } from '../../../inputs/Button';
import { AuthHeader } from '../AuthHeader';
import { LoginForm } from './LoginForm';

export const LoginPage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-96'>
      <div className='flex flex-col w-full px-4'>
        <AuthHeader h='Welcome back' p='Enter your login information to see your account' />
        <LoginForm />
        <div className='divider'>OR</div>
        <Button text='Sign Up' color='' />
      </div>
    </div>
  );
};
