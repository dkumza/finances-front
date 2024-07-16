import { useAppSelector } from '../../../../store/hooks';
import { TransactionsTable } from '../TransactionsTable';

export const TIncomePage = () => {
  const { allIncomes } = useAppSelector(
    (state) => state.expenses.fetchedExpenses
  );
  return (
    <>
      {allIncomes && (
        <TransactionsTable title='All Incomes' transactions={allIncomes} />
      )}
    </>
  );
};
