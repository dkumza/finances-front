import { useFormik } from 'formik';
import { Button } from '../../../inputs/Button';
import { Input } from '../../../inputs/Input';
import { loginValSchema } from '../validationSchemas';

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='container flex items-center justify-center flex-col'>
      <form className='w-full' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-4'>
          <Input
            color='input-primary'
            type='email'
            name='email'
            placeholder='Email'
            formik={formik}
          />
          <Input
            color='input-primary'
            type='password'
            name='password'
            placeholder='Password'
            formik={formik}
          />
          <Button action={() => {}} text='Log in' color='btn-primary' />
        </div>
      </form>
    </div>
  );
};
