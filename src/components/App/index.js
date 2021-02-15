import React from 'react';
import MovieList from '../MovieList';
import Header from './../Header';
import Alert from './../Alert';

const App = () => {
  return (
    <main>
      <Alert />
      <Header />
      <MovieList />
    </main>
  );
};

export default App;
