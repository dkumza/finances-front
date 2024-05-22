import { useFormik } from 'formik';
import { expensesValSchema } from '../auth/validationSchemas';
import { Input } from '../../inputs/Input';
import { Button } from '../../inputs/Button';
import { Select } from '../../inputs/Select';

interface FormValues {
  title?: string;
  description?: string;
  amount?: number;
}

export const ExpensesForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      title: '',
      description: '',
      amount: 0,
    },
    validationSchema: expensesValSchema,
    onSubmit: (values) => {
      console.log('values: ', values);
    },
  });

  return (
    <div className='container flex items-center justify-center flex-col'>
      <form className='w-full' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-4'>
          <Select color='select-primary' />
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
