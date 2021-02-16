import React from 'react';
import PropTypes from 'prop-types';

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
      {label && <label className='py-2 text-xs max-w-xs'>{label}</label>}
    </>
  );
};

export default React.memo(Input);

Input.propTypes = {
  type: PropTypes.string,
  handleOnChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
};
