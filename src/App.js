import React from 'react';
import './App.css';
import Home from './Home';
import MovieList from './MovieList';
import Nav from './Nav';
import Login from './Login';
import DrinkDetails from './DrinkDetails';
import {MovieProvider} from './MovieContext';
import {Switch,Route} from 'react-router-dom';

export default function App() {

  return (
  <MovieProvider>
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/drinks" component={MovieList}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/drinks/details/:id" component={DrinkDetails}/>
      </Switch>
    </div>
  </MovieProvider>
  );
}
