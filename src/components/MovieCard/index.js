import React from 'react';
import { NavLink } from 'react-router-dom';
import { MovieInfo, MovieImage } from '../MovieDetails';
import { TitleTertiary } from '../Title';

const MovieCard = ({ movie, reference }) => {
  return (
    <NavLink
      ref={reference ? reference : null}
      className='item-card'
      to={`/movies-details/${movie.id}`}
    >
      <MovieImage
        className='filter-grayscale hover:filter-none'
        movieImg={movie.poster_path}
      />
      <div>
        <MovieInfo
          label='Average'
          className='pt-4 text-center'
          info={movie.vote_average}
        />
        <TitleTertiary className='text-center px-2' title={movie.title} />
      </div>
    </NavLink>
  );
};

export default MovieCard;
