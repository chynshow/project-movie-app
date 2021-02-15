import React from 'react';
import MovieList from '../MovieList';
import Header from './../Header';
import Alert from './../Alert';
import MovieDetails from '../MovieDetails';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Alert />
      <Header />
      <Switch>
        <Route exact path='/' component={MovieList} />
      </Switch>
      <Route exact path='/movies-details/:id' component={MovieDetails} />
    </main>
  );
};

export default App;
