import { FormikValues, useFormik } from 'formik';
import { Button } from '../../../inputs/Button';
import { Input } from '../../../inputs/Input';
import { signUpValSchema } from '../validationSchemas';
import { useAppDispatch } from '../../../../store/hooks';
import { signUp } from '../../../../store/actions/authActions';

export const SignUpForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik<FormikValues>({
    initialValues: {
      email: '',
      password: '',
      // repeatPassword: '',
    },
    validationSchema: signUpValSchema,
    onSubmit: (values) => {
      dispatch(signUp(values));
      console.log(values);
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
          {/* <Input
            type='password'
            name='repeatPassword'
            placeholder='Repeat Password'
            formik={formik}
          /> */}
          <Button action={() => {}} text='Sign Up' color='btn-accent' />
        </div>
        <p className='text-xs text-right py-2'>* By registering, I confirm that I accept...</p>
      </form>
    </div>
  );
};
