import { createContext, useEffect, useReducer } from 'react';
import appReducer, {
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS,
  FETCH_REQUEST,
  HIDE_ALERT,
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
  }, [state.searchParams, state.startPage]);

  const setSearchParams = (searchParams) =>
    dispatch({ type: SET_SEARCH_PARAMS, payload: searchParams });

  const getMovies = async (query, startPage) => {
    dispatch({ type: FETCH_REQUEST });

    try {
      const res = await fetch(
        `${URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${startPage}`
      );
      const data = await res.json();

      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: {
          results: data.results,
          totalPages: data.total_pages,
          totalResult: data.total_results,
        },
      });
    } catch (error) {
      dispatch({ type: FETCH_MOVIES_FAIL });
      showAlert('Server Error!');
      console.error(error);
    }
  };

  const setPage = () => dispatch({ type: SET_PAGE });

  const showAlert = (msg, time = 2000) => {
    dispatch({ type: SHOW_ALERT, payload: msg });
    setTimeout(() => {
      dispatch({ tyep: HIDE_ALERT });
    }, time);
  };

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
