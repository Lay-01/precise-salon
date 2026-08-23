import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold tracking-widest uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-salon-gold/50 cursor-pointer';
  
  const sizeStyles = {
    sm: 'text-xs px-4 py-2 text-[11px]',
    md: 'text-xs px-6 py-3.5 tracking-wider',
    lg: 'text-sm px-8 py-4 tracking-widest'
  };

  const variantStyles = {
    primary: 'bg-salon-gold text-salon-bg hover:bg-salon-gold-hover hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transform hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border border-salon-gold/60 text-white hover:border-salon-gold hover:bg-salon-gold/10 hover:text-salon-gold',
    outlineWhite: 'border border-white/30 text-white hover:border-white hover:bg-white/10',
    dark: 'bg-salon-card text-white border border-salon-border hover:border-salon-gold/40 hover:text-salon-gold'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
