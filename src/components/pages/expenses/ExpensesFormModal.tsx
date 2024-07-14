import { FC } from 'react';
import { ExpensesPage } from './ExpensesPage';

export const ExpensesFormModal: FC = () => {
  return (
    <>
      <dialog id='exp_modal' className='modal z-0'>
        <div className='modal-box flex justify-center '>
          <ExpensesPage />
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button className=''>close</button>
        </form>
      </dialog>
    </>
  );
};
