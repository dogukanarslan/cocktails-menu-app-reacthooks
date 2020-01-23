import React,{useContext} from 'react';
import {MovieContext} from './MovieContext';
import {Redirect} from 'react-router-dom';

const Home = () => {
  const providerValue = useContext(MovieContext)

  if(!providerValue.login){
    return <Redirect to="/login"/>
  } else{
    return <Redirect to="/drinks"/>
  }

}

export default Home;
