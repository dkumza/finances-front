import {
  BillsIcon,
  BudgetIcon,
  DashIcon,
  ExpensesIcon,
  HamburgerIcon,
  IncomeIcon,
  SavingsIcon,
} from '../../../../assets/svg/svgIcons';
import { DashNavItem } from './DashNavItem';

export const DashDrawer = () => {
  return (
    <div className='drawer drawer-auto-gutter z-10'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor='my-drawer' className='btn btn-square btn-ghost mr-2 drawer-button'>
          <HamburgerIcon />
        </label>
      </div>
      <div className='drawer-side drawer-side-no-scroll'>
        <label htmlFor='my-drawer' aria-label='close sidebar' className='drawer-overlay '></label>
        <ul className='menu  bg-base-200  text-base-content min-h-full w-80 p-4'>
          <div className='text-center text-2xl font-semibold mb-4'>Menu</div>
          {/* Sidebar content here */}
          <li>
            <DashNavItem icon={<DashIcon />} text='Dashboard' />
          </li>
          <li className=''>
            <a className='font-semibold text-neutral-500 mt-2'>Transactions</a>
            <DashNavItem icon={<ExpensesIcon />} text='Expenses' />
            <DashNavItem icon={<IncomeIcon />} text='Income' />
          </li>
          <li>
            <a className='font-semibold text-neutral-500 mt-2'>Financial Control</a>

            <DashNavItem icon={<BudgetIcon />} text='Budgets' />
            <DashNavItem icon={<BillsIcon />} text='Bills' />
            <DashNavItem icon={<SavingsIcon />} text='Savings' />
          </li>
        </ul>
      </div>
    </div>
  );
};
