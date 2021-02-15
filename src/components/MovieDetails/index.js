import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../state/contextAPI';
import { HeartSVG, TrashSVG } from '../SVGs';
import { TitleTertiary } from '../Title';
import Loader from './../Loader';
import Button, { GoHome } from './../Button';

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
    <div className='flex items-center p-4'>
      <div>
        <MovieImage movieImg={movie.poster_path} />
      </div>
      <div className='pl-8'>
        <TitleTertiary className='flex' title={`Title: ${movie.title}`} />
        <MovieInfo label='Original Title' info={movie.original_title} />
        <MovieInfo label='Average' info={movie.vote_average} />
        <MovieInfo label='Overview' className='w-96' info={movie.overview} />
        <MovieInfo label='Release Date' info={movie.release_date} />
        <MovieInfo label='Run Time' info={`${movie.runtime} min`} />
        <MovieInfo label='Budget' info={`${movie.budget}$`} />
        <MovieInfoArray label='Genres' array={movie.genres} />
        <MovieInfoArray label='Countries' array={movie.production_countries} />
        <div className='flex items-center mt-4'>
          <GoHome />
          <Button
            className='flex items-center p-3 bg-gray-700 text-gray-50 rounded-sm'
            onClick={() => addRemoveFavorite(movie)}
          >
            {isInFavorite && (
              <>
                Remove from Favorite <TrashSVG className='w-6 mx-2' />
              </>
            )}
            {!isInFavorite && (
              <>
                Add to Favorite <HeartSVG className='w-6 mx-2' />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

export const MovieImage = ({ movieImg, className }) => (
  <>
    {movieImg && (
      <img
        className={`rounded-sm w-46 shadow-lg ${className}`}
        src={`https://image.tmdb.org/t/p/w200${movieImg}`}
        alt={movieImg}
      />
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
            <span className='px-2' key={idx}>
              {info.name}
            </span>
          ))}
        </div>
      )}
    </>
  );
};
