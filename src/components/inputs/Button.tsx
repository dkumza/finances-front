import { MouseEventHandler } from 'react';

interface ButtonProps {
  action: MouseEventHandler<HTMLButtonElement>;
  text: string;
  color: string;
}

export const Button = ({ action, text, color }: ButtonProps) => {
  return (
    <div>
      <button type='submit' className={`btn ${color} w-full`} onClick={action}>
        {text}
      </button>
    </div>
  );
};
