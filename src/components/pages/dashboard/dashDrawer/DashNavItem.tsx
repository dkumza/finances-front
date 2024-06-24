import { FC, ReactNode } from 'react';

interface DashNavItemProps {
  icon: ReactNode;
  text: string;
}

export const DashNavItem: FC<DashNavItemProps> = ({ icon, text }) => {
  return (
    <div>
      <div className=''>{icon}</div>
      <a>{text}</a>
    </div>
  );
};
