import React, { useContext } from 'react';
import { AppContext } from '../../state/contextAPI';
import MovieCard from '../MovieCard';

const Favorites = () => {
  const { favorites } = useContext(AppContext);
  return (
    <div>
      {favorites.map((movie) => (
        <MovieCard key={movie} movie={movie} />
      ))}
    </div>
  );
};

export default Favorites;
