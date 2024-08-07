import { FC } from 'react';
import { EyeIcon, TrashIcon } from '../../../assets/svg/svgIcons';
import { useAppDispatch } from '../../../store/hooks';
import { setExpenseToDelete } from '../../../store/slices/expensesSlice';

interface ITransactionProps {
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
  title,
  transactions,
}) => {
  const dispatch = useAppDispatch();

  const confModal = document.getElementById(
    'confirm_modal'
  ) as HTMLDialogElement;

  const prepForDelete = (id: string) => {
    confModal?.showModal();
    dispatch(setExpenseToDelete(id));
  };
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
              {transactions.map((transaction) => (
                <tr key={transaction._id} className='hover:bg-base-200'>
                  <td className=''>{transaction.category}</td>
                  <td>{transaction.description}</td>
                  <td className=''>
                    <div
                      className={`${
                        transaction.amount > 0
                          ? 'bg-green-100 border border-primary text-green-700'
                          : 'bg-rose-100 border border-secondary text-rose-700'
                      }  py-0.5 text-center rounded-xl w-24`}
                    >
                      {transaction.amount} €
                    </div>
                  </td>
                  <td>
                    {transaction.date &&
                      new Date(transaction.date).toISOString().split('T')[0]}
                  </td>
                  <td>
                    <div className='flex gap-2'>
                      <div className='cursor-pointer'>
                        <EyeIcon />
                      </div>
                      <div
                        className='text-red-400 cursor-pointer'
                        onClick={() => prepForDelete(transaction._id)}
                      >
                        <TrashIcon />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
