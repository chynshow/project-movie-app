export const SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCH_PARAMS:
      return { ...state, searchParams: payload, movies: [] };

    default:
      return state;
  }
};
