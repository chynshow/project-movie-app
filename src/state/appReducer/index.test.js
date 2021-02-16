import appReducer, {
  ADD_REMOVE_FAVORITE,
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
} from './';
import { initState } from './../contextAPI';

describe('test app reducer', () => {
  const movies = [
    { id: 1, title: 'Finding Ohana', average: 7, budget: '10000' },
    {
      id: 2,
      title: 'Jumanji: The Next Level',
      average: 7,
      budget: '125000000',
    },
  ];

  it('test reducer with default parameters', () => {
    const state = [];
    const action = {};
    const res = appReducer(state, action);
    expect(res).toEqual(state);
  });

  it('test reducer with initial state', () => {
    const action = {};
    const res = appReducer(initState, action);
    expect(res).toEqual(initState);
  });

  it('test SET_SEARCH_PARAMS action without advancedSearch params', () => {
    const action = {
      type: SET_SEARCH_PARAMS,
      payload: { query: 'query', advancedSearch: false },
    };
    const output = {
      ...initState,
      searchParams: {
        query: 'query',
        advancedSearch: false,
      },
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
  it('test SET_SEARCH_PARAMS action with advancedSearch params', () => {
    const action = {
      type: SET_SEARCH_PARAMS,
      payload: {
        query: '',
        advancedSearch: true,
        year: '2000',
        average: '10',
        genres: ['12'],
      },
    };
    const output = {
      ...initState,
      searchParams: {
        query: '',
        advancedSearch: true,
        year: '2000',
        average: '10',
        genres: ['12'],
      },
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
  it('test FETCH_REQUEST action', () => {
    const action = {
      type: FETCH_REQUEST,
    };
    const output = {
      ...initState,
      loading: true,
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
  it('test FETCH_MOVIES_SUCCESS action', () => {
    const action = {
      type: FETCH_MOVIES_SUCCESS,
      payload: {
        results: movies,
        total_pages: 1,
        total_results: 2,
      },
    };

    const output = {
      ...initState,
      loading: false,
      movies: action.payload.results,
      totalPages: action.payload.total_pages,
      totalResult: action.payload.total_results,
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
  it('test FETCH_MOVIES_FAIL action', () => {
    const action = {
      type: FETCH_MOVIES_FAIL,
    };
    const output = {
      ...initState,
      loading: false,
      movies: [],
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
  it('test FETCH_MOVIE_SUCCESS action', () => {
    const action = {
      type: FETCH_MOVIE_SUCCESS,
      payload: movies[0],
    };

    const output = {
      ...initState,
      loading: false,
      movie: action.payload,
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
  it('test FETCH_MOVIE_FAIL action', () => {
    const action = {
      type: FETCH_MOVIE_FAIL,
    };
    const output = {
      ...initState,
      loading: false,
      movie: null,
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
  it('test SET_MOVIE_ID action', () => {
    const action = {
      type: SET_MOVIE_ID,
      payload: 45,
    };
    const output = {
      ...initState,
      movieId: action.payload,
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
  it('test ADD_REMOVE_FAVORITE action if movie is not in favotites', () => {
    const action = {
      type: ADD_REMOVE_FAVORITE,
      payload: movies[0],
    };
    const output = {
      ...initState,
      favorites: [action.payload],
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
  it('test ADD_REMOVE_FAVORITE action if movie is in favotites', () => {
    const action = {
      type: ADD_REMOVE_FAVORITE,
      payload: movies[0],
    };
    const output = {
      ...initState,
      favorites: [],
    };
    const res = appReducer({ ...initState, favorites: [movies[0]] }, action);
    expect(res).toEqual(output);
  });
  it('test SHOW_ALERT action', () => {
    const action = {
      type: SHOW_ALERT,
      payload: 'Some errors!',
    };
    const output = {
      ...initState,
      alertMsg: action.payload,
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
  it('test HIDE_ALERT action', () => {
    const action = {
      type: HIDE_ALERT,
    };
    const output = {
      ...initState,
      alertMsg: null,
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
  it('test SET_PAGE action', () => {
    const action = {
      type: SET_PAGE,
    };
    const output = {
      ...initState,
      startPage: initState.startPage + 1,
    };
    const res = appReducer(initState, action);
    expect(res).toEqual(output);
  });
});
