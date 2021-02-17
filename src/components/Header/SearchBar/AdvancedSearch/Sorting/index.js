import React from 'react';
import { TitleTertiary } from '../../../../Title';

const sortOptions = [
  {
    name: 'Popularity (from most popular to less)',
    value: 'popularity.desc',
  },
  { name: 'Popularity (from less popular to more)', value: 'popularity.asc' },
  { name: 'Release date (A-Z)', value: 'release_date.asc' },
  { name: 'Release date (Z-A)', value: 'release_date.desc' },
  { name: 'Revenue (from lower to higher)', value: 'revenue.asc' },
  { name: 'Revenue (from higher to lower)', value: 'revenue.desc' },
  { name: 'Primary release date (A-Z)', value: 'primary_release_date.asc' },
  { name: 'Primary release date (Z-A)', value: 'primary_release_date.desc' },
  { name: 'Original title (A-Z)', value: 'original_title.asc' },
  { name: 'Original title (Z-A)', value: 'original_title.desc' },
  { name: 'Vote average (from lower to higher)', value: 'vote_average.asc' },
  { name: 'Vote average (from higher to lower)', value: 'vote_average.desc' },
  { name: 'Vote count (from lower to higher)', value: 'vote_count.asc' },
  { name: 'Vote count (from higher to lower)', value: 'vote_count.desc' },
];

const Sorting = ({ setValues, values }) => {
  return (
    <>
      <TitleTertiary className='font-bold' title='Sort by' />
      <select
        className='py-2 bg-transparent border border-dashed cursor-pointer outline-none rounded-md'
        onChange={(e) =>
          setValues({ ...values, sortParameter: e.target.value })
        }
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Sorting;
