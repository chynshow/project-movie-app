import removeDuplicates from '../../helpers/removeDuplicates';

export const SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAIL = 'FETCH_MOVIES_FAIL';
export const SET_PAGE = 'SET_PAGE';
export const SET_MOVIE_ID = 'SET_MOVIE_ID';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAIL = 'FETCH_MOVIE_FAIL';

export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const ADD_REMOVE_FAVORITE = 'ADd_REMOVE_FAVORITE';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCH_PARAMS:
      return { ...state, searchParams: payload, movies: [], startPage: 1 };
    case FETCH_REQUEST:
      return { ...state, loading: true };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: removeDuplicates([...state.movies, ...payload.results], 'id'),
        totalPages: payload.total_pages,
        totalResult: payload.total_results,
      };
    case FETCH_MOVIES_FAIL:
      return { ...state, loading: false, movies: [] };

    case SET_PAGE:
      return { ...state, startPage: state.startPage + 1 };
    case SET_MOVIE_ID:
      return { ...state, movieId: payload };
    case FETCH_MOVIE_SUCCESS:
      return { ...state, loading: false, movie: payload };
    case FETCH_MOVIE_FAIL:
      return { ...state, loading: false, movie: null };

    case SHOW_ALERT:
      return { ...state, alertMsg: payload };
    case HIDE_ALERT:
      return { ...state, alertMsg: null };

    case ADD_REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.some((movie) => movie.id === payload.id)
          ? [...state.favorites.filter((movie) => movie.id === payload)]
          : [...state.favorites, payload],
      };

    default:
      return state;
  }
};
