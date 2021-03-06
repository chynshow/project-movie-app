import React from 'react';
import PropTypes from 'prop-types';
import { TitleTertiary } from '../../../Title';
import Input from './../../../Input';
import Genres from './Genres';
import Sorting from './Sorting';

const AdvancedSearch = ({
  handleOnSubmit,
  setValues,
  values,
  setShowAdvancedSearch,
}) => (
  <form className='flex flex-col pb-8' onSubmit={(e) => handleOnSubmit(e)}>
    <Genres setValues={setValues} values={values} />
    <TitleTertiary className='font-bold' title='Filter by year' />
    <Input
      label='A filter to limit the results to a specific year (looking at all
      release dates).'
      type='number'
      name='year'
      min='1900'
      value={values.year}
      placeholder='Movie year'
      handleOnChange={(e) =>
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        })
      }
    />
    <TitleTertiary className='font-bold' title='Filter by rating' />
    <Input
      label='Include movies that have a rating that is greater or equal to the
    specified value.'
      type='number'
      name='average'
      placeholder='Movie rating'
      min='1'
      max='10'
      value={values.average}
      handleOnChange={(e) =>
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        })
      }
    />

    <Sorting setValues={setValues} values={values} />
    <div className='flex justify-between py-4'>
      <button className='btn--primary' type='submit'>
        Apply
      </button>
      <button
        className='btn--secondary'
        type='button'
        onClick={() => setShowAdvancedSearch(false)}
      >
        Cancel
      </button>
    </div>
  </form>
);

export default AdvancedSearch;

AdvancedSearch.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  setShowAdvancedSearch: PropTypes.func.isRequired,
};
