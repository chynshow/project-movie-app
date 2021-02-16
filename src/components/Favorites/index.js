import React, { useContext } from 'react';
import { AppContext } from '../../state/contextAPI';
import GoBack from '../GoBackBtn';
import MovieCard from '../MovieCard';
import ScrollToTop from 'react-scroll-up';
import { ChevronUp, Times } from '../SVGs';

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div>
      <GoBack title='Home' className='w-96' />
      <div
        className={`${
          favorites.length > 0 ? 'items-container' : 'empty-items-container'
        }`}
      >
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
      <p className='p-4 text-sm md:text-base flex flex-col items-center'>
        <Times className='w-36 md:w-48' />
        You don't have any favorite movies yet!
      </p>
    )}
  </>
);
