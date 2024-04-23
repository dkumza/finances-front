import React from 'react';

export const Button = ({ text, color }: { text: string; color: string }) => {
  return (
    <div>
      <button className={`btn ${color} rounded-2xl w-full`}>{text}</button>
    </div>
  );
};
