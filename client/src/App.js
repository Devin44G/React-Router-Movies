import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/'>
        <MovieList />
      </Route>
      <Route path='/movie/:id'>
        <Movie />
      </Route>
    </div>
  );
};

export default App;
