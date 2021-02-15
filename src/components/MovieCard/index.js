import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = ({ movie, reference, ...rest }) => {
  return (
    <div ref={reference} {...rest}>
      <NavLink to={`/movies-details/${movie.id}`}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt=''
          />
        )}
      </NavLink>
      {movie.title}
    </div>
  );
};

export default MovieCard;
