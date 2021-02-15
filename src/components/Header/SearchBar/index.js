import React, { useContext, useState } from 'react';
import Search from './Search';
import AdvancedSearch from './AdvancedSearch';
import { AppContext } from './../../../state/contextAPI';
import Button from '../../Button';
import { CogSVG } from '../../SVGs';

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
    <div className='relative'>
      {!showAdvancedSearch && (
        <Button
          className='absolute right-full top-1'
          handleOnClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
        >
          <CogSVG className='w-8 mx-3' />
        </Button>
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
