import { AuthHeader } from '../AuthHeader';
import { SignUpForm } from './SignUpForm';

export const SignUpPage = () => {
  return (
    <div className='min-h-screen  flex flex-col justify-center items-center md:w-96 w-full'>
      <div className='flex flex-col w-full px-4'>
        <AuthHeader h='Sign Up' p='Fill up form and press Sign Up button to create an account' />
        <SignUpForm />
      </div>
    </div>
  );
};
