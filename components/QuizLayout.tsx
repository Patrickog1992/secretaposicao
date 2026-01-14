import React from 'react';

interface QuizLayoutProps {
  children: React.ReactNode;
}

export const QuizLayout: React.FC<QuizLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
};