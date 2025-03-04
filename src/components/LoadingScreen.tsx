import React from 'react';
import Logo from './Logo';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-dark flex flex-col items-center justify-center z-50">
      <Logo className="h-16 w-16" />
      <div className="mt-8 w-16 h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary to-secondary animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>
      <p className="mt-4 text-white/70">Extraindo Ether...</p>
    </div>
  );
};

export default LoadingScreen;
