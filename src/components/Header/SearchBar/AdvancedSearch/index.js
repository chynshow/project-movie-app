import React from 'react';
import Button from '../../../Button';
import { TitleTertiary } from '../../../Title';
import Input from './../../../Input';
import Genres from './Genres';

const AdvancedSearch = ({ handleOnSubmit, setValues, values }) => (
  <form onSubmit={(e) => handleOnSubmit(e)}>
    <TitleTertiary title='Filter by genres' />
    <Genres setValues={setValues} values={values} />
    <TitleTertiary title='Filter by year' />
    <Input
      label='A filter to limit the results to a specific year (looking at all
      release dates)'
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
    <TitleTertiary title='Filter by Rating' />
    <Input
      label='Include movies that have a rating that is greater or equal to the
    specified value'
      type='number'
      name='average'
      placeholder='Movie rating'
      min='1'
      value={values.average}
      handleOnChange={(e) =>
        setValues({
          ...values,

          [e.target.name]: e.target.value,
        })
      }
    />
    <Button type='submit'>Search</Button>
  </form>
);

export default AdvancedSearch;
