import {
  AllTransactionsIcon,
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
        <div className='text-center text-2xl font-semibold mb-6 mt-2'>
          Add Title
        </div>
        <li>
          <DashNavItem icon={<DashIcon />} text='Dashboard' link={'/'} />
        </li>
        <div className='font-semibold text-neutral-500 mt-2 pl-2'>
          Transactions
        </div>
        <li className=''>
          <DashNavItem
            icon={<ExpensesIcon />}
            text='Expenses'
            link={'/expenses-all'}
          />
          <DashNavItem
            icon={<IncomeIcon />}
            text='Income'
            link={'/income-all'}
          />
          <DashNavItem
            icon={<AllTransactionsIcon />}
            text='Transactions'
            link={'/transactions-all'}
          />
        </li>
        <div className='font-semibold text-neutral-500 mt-2 pl-2'>
          Financial Control
        </div>
        <li>
          <DashNavItem icon={<BudgetIcon />} text='Budgets' link={'/budgets'} />
          <DashNavItem icon={<BillsIcon />} text='Bills' link={'/bills'} />
          <DashNavItem
            icon={<SavingsIcon />}
            text='Savings'
            link={'/savings'}
          />
        </li>
      </ul>
    </>
  );
};
