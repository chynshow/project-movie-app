import React from 'react';

export const TitlePrimary = ({ title }) => {
  return <h1>{title}</h1>;
};

export const TitleSecondary = ({ title }) => {
  return <h2>{title}</h2>;
};

export const TitleTertiary = ({ title }) => {
  return <h3 className='font-bold text-xl uppercase py-2'>{title}</h3>;
};
