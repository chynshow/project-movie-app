import React from 'react';
import MovieList from '../MovieList';
import Header from './../Header';
import Alert from './../Alert';
import MovieDetails from '../MovieDetails';
import { Route, Switch } from 'react-router-dom';
import Favorites from '../Favorites';
import NotFound from '../NotFound';

const App = () => {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <Alert />
      <Header />
      <Switch>
        <Route exact path='/' component={MovieList} />
        <Route exact path='/favorites' component={Favorites} />
        <Route exact path='/movies-details/:id' component={MovieDetails} />
        <NotFound />
      </Switch>
    </main>
  );
};

export default App;
