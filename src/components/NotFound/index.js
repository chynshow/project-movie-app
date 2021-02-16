import React from 'react';
import GoBack from '../GoBackBtn';
import { TitleSecondary } from '../Title';
import { Times } from './../SVGs';

const NotFound = () => (
  <div className='flex flex-col items-center p-10'>
    <TitleSecondary title='Page not found' />
    <Times className='w-36' />
    <GoBack title='Home' />
  </div>
);

export default NotFound;
