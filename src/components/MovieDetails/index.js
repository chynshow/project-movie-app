import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AppContext } from '../../state/contextAPI';
import Loader from './../Loader';

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const { goBack } = useHistory();
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
    <div>
      {movie.title}
      <button onClick={() => addRemoveFavorite(movie)}>
        {isInFavorite ? 'Remove From favorite' : 'Add to favorite'}
      </button>
      <button onClick={() => goBack()}>Go Back</button>
    </div>
  );
};

export default MovieDetails;
