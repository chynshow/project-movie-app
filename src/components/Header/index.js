import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../state/contextAPI';
import { CameraSVG, HeartSVG, HeartSVGBlack } from '../SVGs';
import SearchBar from './SearchBar';

const Header = () => {
  const { favorites } = useContext(AppContext);

  return (
    <header className='flex flex-col items-stretch py-4'>
      <div className='flex justify-center'>
        <CameraSVG className='w-48' />
      </div>
      <NavLink className='block text-5xl uppercase' to='/'>
        Search movies
      </NavLink>
      <p className='text-xl flex items-end py-4'>
        Find your favorite movies
        <NavLink className='font-bold px-2 relative' to='/favorites'>
          {!!favorites.length ? (
            <HeartSVGBlack className='w-8' />
          ) : (
            <HeartSVG className='w-8' />
          )}
          {!!favorites.length && (
            <span className='absolute bottom-0 right-0 mb-4'>
              {favorites.length}
            </span>
          )}
        </NavLink>
      </p>
      <SearchBar />
    </header>
  );
};

export default Header;
