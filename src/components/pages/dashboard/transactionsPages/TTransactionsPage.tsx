import { useAppSelector } from '../../../../store/hooks';
import { TransactionsTable } from '../TransactionsTable';

export const TTransactionsPage = () => {
  const { transactions } = useAppSelector(
    (state) => state.expenses.fetchedExpenses
  );
  return (
    <>
      <div>ExpensesPage</div>
      {transactions && (
        <TransactionsTable
          title='All Transactions'
          transactions={transactions}
        />
      )}
    </>
  );
};
