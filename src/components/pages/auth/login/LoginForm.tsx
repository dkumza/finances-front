import { useFormik } from 'formik';
import { Button } from '../../../inputs/Button';
import { Input } from '../../../inputs/Input';
import { loginValSchema } from '../validationSchemas';
import { useDispatch } from 'react-redux';
import { login } from '../../../../store/actions/login-actions';
import { AppDispatch } from '../../../../store/store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface LoginResult {
  type: 'login/loginUser/fulfilled' | 'login/loginUser/rejected';
  payload: {
    response?: {
      data?: {
        message: string;
      };
    };
  };
}

export const LoginForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: 'darius@email.com',
      password: '123456',
    },
    validationSchema: loginValSchema,
    onSubmit: (values) => {
      dispatch(login(values)).then((result: LoginResult) => {
        if (result.type === 'login/loginUser/fulfilled') {
          console.log('login result: ', result);
          toast.success('Login successful');
          navigate('/');
        }
        if (result.type === 'login/loginUser/rejected') {
          console.log('login result error: ', result.payload.response?.data?.message);
        }
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
