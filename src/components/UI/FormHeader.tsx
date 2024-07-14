export const FormHeader = ({ h, p }: { h: string; p: string }) => {
  return (
    <div className=''>
      <h1 className='text-4xl font-semibold mb-2 text-left'>{h}</h1>
      <p className='text-sm mb-4 text-gray-500'>{p}</p>
    </div>
  );
};
