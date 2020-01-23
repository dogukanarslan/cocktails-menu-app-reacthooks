import React,{useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';
import SearchBar from './SearchBar';
import {Redirect} from 'react-router-dom';


const MovieList = () => {
  const providerValue = useContext(MovieContext)

  if (providerValue.login){
    return(
      <div>
          <SearchBar/>
          <div className="container">
            <div className="row">
            {providerValue.drinks.filter(drink => drink.strDrink.indexOf(providerValue.filter) > -1).map(drink => <Movie key={drink.idDrink} {...drink}/>)}
            </div>
          </div>
      </div>
    );
  } else{
    return <Redirect to="/login"/>
  }



}

export default MovieList;
