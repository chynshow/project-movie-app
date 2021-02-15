import React from 'react';
import { NavLink } from 'react-router-dom';
import { MovieInfo, MovieImage } from '../MovieDetails';
import { TitleTertiary } from '../Title';

const MovieCard = ({ movie, reference }) => {
  return (
    <div
      ref={reference ? reference : null}
      className='flex flex-col p-4 items-center justify-between relative flex-grow'
    >
      <NavLink className='relative' to={`/movies-details/${movie.id}`}>
        <MovieImage
          className='filter-grayscale hover:filter-none'
          movieImg={movie.poster_path}
        />
        <MovieInfo
          label='Average'
          className='pt-4 text-center'
          info={movie.vote_average}
        />
        <TitleTertiary
          className='text-center text-xs max-w-xxs'
          title={movie.title}
        />
      </NavLink>
    </div>
  );
};

export default MovieCard;
