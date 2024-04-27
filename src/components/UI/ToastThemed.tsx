import { Slide, ToastContainer } from 'react-toastify';

export const ToastThemed = () => {
  return (
    <ToastContainer
      position='bottom-right'
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
      transition={Slide}
    />
  );
};
