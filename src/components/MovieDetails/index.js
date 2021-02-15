import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AppContext } from '../../state/contextAPI';
import Loader from './../Loader';

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const { goBack } = useHistory();
  const { movie, loading, setMovieId } = useContext(AppContext);
  useEffect(() => {
    if (movieId) {
      setMovieId(movieId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  if (!movie || loading) return <Loader />;

  return (
    <div>
      {movie.title}
      <button onClick={() => goBack()}>Go Back</button>
    </div>
  );
};

export default MovieDetails;
