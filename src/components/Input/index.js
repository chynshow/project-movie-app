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
        className={`outline-none bg-transparent italic border-dashed border-b ${className}`}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        {...rest}
      />
      {label && <label className='py-2 text-xs'>{label}</label>}
    </>
  );
};

export default Input;
