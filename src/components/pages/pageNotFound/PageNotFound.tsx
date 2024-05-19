import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className='min-h-screen flex flex-col justify-center gap-4'>
      <h1 className='text-2xl'>404 Page Not Found </h1>
      <button className='btn btn-primary' onClick={handleHome}>
        Take Me Home
      </button>
    </div>
  );
};
