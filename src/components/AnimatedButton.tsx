import React from 'react';
import { Link } from 'react-router-dom';

interface AnimatedButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  to,
  onClick,
  children,
  className = '',
  variant = 'primary'
}) => {
  const baseClasses = `
    px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300
    pulse glow zoom-hover cursor-pointer inline-block text-center
    ${variant === 'primary' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : ''}
    ${variant === 'secondary' ? 'bg-gradient-to-r from-blue-400 to-teal-400 text-white' : ''}
    ${variant === 'accent' ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' : ''}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

export default AnimatedButton;