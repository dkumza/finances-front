import { ExpensesAddButton } from '../expenses/ExpensesAddButton';
import { ExpensesAll } from '../expenses/ExpensesAll';
import { DashNavBar } from './dashNavBar/DashNavBar';
import { DashOverview } from './dashOverview/DashOverview';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { fetchExpenses } from '../../../store/actions/expensesActions';
import { toast } from 'react-toastify';
import { logout } from '../../../store/slices/authSlice';

export const DashContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchExpenses()).then((res) => {
      if (res.type === 'expenses/fetchExpenses/fulfilled') {
        console.log('fetchExpenses fulfilled');
        return;
      }
      if (res.type === 'expenses/fetchExpenses/rejected') {
        console.error('fetchExpenses rejected');
        const errorInfo = res.payload as { message: string; status: number };
        if (errorInfo && errorInfo.status === 401) {
          console.log('Unauthorized');
          dispatch(logout());
          toast.error('Session expired');
          return;
        }
        return;
      }
      console.log('fetchExpenses Error: ', res);
    });
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
