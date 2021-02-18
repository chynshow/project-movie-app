import React, { useCallback, useContext, useRef } from 'react';
import Loader from './../Loader';
import { AppContext } from '../../state/contextAPI';
import MovieCard from '../MovieCard';
import ItemList from '../ItemList';
import removeDuplicates from '../../helpers/removeDuplicates';

const MovieList = () => {
  const {
    movies,
    loading,
    totalResult,
    totalPages,
    startPage,
    setPage,
  } = useContext(AppContext);

  const observer = useRef(null);
  const lastMovieEl = useCallback(
    (movie) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((en) => {
        if (en[0].isIntersecting) {
          if (startPage < totalPages) {
            setPage(startPage + 1);
          }
        }
      });
      if (movie) observer.current.observe(movie);
    },
    [loading, startPage, totalPages]
  );

  const filteredMovies = removeDuplicates(movies, 'id');

  return (
    <ItemList
      title={`${!!totalResult ? `Found ${totalResult} movies` : ''}`}
      showList={!!filteredMovies.length}
      className='flex flex-col'
    >
      <ul className='items-container'>
        {filteredMovies.map((movie, idx) => {
          if (filteredMovies.length === idx + 1) {
            return (
              <MovieCard reference={lastMovieEl} key={movie.id} movie={movie} />
            );
          } else {
            return <MovieCard key={movie.id} movie={movie} />;
          }
        })}
        {loading && <Loader />}
      </ul>
    </ItemList>
  );
};

export default MovieList;
