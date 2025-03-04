import React from 'react';
import { Sparkle } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-8' }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <div></div>
      <Sparkle className="relative z-10 text-white" />
    </div>
  );
};

export default Logo;
