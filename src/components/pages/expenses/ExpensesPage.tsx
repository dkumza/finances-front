import { AuthHeader } from '../../UI/Header';
import { ExpensesForm } from './ExpensesForm';

export const ExpensesPage = () => {
  return (
    <div className='flex flex-col justify-center items-center md:w-96 w-80'>
      <div className='flex flex-col w-full px-4 py-24'>
        <AuthHeader
          h='Add expense'
          p='Enter your expense to track your balance'
        />
        <ExpensesForm />
      </div>
    </div>
  );
};
