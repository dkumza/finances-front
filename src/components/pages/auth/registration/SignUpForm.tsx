export const SignUpForm = () => {
  return (
    <div className='container flex items-center justify-center flex-col min-h-screen'>
      <h1 className='text-4xl mb-6 text-left  w-72'>Sign Up</h1>
      <form className='w-72 '>
        <div className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Email'
            className='input input-bordered rounded input-primary w-full max-w-xs'
          />
          <input
            type='text'
            placeholder='Password'
            className='input input-bordered rounded input-primary w-full max-w-xs'
          />
          <input
            type='text'
            placeholder='Repeat Password'
            className='input input-bordered rounded input-primary w-full max-w-xs'
          />

          <button className='btn btn-primary rounded'>Confirm</button>
        </div>
        <p className='text-xs text-right'>* By registering, I confirm that I accept TOS</p>
      </form>
    </div>
  );
};
