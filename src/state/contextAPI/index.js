import { createContext, useReducer } from 'react';
import appReducer, { SET_SEARCH_PARAMS } from '../appReducer';

const initState = {
  searchParams: {
    query: '',
    advancedSearch: false,
    genres: [],
    year: '',
    average: '',
  },
};

export const AppContext = createContext(initState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initState);

  const setSearchParams = (searchParams) =>
    dispatch({ type: SET_SEARCH_PARAMS, payload: searchParams });

  return (
    <AppContext.Provider
      value={{ searchParams: state.searchParams, setSearchParams }}
    >
      {children}
    </AppContext.Provider>
  );
};
