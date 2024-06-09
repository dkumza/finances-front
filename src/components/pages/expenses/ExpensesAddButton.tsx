import { useNavigate } from 'react-router-dom';

export const ExpensesAddButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className='absolute cursor-pointer bg-primary m-6 bottom-0 right-0 h-16 w-16 hover:bg-lime-600 flex justify-center items-center rounded-full shadow-md'
      onClick={() => navigate('/expenses')}
    >
      Add
    </div>
  );
};
