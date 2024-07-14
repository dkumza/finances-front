import { useFormik } from 'formik';
import { expensesValSchema } from '../auth/validationSchemas';
import { FormValues, Input } from '../../inputs/Input';
import { Button } from '../../inputs/Button';
import { Select } from '../../inputs/Select';
import { createExpense } from '../../../store/actions/expensesActions';
import { toast } from 'react-toastify';
import { handleExpenses } from '../../../helpers/handleExpenses';
import { useAppDispatch } from '../../../store/hooks';

export const ExpensesForm = () => {
  const expModal = document.getElementById('exp_modal') as HTMLDialogElement;
  const dispatch = useAppDispatch();

  const formik = useFormik<FormValues>({
    initialValues: {
      category: '',
      description: '',
      date: '',
      amount: null,
    },
    validationSchema: expensesValSchema,
    onSubmit: (values) => {
      expModal?.close();
      dispatch(createExpense(values)).then((res) => {
        // The createExpense action has been fulfilled
        if (res.type === 'expenses/createExpense/fulfilled') {
          toast.success('Transaction added successfully');
          formik.resetForm();
          handleExpenses();
        }
        // The createExpense action has been rejected
        if (res.type !== 'expenses/createExpense/fulfilled') {
          const errorMessage = `Failed to create expense. Type: ${res.type}`;
          toast.error('Failed to create expense');
          throw new Error(errorMessage);
        }
      });
    },
  });

  const handleCancel = () => {
    expModal.close();
    formik.resetForm();
  };

  return (
    <div className='container flex items-center justify-center flex-col'>
      <form className='w-full' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-4'>
          <Select color='select-primary' name='category' formik={formik} />
          <Input
            color='input-primary'
            type='text'
            name='description'
            placeholder='Description'
            formik={formik}
          />
          <Input
            color='input-primary'
            type='date'
            name='date'
            placeholder='Pick a date'
            formik={formik}
          />
          <Input
            color='input-primary'
            type='number'
            name='amount'
            placeholder='Amount'
            formik={formik}
          />
          <Button
            action={() => {}}
            type='submit'
            text='Submit'
            color='btn-primary'
          />
          <Button
            action={handleCancel}
            type='button'
            text='Cancel'
            color='btn-base-200'
          />
        </div>
      </form>
    </div>
  );
};
