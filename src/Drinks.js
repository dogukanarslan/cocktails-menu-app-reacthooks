import React from 'react';
import Drink from './Drink';
import {MainContext} from './MainContext';
import SearchBar from './SearchBar';
import {Redirect} from 'react-router-dom';


const Drinks = () => {

  const providerValue = React.useContext(MainContext)

  if (providerValue.login){
    return(
      <div>
          <SearchBar/>
          <div className="container">
            <div className="row">
              {providerValue.drinks.filter(drink => drink.strDrink.indexOf(providerValue.filter) > -1).map(drink => <Drink key={drink.idDrink} {...drink}/>)}
            </div>
          </div>
      </div>
    );
  } else{
    return <Redirect to="/login"/>
  }

}

export default Drinks;
