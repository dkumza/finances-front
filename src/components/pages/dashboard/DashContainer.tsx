import { ExpensesAddButton } from '../expenses/ExpensesAddButton';
import { ExpensesAll } from '../expenses/ExpensesAll';
import { DashNavBar } from './dashNavBar/DashNavBar';
import { DashOverview } from './dashOverview/DashOverview';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { fetchExpenses } from '../../../store/actions/expensesActions';

export const DashContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);
  return (
    <div className='flex flex-col w-full'>
      <DashNavBar />
      <div className='p-6 bg-base-200'>
        <DashOverview />
        <div className='flex gap-6 flex-col xl:flex-row'>
          <ExpensesAll />
          <ExpensesAll />
        </div>
        <ExpensesAddButton />
      </div>
    </div>
  );
};
