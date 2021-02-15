import { createContext, useEffect, useReducer } from 'react';
import appReducer, {
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_FAIL,
  FETCH_MOVIE_SUCCESS,
  FETCH_REQUEST,
  HIDE_ALERT,
  SET_MOVIE_ID,
  SET_PAGE,
  SET_SEARCH_PARAMS,
  SHOW_ALERT,
} from '../appReducer';

const initState = {
  loading: false,
  movies: [],
  startPage: 1,
  totalPages: null,
  totalResult: null,
  alertMsg: null,
  searchParams: {
    query: '',
    advancedSearch: false,
    genres: [],
    year: '',
    average: '',
  },
};

const URL = 'https://api.themoviedb.org/3/';

export const AppContext = createContext(initState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initState);

  useEffect(() => {
    if (state.searchParams.query) {
      getMovies(state.searchParams.query, state.startPage);
    }
    if (state.searchParams.advancedSearch) {
      discoverMovies(state.searchParams, state.startPage);
    }
  }, [state.searchParams, state.startPage]);

  useEffect(() => {
    if (state.movieId) {
      getMovie(state.movieId);
    }
  }, [state.movieId]);

  const getMovies = async (query, startPage) => {
    dispatch({ type: FETCH_REQUEST });

    try {
      const res = await fetch(
        `${URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${startPage}`
      );
      const data = await res.json();

      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: FETCH_MOVIES_FAIL });
      showAlert('Server Error!');
      console.error(error);
    }
  };
  const discoverMovies = async (query, startPage) => {
    dispatch({ type: FETCH_REQUEST });

    const url = `${URL}discover/movie?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&include_adult=false&include_video=false${
      query.year ? `&year=${query.year}` : ''
    }${query.average ? `&vote_average.gte=${query.average}` : ''}${
      query.genres ? `&with_genres=${query.genres.toString()}` : ''
    }&page=${startPage}`.trim();

    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_MOVIES_SUCCESS });
      showAlert('Server errors!');
      console.error(error);
    }
  };

  const getMovie = async (id) => {
    dispatch({ type: FETCH_REQUEST });
    const url = `${URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${state.startPage}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      dispatch({ type: FETCH_MOVIE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_MOVIE_FAIL });
      showAlert('Server errors!');
      console.error(error);
    }
  };

  const setSearchParams = (searchParams) =>
    dispatch({ type: SET_SEARCH_PARAMS, payload: searchParams });

  const setPage = () => dispatch({ type: SET_PAGE });
  const showAlert = (msg, time = 2000) => {
    dispatch({ type: SHOW_ALERT, payload: msg });
    setTimeout(() => {
      dispatch({ tyep: HIDE_ALERT });
    }, time);
  };
  const setMovieId = (movieId) =>
    dispatch({ type: SET_MOVIE_ID, payload: movieId });

  return (
    <AppContext.Provider
      value={{
        searchParams: state.searchParams,
        setSearchParams,
        movies: state.movies,
        loading: state.loading,
        totalResult: state.totalResult,
        totalPages: state.totalPages,
        startPage: state.startPage,
        setPage,
        alertMsg: state.alertMsg,
        setMovieId,
        movie: state.movie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
