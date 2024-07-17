import { FC } from 'react';
import { TransactionsTableBody } from './TransactionsTableBody';

interface ITransactionProps {
  length: number;
  transactions: {
    _id: string;
    category: string;
    description: string;
    amount: number;
    date: string;
  }[];
  title: string;
}

export const TransactionsTable: FC<ITransactionProps> = ({
  length,
  title,
  transactions,
}) => {
  return (
    <div className='mt-6'>
      <div className='card w-full bg-base-100 shadow'>
        <div className='card-body'>
          <div className=''>{title}</div>
          <table className='table table-sm'>
            <thead className=''>
              <tr>
                <th className=''>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions
                  .slice(0, length)
                  .map((item) => (
                    <TransactionsTableBody key={item._id} transaction={item} />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
