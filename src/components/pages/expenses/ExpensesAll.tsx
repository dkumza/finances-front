import { EyeIcon, TrashIcon } from '../../../assets/svg/svgIcons';
import { useAppSelector } from '../../../store/hooks';

export const ExpensesAll = () => {
  const { transactions } = useAppSelector((state) => state.expenses.fetchedExpenses);

  return (
    <div className='mt-6'>
      <div className='card w-full bg-base-100 shadow rounded-xl'>
        <div className='card-body'>
          <div className=''>Recent Transactions</div>
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
                    {transaction.date && new Date(transaction.date).toISOString().split('T')[0]}
                  </td>
                  <td>
                    <div className='flex gap-2'>
                      <div className='cursor-pointer'>
                        <EyeIcon />
                      </div>
                      <div className='text-red-400 cursor-pointer'>
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
