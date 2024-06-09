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
      amount: null,
    },
    validationSchema: expensesValSchema,
    onSubmit: (values) => {
      console.log('values: ', values);
      dispatch(createExpense(values))
        .then((unwrapResult) => {
          // The createExpense action has been fulfilled
          console.log('Expense created with id: ', unwrapResult.payload);
          toast.success('Expense created successfully');
        })
        .catch((rejectedValueOrSerializedError) => {
          // The createExpense action has been rejected
          console.error('Error creating expense: ', rejectedValueOrSerializedError);
          toast.error('Error creating expense');
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
