import React, { useContext } from 'react';
import { AppContext } from '../../state/contextAPI';
import { GoHome } from '../Button';
import MovieCard from '../MovieCard';

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div>
      <GoHome />
      <div className='flex justify-center'>
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {!favorites.length && <p>You don't have any favorite movies yet!</p>}
      </div>
    </div>
  );
};

export default Favorites;
