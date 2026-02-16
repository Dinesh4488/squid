import React from 'react';
import './Input.css';

const Input = React.forwardRef(function Input(
  { id, label, labelHidden = true, type = 'text', className = '', value, onChange, name, placeholder, ...props },
  ref
) {
  const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className="input-component">
      {label && (
        <label htmlFor={inputId} className={labelHidden ? 'sr-only' : 'input-label'}>
          {label}
        </label>
      )}

      <input
        id={inputId}
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${className}`.trim()}
        {...props}
      />
    </div>
  );
});

export default Input;
