import {
  BalanceIcon,
  ExpensesIcon,
  IncomeIcon,
  SavingsIcon,
} from '../../../../assets/svg/svgIcons';
import { useAppSelector } from '../../../../store/hooks';
import { BudgetOverview } from './BudgetOverview';

export const DashOverview = () => {
  const { balance, totalExpense, totalIncome } = useAppSelector(
    (state) => state.expenses.fetchedExpenses
  );
  return (
    <div className=''>
      <div className='text-lg'>Overview</div>
      <div className='flex gap-6 flex-col lg:flex-row'>
        <BudgetOverview
          color='bg-accent'
          title='Balance'
          amount={balance}
          icon={<BalanceIcon />}
        />
        <BudgetOverview
          color='bg-secondary'
          title='Expenses'
          amount={totalExpense}
          icon={<ExpensesIcon />}
        />
        <BudgetOverview
          color='bg-primary'
          title='Income'
          amount={totalIncome}
          icon={<IncomeIcon />}
        />
        {/* <BudgetOverview color='bg-info' title='Savings' amount={0} icon={<SavingsIcon />} /> */}
      </div>
    </div>
  );
};
