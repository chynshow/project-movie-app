import React, { useCallback, useContext, useRef } from 'react';
import Loader from './../Loader';
import { AppContext } from '../../state/contextAPI';
import MovieCard from '../MovieCard';
import { TitleSecondary } from './../Title';
import ScrollToTop from 'react-scroll-up';
import { ChevronUp } from '../SVGs';

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
    <div className='flex flex-col'>
      {totalResult && (
        <TitleSecondary
          className='text-gray-500 italic text-center'
          title={`Found ${totalResult} movies`}
        />
      )}
      {/* flex flex-wrap container justify-center */}
      <ul className='items-container'>
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
      <ScrollToTop showUnder={300}>
        <ChevronUp className='w-8 h-8 bg-gray-700 text-gray-50 rounded-full' />
      </ScrollToTop>
    </div>
  );
};

export default MovieList;
