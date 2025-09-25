import { Link } from 'react-router-dom';
import React from 'react';

const Button = React.forwardRef(({
  variant = 'filled',
  color = 'AC8658',
  className = '',
  children,
  to,
  ...props
}, ref) => {
  const normalizeColorKey = (value) => String(value || '').replace('#', '').toUpperCase();

  const baseClasses = 'inline-flex items-center justify-center px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const colorVariants = {
    'AC8658': {
      filled: 'bg-[#AC8658] text-white hover:brightness-95 focus-visible:ring-[#AC8658]/50',
      outline: 'border-2 border-[#AC8658] text-[#AC8658] hover:bg-[#AC8658] hover:text-white focus-visible:ring-[#AC8658]/40'
    },
    '464538': {
      filled: 'bg-[#464538] text-white hover:brightness-110 focus-visible:ring-[#464538]/40',
      outline: 'border-2 border-[#464538] text-[#464538] hover:bg-[#464538] hover:text-white focus-visible:ring-[#464538]/30'
    },
    'F8F7EA': {
      filled: 'bg-[#F8F7EA] text-[#42341C] hover:brightness-95 focus-visible:ring-[#F8F7EA]/60',
      outline: 'border-2 border-[#F8F7EA] text-[#42341C] hover:bg-[#F8F7EA] hover:text-[#42341C] focus-visible:ring-[#F8F7EA]/50'
    },
    '222811': {
      filled: 'bg-[#222811] text-white hover:brightness-110 focus-visible:ring-[#42341C]/40',
      outline: 'border-2 border-[#42341C] text-[#42341C] hover:bg-[#42341C] hover:text-white focus-visible:ring-[#42341C]/30'
    }
  };

  const selectedColor = colorVariants[normalizeColorKey(color)] || colorVariants['AC8658'];
  const selectedClasses = selectedColor[variant] || selectedColor.filled;

  const finalClassName = `${baseClasses} ${selectedClasses} ${className}`.trim();

  const commonProps = {
    className: finalClassName,
    ref,
    ...props
  };

  if (to) {
    return (
      <Link to={to} {...commonProps}>
        {children}
      </Link>
    );
  }

  return (
    <button {...commonProps}>
      {children}
    </button>
  );
});

export default Button;
