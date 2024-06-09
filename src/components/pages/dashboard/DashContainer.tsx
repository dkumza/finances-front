import { ExpensesAddButton } from '../expenses/ExpensesAddButton';
import { ExpensesAll } from '../expenses/ExpensesAll';
import { DashNavBar } from './dashNavBar/DashNavBar';
import { DashOverview } from './dashOverview/DashOverview';

export const DashContainer = () => {
  return (
    <div className='flex flex-col w-full'>
      <DashNavBar />
      <DashOverview />
      <ExpensesAll />
      <ExpensesAddButton />
    </div>
  );
};
