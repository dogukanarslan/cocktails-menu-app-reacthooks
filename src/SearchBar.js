import React,{useContext} from 'react';
import {MovieContext} from './MovieContext';

const SearchBar = () => {

  const providerValue = useContext(MovieContext)

  return(
    <div className="container">
      <form>
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
      <p className="lead">Total: {providerValue.drinks.length}</p>
    </div>

  )
}

export default SearchBar;
