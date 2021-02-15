import removeDuplicates from '../../helpers/removeDuplicates';

export const SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAIL = 'FETCH_MOVIES_FAIL';
export const SET_PAGE = 'SET_PAGE';

export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCH_PARAMS:
      return { ...state, searchParams: payload, movies: [] };
    case FETCH_REQUEST:
      return { ...state, loading: true };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: removeDuplicates([...state.movies, ...payload.results], 'id'),
        totalPages: payload.totalPages,
        totalResult: payload.totalResult,
      };
    case FETCH_MOVIES_FAIL:
      return { ...state, loading: false, movies: [] };

    case SET_PAGE:
      return { ...state, startPage: state.startPage + 1 };

    case SHOW_ALERT:
      return { ...state, alertMsg: payload };
    case HIDE_ALERT:
      return { ...state, alertMsg: null };

    default:
      return state;
  }
};
