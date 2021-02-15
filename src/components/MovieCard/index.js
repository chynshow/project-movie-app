import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = ({ movie, reference }) => {
  if (reference)
    return (
      <div ref={reference}>
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
  return (
    <div>
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
