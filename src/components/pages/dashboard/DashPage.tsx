import { useAppSelector } from '../../../store/hooks';
import { ExpensesAddButton } from '../expenses/ExpensesAddButton';
import { DashOverview } from './dashOverview/DashOverview';
import { TransactionsTable } from './TransactionsTable';

export const DashPage = () => {
  const { transactions } = useAppSelector(
    (state) => state.expenses.fetchedExpenses
  );
  return (
    <>
      <DashOverview />
      <div className='flex gap-6 flex-col xl:flex-row'>
        <TransactionsTable
          title='Recent Transactions'
          transactions={transactions}
        />
      </div>
      <ExpensesAddButton />
    </>
  );
};
