import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../Input';
import { TitleTertiary } from '../../../../Title';
const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

const Genres = ({ setValues, values }) => {
  const handleOnChange = (e) => {
    const isChecked = e.target.checked;

    if (isChecked)
      return setValues({
        ...values,
        genres: [...values.genres, e.target.value],
      });

    if (!isChecked)
      return setValues({
        ...values,
        genres: [...values.genres.filter((item) => item === e.target.value)],
      });
  };
  return (
    <fieldset className='flex flex-col'>
      <TitleTertiary className='font-bold' title='Filter by genres' />
      {genres.map((genre) => (
        <label className='flex items-center' key={genre.id}>
          <Input
            className='mr-2'
            type='checkbox'
            name={genre.name}
            value={genre.id}
            handleOnChange={(e) => handleOnChange(e)}
          />
          {genre.name}
        </label>
      ))}
    </fieldset>
  );
};

export default Genres;

Genres.propTypes = {
  setValues: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};
