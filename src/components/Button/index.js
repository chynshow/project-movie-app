import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowBackSVG } from '../SVGs';

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

export const GoHome = () => {
  const { push } = useHistory();
  return (
    <Button
      className='flex items-center border-dashed border  p-3 mr-2'
      handleOnClick={() => push('/')}
    >
      <ArrowBackSVG className='w-6 mx-2' />
      Movies
    </Button>
  );
};
