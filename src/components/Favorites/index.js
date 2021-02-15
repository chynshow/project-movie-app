import React, { useContext } from 'react';
import { AppContext } from '../../state/contextAPI';
import { GoHome } from '../Button';
import MovieCard from '../MovieCard';
import ScrollToTop from 'react-scroll-up';
import { ChevronUp, Times } from '../SVGs';

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div>
      <GoHome />
      <div className='flex justify-center container flex-wrap'>
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        <InfoBlock favorites={favorites.length} />
      </div>
      <ScrollToTop showUnder={300}>
        <ChevronUp className='w-10' />
      </ScrollToTop>
    </div>
  );
};

export default Favorites;

const InfoBlock = ({ favorites }) => (
  <>
    {!favorites && (
      <p className='p-0 flex flex-col items-center'>
        <Times className='w-48' />
        You don't have any favorite movies yet!
      </p>
    )}
  </>
);
