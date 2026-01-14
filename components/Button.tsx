import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`w-full bg-pink-600 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg hover:bg-pink-700 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};