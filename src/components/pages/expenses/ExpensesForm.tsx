import { useFormik } from 'formik';
import { expensesValSchema } from '../auth/validationSchemas';
import { FormValues, Input } from '../../inputs/Input';
import { Button } from '../../inputs/Button';
import { Select } from '../../inputs/Select';
import { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { createExpense } from '../../../store/actions/expensesActions';
import { toast } from 'react-toastify';

export const ExpensesForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik<FormValues>({
    initialValues: {
      category: '',
      description: '',
      date: '',
      amount: null,
    },
    validationSchema: expensesValSchema,
    onSubmit: (values) => {
      console.log('values: ', values);
      dispatch(createExpense(values)).then((res) => {
        // The createExpense action has been fulfilled
        if (res.type === 'expenses/createExpense/fulfilled') {
          toast.success('Expense created successfully');
          formik.resetForm();
          return;
        }
        // The createExpense action has been rejected
        if (res.type === 'expenses/createExpense/rejected') {
          toast.error('Failed to create expense');
          return;
        }
        console.log('Expenses Error: ', res);
      });
    },
  });

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
          <Button action={() => {}} text='Submit' color='btn-primary' />
        </div>
      </form>
    </div>
  );
};
