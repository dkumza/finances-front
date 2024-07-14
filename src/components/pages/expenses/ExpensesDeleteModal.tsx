import { useRef } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { handleDeleteTransaction } from '../../../helpers/handleExpenses';

export const ExpensesDeleteModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const expense = useAppSelector((state) => state.expenses.expense);

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleConfirm = (id: string) => {
    handleDeleteTransaction(id);
    handleClose();
  };
  return (
    <>
      <dialog id='confirm_modal' className='modal' ref={modalRef}>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Attention!</h3>
          <p className='py-4'>
            You are about to delete transaction, this cannot be undone
          </p>
          <div className='btn-wrapper border flex justify-end gap-2'>
            <button
              className='btn btn-outline w-24'
              onClick={() => handleConfirm(expense)}
            >
              Delete
            </button>
            <button className='btn btn-neutral w-24' onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
