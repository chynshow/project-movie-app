import removeDuplicates from './removeDuplicates';

it('return empty array', () => {
  const res = removeDuplicates([], 'id');
  expect(res).toEqual([]);
});

it('return array without duplicates', () => {
  const input = [
    { title: 'Finding Ohana', average: 7, budget: '10000' },
    { title: 'Finding Ohana', average: 7, budget: '10000' },
    { title: 'Jumanji: The Next Level', average: 7, budget: '125000000' },
    { title: 'Jumanji: The Next Level', average: 7, budget: '125000000' },
  ];
  const output = [
    { title: 'Finding Ohana', average: 7, budget: '10000' },
    { title: 'Jumanji: The Next Level', average: 7, budget: '125000000' },
  ];
  const res = removeDuplicates(input, 'title');
  expect(res).toEqual(output);
});
