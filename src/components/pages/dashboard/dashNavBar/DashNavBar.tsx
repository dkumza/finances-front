import { useFormik } from 'formik';
import { FormValues, Input } from '../../../inputs/Input';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../store/hooks';
import { logout } from '../../../../store/slices/authSlice';
import { toast } from 'react-toastify';
import { DashDrawer } from '../dashDrawer/DashDrawer';
// import { searchValSchema } from '../../auth/validationSchemas';

export const DashNavBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik<FormValues>({
    initialValues: {
      search: '',
    },
    // validationSchema: searchValSchema,
    onSubmit: (values) => {
      console.log('values: ', values);
    },
  });

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
    toast.success('Logged out');
  };

  const handleShowModal = () => {
    document.getElementById('exp_modal').showModal();
  };
  return (
    <div className='navbar bg-base-100 px-4'>
      <div className='flex-1'>
        <div className='flex-none lg:hidden max-sm:block'>
          <DashDrawer />
        </div>
        <div className='form-control'>
          <Input
            type='text'
            name='search'
            placeholder='Search'
            color=''
            formik={formik}
          />
        </div>
      </div>

      <div className='flex-none gap-2'>
        <div className='btn btn-outline' onClick={handleShowModal}>
          New Transaction
        </div>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-circle avatar'>
            <div className='w-12 h-12 rounded-xl bg-current hover:bg-base-100'>
              <div className='h-12 align-middle flex items-center justify-center text-white hover:text-current'>
                A
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
