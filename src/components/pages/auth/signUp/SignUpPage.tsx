import { useNavigate } from 'react-router-dom';
import { Button } from '../../../inputs/Button';
import { SignUpForm } from './SignUpForm';
import { FormHeader } from '../../../UI/FormHeader';

export const SignUpPage = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className='min-h-screen  flex flex-col justify-center items-center md:w-96 w-full'>
      <div className='flex flex-col w-full px-4'>
        <FormHeader
          h='Sign Up'
          p='Fill up form and press Sign Up button to create an account'
        />
        <SignUpForm />
        <div className='divider'>
          <p className='text-sm'>OR</p>
        </div>
        <Button action={handleNavigateToLogin} text='Login' color='' />
      </div>
    </div>
  );
};
