import React from 'react';

export const Button = ({ text, color }: { text: string; color: string }) => {
  return (
    <div>
      <button className={`btn ${color} rounded-2xl w-72`}>{text}</button>
    </div>
  );
};
