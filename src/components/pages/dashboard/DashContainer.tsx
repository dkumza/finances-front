import { DashNavBar } from './dashNavBar/DashNavBar';
import { useEffect } from 'react';
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
import { ExpensesFormModal } from '../expenses/ExpensesFormModal';
import { handleExpenses } from '../../../helpers/handleExpenses';
import { ExpensesDeleteModal } from '../expenses/ExpensesDeleteModal';

export const DashContainer = () => {
  useEffect(() => {
    handleExpenses();
  }, []);

  return (
    <div className='w-full flex border min-h-screen'>
      <div className='max-lg:hidden'>
        <DashSideNav />
      </div>
      <div className='flex flex-col w-full'>
        <DashNavBar />
        <div className='p-6 bg-base-200 h-full'>
          <ExpensesFormModal />
          <ExpensesDeleteModal />
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
