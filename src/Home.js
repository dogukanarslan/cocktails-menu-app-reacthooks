import React,{useContext} from 'react';
import {MainContext} from './MainContext';
import {Redirect} from 'react-router-dom';

const Home = () => {
  const providerValue = useContext(MainContext)

  if(!providerValue.login){
    return <Redirect to="/login"/>
  } else{
    return <Redirect to="/drinks"/>
  }

}

export default Home;
