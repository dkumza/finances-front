import { Button } from '../../../inputs/Button';
import { Input } from '../../../inputs/Input';

export const SignUpForm = () => {
  return (
    <div className='container flex items-center justify-center flex-col'>
      <form className='w-72 '>
        <div className='flex flex-col gap-4'>
          <Input type='email' name='email' placeholder='Email' />
          <Input type='password' name='password' placeholder='Password' />
          <Input type='password' name='repeatPassword' placeholder='Repeat Password' />
          <Button text='Sign Up' />
        </div>
        <p className='text-xs text-right py-2'>* By registering, I confirm that I accept TOS</p>
      </form>
    </div>
  );
};
