import { ExpensesAddButton } from '../expenses/ExpensesAddButton';
import { ExpensesAll } from '../expenses/ExpensesAll';
import { DashOverview } from './dashOverview/DashOverview';

export const DashPage = () => {
  return (
    <>
      <DashOverview />
      <div className='flex gap-6 flex-col xl:flex-row'>
        <ExpensesAll />
        <ExpensesAll />
      </div>
      <ExpensesAddButton />
    </>
  );
};
