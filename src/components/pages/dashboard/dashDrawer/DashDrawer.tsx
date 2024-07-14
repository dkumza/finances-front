import { HamburgerIcon } from '../../../../assets/svg/svgIcons';
import { DashMenu } from './DashMenu';

export const DashDrawer = () => {
  return (
    <div className='drawer drawer-auto-gutter z-10'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor='my-drawer' className='btn btn-square btn-ghost mr-2 drawer-button'>
          <HamburgerIcon />
        </label>
      </div>
      <div className='drawer-side drawer-side-no-scroll'>
        <label htmlFor='my-drawer' aria-label='close sidebar' className='drawer-overlay '></label>
        <DashMenu />
      </div>
    </div>
  );
};
