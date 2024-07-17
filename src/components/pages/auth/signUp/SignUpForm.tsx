import { FormikValues, useFormik } from 'formik';
import { Button } from '../../../inputs/Button';
import { Input } from '../../../inputs/Input';
import { signUpValSchema } from '../validationSchemas';
import { useAppDispatch } from '../../../../store/hooks';
import { signUp } from '../../../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik<FormikValues>({
    initialValues: {
      email: '',
      password: '',
      // repeatPassword: '',
    },
    validationSchema: signUpValSchema,
    onSubmit: (values) => {
      dispatch(signUp(values))
        .then(() => {
          navigate('/login');
          toast.success('Account created successfully');
        })
        .catch((rejectedValueOrSerializedError) => {
          console.error(
            'Error while signing up: ',
            rejectedValueOrSerializedError
          );
          toast.error('Error creating account');
        });
    },
  });

  return (
    <div className='container flex items-center justify-center flex-col'>
      <form className='w-full' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-4'>
          <Input
            color='input-accent'
            type='email'
            name='email'
            placeholder='Email'
            formik={formik}
          />
          <Input
            color='input-accent'
            type='password'
            name='password'
            placeholder='Password'
            formik={formik}
          />
          <Button
            action={() => {}}
            type='submit'
            text='Sign Up'
            color='btn-accent'
          />
        </div>
        <p className='text-xs text-right py-2'>
          * By registering, I confirm that I accept...
        </p>
      </form>
    </div>
  );
};
