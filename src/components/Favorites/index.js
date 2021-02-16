import React, { useContext } from 'react';
import { AppContext } from '../../state/contextAPI';
import GoBack from '../GoBackBtn';
import MovieCard from '../MovieCard';
import ItemList from '../ItemList';

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <ItemList
      title='Favorite movies'
      showInfo={!favorites.length}
      infoMsg="You don't have any favorite movies yet!"
    >
      <GoBack title='Home' className='w-96 md:w-auto' />
      <div
        className={`${
          favorites.length > 0 ? 'items-container' : 'empty-items-container'
        }`}
      >
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </ItemList>
  );
};

export default Favorites;
