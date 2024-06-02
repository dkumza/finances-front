import { useEffect } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { fetchExpenses } from '../../../store/actions/expensesActions';

export const ExpensesAll = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  return <div>ExpensesAll</div>;
};
