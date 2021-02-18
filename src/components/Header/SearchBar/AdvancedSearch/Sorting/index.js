import React from 'react';
import { TitleTertiary } from '../../../../Title';

const sortOptions = [
  { label: 'Popularity (from less popular to more)', value: 'popularity.asc' },
  {
    label: 'Popularity (from most popular to less)',
    value: 'popularity.desc',
  },
  { label: 'Release date (A-Z)', value: 'release_date.asc' },
  { label: 'Release date (Z-A)', value: 'release_date.desc' },
  { label: 'Revenue (from lower to higher)', value: 'revenue.asc' },
  { label: 'Revenue (from higher to lower)', value: 'revenue.desc' },
  { label: 'Primary release date (A-Z)', value: 'primary_release_date.asc' },
  { label: 'Primary release date (Z-A)', value: 'primary_release_date.desc' },
  { label: 'Original title (A-Z)', value: 'original_title.asc' },
  { label: 'Original title (Z-A)', value: 'original_title.desc' },
  { label: 'Vote average (from lower to higher)', value: 'vote_average.asc' },
  { label: 'Vote average (from higher to lower)', value: 'vote_average.desc' },
  { label: 'Vote count (from lower to higher)', value: 'vote_count.asc' },
  { label: 'Vote count (from higher to lower)', value: 'vote_count.desc' },
];

const Sorting = ({ setValues, values }) => {
  return (
    <>
      <TitleTertiary className='font-bold' title='Sort by' />
      <select
        className='py-2 bg-transparent border border-dashed cursor-pointer outline-none rounded-md'
        onChange={({
          target: {
            selectedOptions: [option],
          },
        }) =>
          setValues({
            ...values,
            sortParameter: {
              label: option.getAttribute('data-label'),
              value: option.value,
            },
          })
        }
      >
        <option value=''>
          {values.sortParameter
            ? values.sortParameter.label
            : 'Choose an option'}
        </option>
        {sortOptions.map((option) => (
          <option
            data-label={option.label}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Sorting;
