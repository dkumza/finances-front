import { FC, ReactNode } from 'react';

interface BudgetOverviewProps {
  color: string;
  title: string;
  amount: number;
  icon: ReactNode;
}

export const BudgetOverview: FC<BudgetOverviewProps> = ({ color, title, amount, icon }) => {
  return (
    <div className='card w-full bg-base-100 shadow rounded-xl mt-6'>
      <div className='card-body'>
        <div className='flex justify-between'>
          <p>{title}</p>
          <div className={`${color} p-1.5 rounded-xl`}>{icon}</div>
        </div>
        <h2 className='text-4xl'>{amount}</h2>
      </div>
    </div>
  );
};
