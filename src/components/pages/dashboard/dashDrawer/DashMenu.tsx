import {
  BillsIcon,
  BudgetIcon,
  DashIcon,
  ExpensesIcon,
  IncomeIcon,
  SavingsIcon,
} from '../../../../assets/svg/svgIcons';
import { DashNavItem } from './DashNavItem';

export const DashMenu = () => {
  return (
    <>
      <ul className='menu text-base-content min-h-full w-64 p-4 bg-base-100'>
        <div className='text-center text-2xl font-semibold mb-6 mt-2'>Add Title</div>
        <li>
          <DashNavItem icon={<DashIcon />} text='Dashboard' link={'/'} />
        </li>
        <div className='font-semibold text-neutral-500 mt-2'>Transactions</div>
        <li className=''>
          <DashNavItem icon={<ExpensesIcon />} text='Expenses' link={'/home'} />
          <DashNavItem icon={<IncomeIcon />} text='Income' link={'/home'} />
        </li>
        <div className='font-semibold text-neutral-500 mt-2'>Financial Control</div>
        <li>
          <DashNavItem icon={<BudgetIcon />} text='Budgets' link={'/home'} />
          <DashNavItem icon={<BillsIcon />} text='Bills' link={'/home'} />
          <DashNavItem icon={<SavingsIcon />} text='Savings' link={'/home'} />
        </li>
      </ul>
    </>
  );
};
