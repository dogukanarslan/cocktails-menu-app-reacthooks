import React,{useContext} from 'react';
import {MainContext} from './MainContext';

const SearchBar = () => {

  const providerValue = useContext(MainContext)

  return(
    <div className="container">
      <form onClick={e => e.preventDefault()}>
        <div className="row">

          <div className="col-md-4">
            <div className="form-group">
              <label>Search</label>
              <input className="form-control" type="text" placeholder="Search for a drink" onChange={e => providerValue.setFilter(e.target.value)}/>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Select Category</label>
              <select className="form-control" onChange={e => providerValue.fetchData(e.target.value)}>
                {providerValue.options.map(option => <option key={option.strCategory} value={option.strCategory}>{option.strCategory}</option>)}
              </select>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Sort by</label>
              <select className="form-control">
                <option value="name">Name</option>
                <option value="id">ID</option>
              </select>
            </div>
          </div>

        </div>
      </form>
      <p className="lead">Total: {providerValue.drinks.filter(drink => drink.strDrink.indexOf(providerValue.filter) > -1).length}</p>
    </div>

  )
}

export default SearchBar;
