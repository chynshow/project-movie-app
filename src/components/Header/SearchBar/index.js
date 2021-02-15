import React, { useContext, useState } from 'react';
import Search from './Search';
import AdvancedSearch from './AdvancedSearch';
import { AppContext } from './../../../state/contextAPI';

const SearchBar = () => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const { searchParams, setSearchParams } = useContext(AppContext);
  const [values, setValues] = useState(searchParams);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ ...values, advancedSearch: showAdvancedSearch });
    if (showAdvancedSearch) return setShowAdvancedSearch(false);
    setValues({ query: '', year: '', genres: [], average: '' });
  };

  return (
    <div>
      <button onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}>
        Toggle
      </button>
      {!showAdvancedSearch ? (
        <Search
          handleOnSubmit={handleOnSubmit}
          setValues={setValues}
          values={values}
        />
      ) : (
        <AdvancedSearch
          handleOnSubmit={handleOnSubmit}
          setValues={setValues}
          values={values}
        />
      )}
    </div>
  );
};

export default SearchBar;
