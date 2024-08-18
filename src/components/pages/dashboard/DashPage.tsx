import { useAppSelector } from '../../../store/hooks';
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
          length={10}
          title='Recent Transactions'
          transactions={transactions}
        />
      </div>
    </>
  );
};
