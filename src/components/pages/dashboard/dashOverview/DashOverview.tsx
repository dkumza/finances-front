import {
  BalanceIcon,
  ExpensesIcon,
  IncomeIcon,
  SavingsIcon,
} from '../../../../assets/svg/svgIcons';
import { BudgetOverview } from './BudgetOverview';

export const DashOverview = () => {
  return (
    <div className='p-6 min-h-full bg-base-200'>
      <div className='text-lg'>Overview</div>
      <div className='flex gap-6'>
        <BudgetOverview color='bg-accent' title='Balance' amount={2000} icon={<BalanceIcon />} />
        <BudgetOverview color='bg-error' title='Expenses' amount={-1000} icon={<ExpensesIcon />} />
        <BudgetOverview color='bg-success' title='Income' amount={5000} icon={<IncomeIcon />} />
        <BudgetOverview color='bg-info' title='Savings' amount={9000} icon={<SavingsIcon />} />
      </div>
    </div>
  );
};
