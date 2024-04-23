import { Button } from '../../../inputs/Button';
import { Input } from '../../../inputs/Input';

export const SignUpForm = () => {
  return (
    <div className='container flex items-center justify-center flex-col'>
      <form className='w-full'>
        <div className='flex flex-col gap-4'>
          <Input type='email' name='email' placeholder='Email' />
          <Input type='password' name='password' placeholder='Password' />
          <Input type='password' name='repeatPassword' placeholder='Repeat Password' />
          <Button text='Sign Up' color='btn-primary' />
        </div>
        <p className='text-xs text-right py-2'>* By registering, I confirm that I accept...</p>
      </form>
    </div>
  );
};
