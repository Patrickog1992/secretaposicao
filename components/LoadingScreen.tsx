import React, { useEffect, useState } from 'react';
import { QuizLayout } from './QuizLayout';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(oldProgress + 1, 100); // 1% increment
      });
    }, 40); // 4 seconds total roughly

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(onComplete, 500);
    }
  }, [progress, onComplete]);

  return (
    <QuizLayout>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-pink-600 mb-4">{progress}%</div>
        <p className="text-lg mb-8 animate-pulse font-medium">
            {progress < 50 ? "Preparando seu acesso.." : "Verificando disponibilidade de vagas..."}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-10 overflow-hidden">
          <div 
            className="bg-pink-600 h-4 rounded-full transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl border border-pink-100 w-full mb-8">
            <p className="italic text-gray-600 text-sm mb-4 leading-relaxed">
            "Obrigada Ana Julia! O Manual salvou meu casamento. A gente vivia brigando, agora é só amor e carinho o dia todo. A posição 12 é surreal!"
            </p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold">C</div>
                <div>
                    <p className="font-bold text-sm">Carla Souza</p>
                    <p className="text-xs text-gray-400">@carla.souza.fit</p>
                </div>
            </div>
        </div>

      </div>
    </QuizLayout>
  );
};