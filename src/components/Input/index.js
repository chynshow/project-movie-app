import React from 'react';

const Input = ({
  type = 'text',
  handleOnChange,
  placeholder,
  label,
  value,
  className,
  name,
  ...rest
}) => {
  return (
    <>
      <input
        type={type}
        className={className}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        {...rest}
      />
      {label && <label>{label}</label>}
    </>
  );
};

export default Input;
