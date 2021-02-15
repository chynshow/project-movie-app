import React, { useCallback, useContext, useRef } from 'react';
import Loader from './../Loader';
import { AppContext } from '../../state/contextAPI';
import MovieCard from '../MovieCard';
import { TitleSecondary } from './../Title';

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
            setPage();
          }
        }
      });
      if (movie) observer.current.observe(movie);
    },
    [loading, startPage, totalPages]
  );

  return (
    <ul>
      {totalResult && <TitleSecondary title={`Total Result: ${totalResult}`} />}
      {movies.map((movie, idx) => {
        if (movies.length === idx + 1) {
          return (
            <MovieCard reference={lastMovieEl} key={movie.id} movie={movie} />
          );
        } else {
          return <MovieCard key={movie.id} movie={movie} />;
        }
      })}
      {loading && <Loader />}
    </ul>
  );
};

export default MovieList;