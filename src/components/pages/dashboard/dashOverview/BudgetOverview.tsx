import { FC, ReactNode } from "react";

export interface BudgetOverviewProps {
  color: string;
  title: string;
  amount: number | null;
  icon: ReactNode;
}

export const BudgetOverview: FC<BudgetOverviewProps> = ({
  color,
  title,
  amount,
  icon,
}) => {
  return (
    <div className="card w-full bg-base-100 shadow rounded-xl mt-6 ">
      <div className="card-body">
        <div className="flex justify-between">
          <p>{title}</p>
          <div className={`${color} text-white p-1.5 rounded-lg`}>{icon}</div>
        </div>
        <h2 className="text-4xl">{amount}</h2>
      </div>
    </div>
  );
};
