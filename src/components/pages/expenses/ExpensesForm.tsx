import { useFormik } from 'formik';
import { expensesValSchema } from '../auth/validationSchemas';
import { Input } from '../../inputs/Input';
import { Button } from '../../inputs/Button';
import { Select } from '../../inputs/Select';
import { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { createExpense } from '../../../store/actions/expensesActions';
import { toast } from 'react-toastify';

interface ExpenseResult {
  type: 'expenses/createExpense/fulfilled' | 'expenses/createExpense/rejected';
  payload: {
    _id?: string;
    response?: {
      data?: {
        message: string;
      };
    };
  };
}

interface FormValues {
  category?: string;
  title?: string;
  description?: string;
  amount?: number;
}

export const ExpensesForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik<FormValues>({
    initialValues: {
      category: '',
      title: '',
      description: '',
      amount: 0,
    },
    validationSchema: expensesValSchema,
    onSubmit: (values) => {
      console.log('values: ', values);
      dispatch(createExpense(values)).then((result: ExpenseResult) => {
        if (result.type === 'expenses/createExpense/fulfilled') {
          const { _id } = result.payload;
          console.log('new created expense id: ', _id);
          toast.success('Expense created');
        }
        if (result.type === 'expenses/createExpense/rejected') {
          console.log('error creating expense', result.payload.response?.data?.message);
          toast.error(result.payload.response?.data?.message);
        }
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
            name='title'
            placeholder='Title'
            formik={formik}
          />
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
