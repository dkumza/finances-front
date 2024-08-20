import { FC } from 'react';
import { BudgetOverviewProps } from './BudgetOverview';
import { InfoIcon } from '../../../../assets/svg/svgIcons';

export const BalanceSavingsOverview: FC<BudgetOverviewProps> = ({
  color,
  title,
  amount,
  icon,
}) => {
  const handleUpdateBalanceOverview = (title: string) => {
    console.log(title);
  };
  return (
    <div
      className='card w-full bg-base-100 shadow rounded-xl mt-6 hover:cursor-pointer border hover:border-primary'
      onClick={() => handleUpdateBalanceOverview(title)}
    >
      <div
        className='absolute right-0 m-2 tooltip tooltip-primary text-inherit'
        data-tip={`Click to edit ${title.toLocaleLowerCase()}`}
      >
        <InfoIcon />
      </div>
      <div className='card-body'>
        <div className='flex justify-between'>
          <p>{title}</p>
          <div className={`${color} text-white p-1.5 rounded-lg`}>{icon}</div>
        </div>
        <h2 className='text-4xl'>{amount ? amount : 0}</h2>
      </div>
    </div>
  );
};
