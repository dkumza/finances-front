import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface DashNavItemProps {
  icon: ReactNode;
  text: string;
  link: string;
}

export const DashNavItem: FC<DashNavItemProps> = ({ icon, text, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? 'bg-base-content text-white hover:text-black' : '')}
    >
      <div className=''>{icon}</div>
      <div>{text}</div>
    </NavLink>
  );
};
