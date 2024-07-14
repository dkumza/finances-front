import { FormHeader } from '../../UI/FormHeader';
import { ExpensesForm } from './ExpensesForm';

export const ExpensesPage = () => {
  return (
    <div className='flex flex-col justify-center items-center md:w-96 w-80 z-0'>
      <div className='flex flex-col w-full px-4 py-16'>
        <FormHeader
          h='Add expense'
          p='Enter your expense to track your balance'
        />
        <ExpensesForm />
      </div>
    </div>
  );
};
