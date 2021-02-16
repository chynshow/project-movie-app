import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../state/contextAPI';
import { CameraSVG, HeartSVG, TrashSVG } from '../SVGs';
import Loader from './../Loader';
import GoBack from '../GoBackBtn';

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const {
    movie,
    loading,
    setMovieId,
    addRemoveFavorite,
    favorites,
  } = useContext(AppContext);
  useEffect(() => {
    if (movieId) {
      setMovieId(movieId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const isInFavorite = favorites.some((movie) => movie.id === +movieId);

  if (!movie || loading) return <Loader />;

  return (
    <div className='flex flex-col items-center p-6 md:flex-row md:container md:justify-center'>
      <MovieImage movieImg={movie.poster_path} />
      <div className='pt-4 ml-10'>
        <MovieInfo label='Title' info={movie.title} />
        <MovieInfo label='Original Title' info={movie.original_title} />
        <MovieInfo label='Average' info={movie.vote_average} />
        <MovieInfo label='Overview' className='w-full' info={movie.overview} />
        <MovieInfo label='Release Date' info={movie.release_date} />
        <MovieInfo label='Run Time' info={`${movie.runtime} min`} />
        <MovieInfo label='Budget' info={`${movie.budget}$`} />
        <MovieInfoArray label='Genres' array={movie.genres} />
        <MovieInfoArray label='Countries' array={movie.production_countries} />
        <div className='flex flex-col md:flex-row md:justify-between mt-4'>
          <GoBack title='Movies' />
          <button
            className='flex items-center btn--primary mt-2 md:m-0'
            onClick={() => addRemoveFavorite(movie)}
          >
            {isInFavorite && (
              <>
                Remove from Favorite <TrashSVG className='w-5 mx-2' />
              </>
            )}
            {!isInFavorite && (
              <>
                Add to Favorite <HeartSVG className='w-5 mx-2' />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

export const MovieImage = ({ movieImg, className }) => (
  <>
    {movieImg ? (
      <img
        className={`rounded-sm object-cover ${className}`}
        src={`https://image.tmdb.org/t/p/w200${movieImg}`}
        alt={movieImg}
      />
    ) : (
      <CameraSVG className='w-24 mt-20 text-gray-600' />
    )}
  </>
);

export const MovieInfo = ({ label, info, className }) => (
  <>
    <div className={className}>
      <span className='pr-2 italic font-bold'>{label}:</span>
      {info}
    </div>
  </>
);

export const MovieInfoArray = ({ label, array }) => {
  return (
    <>
      {!!array.length && (
        <div className='flex items-center'>
          <span className='pr-2 italic font-bold'>{label}:</span>
          {array.map((info, idx) => (
            <span className='px-1' key={idx}>
              {info.name} {array.length !== idx + 1 ? ',' : ''}
            </span>
          ))}
        </div>
      )}
    </>
  );
};
