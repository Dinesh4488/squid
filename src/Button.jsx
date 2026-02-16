import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'medium', type = 'button', onClick, ...props }) => {
  return (
    <button 
      type={type}
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
