import { useAppSelector } from '../../../../store/hooks';
import { TransactionsTable } from '../TransactionsTable';

export const TTransactionsPage = () => {
  const { transactions } = useAppSelector(
    (state) => state.expenses.fetchedExpenses
  );
  return (
    <>
      {transactions && (
        <TransactionsTable
          length={transactions.length}
          title='All Transactions'
          transactions={transactions}
        />
      )}
    </>
  );
};
