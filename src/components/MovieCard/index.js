import React from 'react';
import PropTypes from 'prop-types';
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
        // className='filter-grayscale hover:filter-none'
        movieImg={movie.poster_path}
      />
      <div>
        {!!movie.vote_average && (
          <MovieInfo
            label='Average'
            className='pt-4 text-center'
            info={movie.vote_average}
          />
        )}
        <TitleTertiary className='text-center p-2' title={movie.title} />
      </div>
    </NavLink>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  reference: PropTypes.func,
};
