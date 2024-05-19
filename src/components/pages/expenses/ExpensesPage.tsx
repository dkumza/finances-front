import { useNavigate } from 'react-router-dom';
import { AuthHeader } from '../auth/AuthHeader';

export const ExpensesPage = () => {
  //   const navigate = useNavigate();

  //   const handleNavigateToSignUp = () => {
  //     navigate('/signup');
  //   };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center md:w-96 w-80'>
      <div className='flex flex-col w-full px-4'>
        <AuthHeader h='Add expense' p='Enter your expense to track your balance' />
      </div>
    </div>
  );
};
