import React from 'react';

export const TitlePrimary = ({ title, className, children }) => {
  return (
    <h1>
      {title}
      {children}
    </h1>
  );
};

export const TitleSecondary = ({ title, className, children }) => {
  return (
    <h2 className={`text-3xl py-4 ${className}`}>
      {title}
      {children}
    </h2>
  );
};

export const TitleTertiary = ({ title, className, children }) => {
  return (
    <h3 className={`text-base uppercase py-2 ${className}`}>
      {title}
      {children}
    </h3>
  );
};
