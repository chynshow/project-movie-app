import React from 'react';

const MovieCard = ({ movie, reference, ...rest }) => {
  return (
    <div ref={reference} {...rest}>
      {movie.title}
    </div>
  );
};

export default MovieCard;
