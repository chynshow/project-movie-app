import React from 'react';

const Button = ({ handleOnClick, className, children, ...rest }) => {
  return (
    <button
      className={`rounded-sm ${className}`}
      onClick={handleOnClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
