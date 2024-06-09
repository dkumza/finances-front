import { useFormik } from 'formik';
import HamburgerIcon from '../../../../assets/svg/hamburger-icon';
import { FormValues, Input } from '../../../inputs/Input';
// import { searchValSchema } from '../../auth/validationSchemas';

export const DashNavBar = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      search: '',
    },
    // validationSchema: searchValSchema,
    onSubmit: (values) => {
      console.log('values: ', values);
    },
  });
  return (
    <div className='navbar bg-base-100 px-4 border-b-2'>
      <div className='flex-1'>
        <div className='flex-none'>
          <button className='btn btn-square btn-ghost mr-2'>
            <HamburgerIcon />
          </button>
        </div>
        <div className='form-control'>
          <Input
            type='text'
            name='search'
            placeholder='Search'
            color='input-primary'
            formik={formik}
          />
          {/* <input type='text' placeholder='Search' className='input input-bordered w-24 md:w-auto' /> */}
        </div>
      </div>
      <div className='flex-none gap-2'>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar '>
            <div className='w-10 h-10 rounded-full '>
              <div className='border-green-500 h-10 align-middle flex items-center justify-center'>
                Admin
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
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
