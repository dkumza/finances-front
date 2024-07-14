import { DashNavBar } from './dashNavBar/DashNavBar';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { fetchExpenses } from '../../../store/actions/expensesActions';
import { toast } from 'react-toastify';
import { logout } from '../../../store/slices/authSlice';
import { DashSideNav } from './dashDrawer/DashSideNav';
import { DashPage } from './DashPage';
import { Route, Routes } from 'react-router-dom';
import { TExpensesPage } from './transactionsPages/TExpensesPage';
import { TIncomePage } from './transactionsPages/TIncomePage';
import { PageNotFound } from '../pageNotFound/PageNotFound';
import { TTransactionsPage } from './transactionsPages/TTransactionsPage';
import { BudgetsPAge } from './financialControlPages/BudgetsPage';
import { BillsPage } from './financialControlPages/BillsPage';
import { SavingsPage } from './financialControlPages/SavingsPage';
import { setExpenses } from '../../../store/slices/expensesSlice';
import { ExpensesFormModal } from '../expenses/ExpensesFormModal';

export const DashContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchExpenses()).then((res) => {
      console.log('fetchExpenses res: ', res.payload);
      if (res.type === 'expenses/fetchExpenses/fulfilled') {
        dispatch(setExpenses(res.payload));
        return;
      }
      if (res.type === 'expenses/fetchExpenses/rejected') {
        console.error('fetchExpenses rejected');
        const errorInfo = res.payload as { message: string; status: number };

        console.error('fetchExpenses Error: ', errorInfo);
        if (errorInfo && errorInfo.status === 401) {
          console.error('Unauthorized');
          dispatch(logout());
          toast.error('Session expired');
          return;
        }

        if (errorInfo && errorInfo.status === undefined) {
          dispatch(logout());
          toast.error('Something went wrong');
          return;
        }
        return;
      }
      console.log('fetchExpenses Error: ', res);
    });
  }, [dispatch]);

  return (
    <div className='w-full flex border min-h-screen'>
      <div className='max-lg:hidden'>
        <DashSideNav />
      </div>
      <div className='flex flex-col w-full'>
        <DashNavBar />
        <div className='p-6 bg-base-200 h-full'>
          {<ExpensesFormModal />}
          <Routes>
            <Route path='/' element={<DashPage />} />
            <Route path='expenses-all' element={<TExpensesPage />} />
            <Route path='income-all' element={<TIncomePage />} />
            <Route path='transactions-all' element={<TTransactionsPage />} />
            <Route path='budgets' element={<BudgetsPAge />} />
            <Route path='bills' element={<BillsPage />} />
            <Route path='savings' element={<SavingsPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
