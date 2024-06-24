import { useFormik } from 'formik';
import { Button } from '../../../inputs/Button';
import { FormValues, Input } from '../../../inputs/Input';
import { loginValSchema } from '../validationSchemas';
import { useDispatch } from 'react-redux';
import { login } from '../../../../store/actions/authActions';
import { AppDispatch } from '../../../../store/store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const LoginForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik<FormValues>({
    initialValues: {
      email: 'darius@email.com',
      password: '123456',
    },
    validationSchema: loginValSchema,
    onSubmit: (values) => {
      dispatch(login(values)).then((res) => {
        if (res.type === 'auth/loginUser/fulfilled') {
          navigate('/');
          toast.success('Login successful');
          return;
        }
        if (res.type === 'auth/loginUser/rejected') {
          toast.error('Failed to login!');
          return;
        }
        console.log('Login Error: ', res);
      });
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
