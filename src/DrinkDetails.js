import React, {useEffect,useContext} from 'react';
import {MainContext,Counter} from './MainContext';
import {Redirect} from 'react-router-dom';

const DrinkDetails = (props) => {
  const providerValue = useContext(MainContext)
  useEffect(()=> {
    providerValue.fetchItemDetails(props.match.params.id)
  },[props.match.params.id,providerValue]);

  if (providerValue.login){
    return(
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={providerValue.details[0].strDrinkThumb} alt=""/>
                <div className="card-body">
                  <h4 className="card-heading">{providerValue.details[0].strDrink}</h4>
                  <p className="card-text">{providerValue.details[0].strAlcoholic}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  } else{
    return <Redirect to="/" />
  }



}

export default DrinkDetails;
