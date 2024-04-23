export const AuthHeader = ({ h, p }: { h: string; p: string }) => {
  return (
    <div className='w-72'>
      <h1 className='text-4xl font-semibold mb-2 text-left'>{h}</h1>
      <p className='text-sm mb-2 text-gray-500'>{p}</p>
    </div>
  );
};
