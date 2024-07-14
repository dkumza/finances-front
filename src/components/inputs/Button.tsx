import { MouseEventHandler } from 'react';

interface ButtonProps {
  action: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button' | 'reset';
  text: string;
  color: string;
}

export const Button = ({ action, type, text, color }: ButtonProps) => {
  return (
    <div>
      <button type={type} className={`btn ${color} w-full`} onClick={action}>
        {text}
      </button>
    </div>
  );
};
