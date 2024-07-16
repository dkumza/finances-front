import { FC } from 'react';
import { TrashIcon } from '../../../assets/svg/svgIcons';
import { useAppDispatch } from '../../../store/hooks';
import { setExpenseToDelete } from '../../../store/slices/expensesSlice';

export const TransactionsTableBody: FC<any> = ({ transaction }) => {
  const dispatch = useAppDispatch();

  const confModal = document.getElementById(
    'confirm_modal'
  ) as HTMLDialogElement;

  const prepForDelete = (id: string) => {
    confModal?.showModal();
    dispatch(setExpenseToDelete(id));
  };
  return (
    <tr>
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
          {/* TODO add edit functionality */}
          {/* <div className='cursor-pointer'>
              <EyeIcon />
            </div> */}
          <div
            className='text-red-400 cursor-pointer'
            onClick={() => prepForDelete(transaction._id)}
          >
            <TrashIcon />
          </div>
        </div>
      </td>
    </tr>
  );
};
