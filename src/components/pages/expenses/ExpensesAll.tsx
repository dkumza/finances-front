import { useAppSelector } from '../../../store/hooks';

export const ExpensesAll = () => {
  const { transactions } = useAppSelector((state) => state.expenses.fetchedExpenses);
  return (
    <div className='pt-6'>
      {transactions.map((transaction) => (
        <div key={transaction._id} className='flex justify-between p-4 bg-base-100 rounded-lg'>
          <div>
            <div className='text-lg'>{transaction.category}</div>
            <div className='text-sm'>{transaction.description}</div>
            <div className='text-sm'>{transaction.createdAt}</div>
          </div>
          <div className='text-lg'>{transaction.amount}</div>
        </div>
      ))}
    </div>
  );
};
