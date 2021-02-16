import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ArrowBackSVG } from '../SVGs';

const GoBack = ({ title, className }) => {
  const { push } = useHistory();
  return (
    <button
      className={`flex items-center btn--secondary ${className}`}
      onClick={() => push('/')}
    >
      <ArrowBackSVG className='w-6 mx-2' />
      {title}
    </button>
  );
};

export default React.memo(GoBack);

GoBack.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
