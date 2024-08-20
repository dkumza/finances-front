import { useAppSelector } from '../../../../store/hooks';
import { TransactionsTable } from '../TransactionsTable';

export const TIncomePage = () => {
  const { allIncomes } = useAppSelector(
    (state) => state.expenses.fetchUserExpenses
  );
  return (
    <>
      {allIncomes && (
        <TransactionsTable
          length={allIncomes.length}
          title='All Incomes'
          transactions={allIncomes}
        />
      )}
    </>
  );
};
