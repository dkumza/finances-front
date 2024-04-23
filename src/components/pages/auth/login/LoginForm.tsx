import { Button } from '../../../inputs/Button';
import { Input } from '../../../inputs/Input';

export const LoginForm = () => {
  return (
    <div className='container flex items-center justify-center flex-col'>
      <form className='w-72 '>
        <div className='flex flex-col gap-4'>
          <Input type='email' name='email' placeholder='Email' />
          <Input type='password' name='password' placeholder='Password' />
          <Button text='Continue' color='btn-primary' />
        </div>
      </form>
    </div>
  );
};
