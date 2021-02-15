import React from 'react';
import MovieList from '../MovieList';
import Header from './../Header';
import Alert from './../Alert';
import MovieDetails from '../MovieDetails';
import { Route, Switch } from 'react-router-dom';
import Favorites from '../Favorites';

const App = () => {
  return (
    <main className='flex flex-col border justify-center items-center min-h-screen'>
      <Alert />
      <Header />
      <Switch>
        <Route exact path='/' component={MovieList} />
        <Route exact path='/favorites' component={Favorites} />
      </Switch>
      <Route exact path='/movies-details/:id' component={MovieDetails} />
    </main>
  );
};

export default App;
