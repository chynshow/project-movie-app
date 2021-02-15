import React from 'react';
import Input from './../../../Input';

const Search = ({ handleOnSubmit, setValues, values }) => {
  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <Input
        required
        type='text'
        className='py-2 w-full'
        autoFocus
        name='query'
        placeholder='Which movie are you looking for?'
        value={values.query}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />
    </form>
  );
};

export default Search;
