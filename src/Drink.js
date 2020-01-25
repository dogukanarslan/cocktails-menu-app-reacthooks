import React from 'react';
import {Link} from 'react-router-dom';
const Drink = (props) => {

  return(
    <div className="col-md-4">
      <Link to={`/drinks/details/${props.idDrink}`}>
        <div className="card">
          <img src={props.strDrinkThumb} className="card-img-top" alt="..."/>
          <div className="card-body">
            <button className="btn btn-outline-dark btn-sm">{props.strDrink}</button>
          </div>
        </div>
      </Link>
    </div>

  );
}

export default Drink;

//Comment!!
