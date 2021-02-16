import React, { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { AppContext } from '../../state/contextAPI';
import { CameraSVG, HeartSVG, HeartSVGBlack } from '../SVGs';
import { TitlePrimary } from '../Title';
import SearchBar from './SearchBar';

const Header = () => {
  const { favorites } = useContext(AppContext);

  return (
    <header className='flex flex-col items-stretch py-4'>
      <div className='flex  md:justify-center'>
        <CameraSVG className='w-40 md:w-48' />
      </div>
      <NavLink className='block text-4xl md:text-5xl uppercase' to='/'>
        <TitlePrimary title='Search movies' />
      </NavLink>
      <p className='text-base md:text-xl flex items-end py-4'>
        Find your favorite movies
        <NavLink className='font-bold px-2 relative' to='/favorites'>
          {!!favorites.length ? (
            <HeartSVGBlack className='icon' />
          ) : (
            <HeartSVG className='icon' />
          )}
          {!!favorites.length && (
            <span className='absolute bottom-0 text-sm md:text-base right-0 mb-4'>
              {favorites.length}
            </span>
          )}
        </NavLink>
      </p>
      <Route exact path='/' component={SearchBar} />
    </header>
  );
};

export default Header;
