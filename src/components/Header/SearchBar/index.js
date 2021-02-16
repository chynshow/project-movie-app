import React, { useContext, useEffect, useState } from 'react';
import Search from './Search';
import AdvancedSearch from './AdvancedSearch';
import { AppContext } from './../../../state/contextAPI';
import { CogSVG } from '../../SVGs';

const SearchBar = () => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const { searchParams, setSearchParams, cleanSeachParams } = useContext(
    AppContext
  );
  const [values, setValues] = useState(searchParams);
  useEffect(() => {
    cleanSeachParams();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ ...values, advancedSearch: showAdvancedSearch });
    setValues({ query: '', year: '', genres: [], average: '' });

    if (showAdvancedSearch) return setShowAdvancedSearch(false);
  };

  return (
    <div className='relative mt-2 w-full '>
      {!showAdvancedSearch && (
        <button
          className='absolute right-full top-2 md:top-1'
          onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
        >
          <CogSVG className='w-6 md:w-8 mx-3' />
        </button>
      )}
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
          setShowAdvancedSearch={setShowAdvancedSearch}
        />
      )}
    </div>
  );
};

export default SearchBar;
