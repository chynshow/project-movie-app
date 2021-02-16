import React from 'react';
import PropTypes from 'prop-types';

export const TitlePrimary = ({ title, className, children }) => {
  return (
    <h1 className={className}>
      {title}
      {children}
    </h1>
  );
};

TitlePrimary.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export const TitleSecondary = ({ title, className, children }) => {
  return (
    <h2 className={`text-base md:text-2xl py-4 ${className}`}>
      {title}
      {children}
    </h2>
  );
};

TitleSecondary.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export const TitleTertiary = ({ title, className, children }) => {
  return (
    <h3 className={`text-base py-2 ${className}`}>
      {title}
      {children}
    </h3>
  );
};

TitleTertiary.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
