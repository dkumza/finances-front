import { FC } from 'react';
import { ExpensesPage } from './ExpensesPage';
import { useAppDispatch } from '../../../store/hooks';
import { openModal } from '../../../store/slices/modalSlice';

export const ExpensesFormModal: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <dialog id='exp_modal' className='modal'>
        <div className='modal-box flex justify-center '>
          <ExpensesPage />
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button className='' onClick={() => dispatch(openModal())}>
            close
          </button>
        </form>
      </dialog>
    </>
  );
};
