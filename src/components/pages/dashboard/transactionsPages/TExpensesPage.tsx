import { useAppSelector } from '../../../../store/hooks';
import { TransactionsTable } from '../TransactionsTable';

export const TExpensesPage = () => {
  const { allExpenses } = useAppSelector(
    (state) => state.expenses.fetchedExpenses
  );
  return (
    <>
      <div>ExpensesPage</div>
      {allExpenses && (
        <TransactionsTable title='All Expenses' transactions={allExpenses} />
      )}
    </>
  );
};
