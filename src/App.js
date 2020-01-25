import React from 'react';
import './App.scss';
import Home from './Home';
import Drinks from './Drinks';
import Nav from './Nav';
import Login from './Login';
import DrinkDetails from './DrinkDetails';
import {MainComponent} from './MainContext';
import {Switch,Route} from 'react-router-dom';

export default function App() {

  return (
  <MainComponent>
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/drinks" component={Drinks}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/drinks/details/:id" component={DrinkDetails}/>
      </Switch>
    </div>
  </MainComponent>
  );
}
//Comment
//Comment2

//Comment1onthesamefile
