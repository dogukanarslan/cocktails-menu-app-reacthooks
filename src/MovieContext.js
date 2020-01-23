import React,{useState,useEffect,createContext} from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = props => {

  const [drinks, setDrinks] = useState([]);
  const [options, setOptions] = useState([]);
  const [filter, setFilter] = useState("");
  const [login, setLogin] = useState(false);
  const [details, setDetails] = useState([]);

  const fetchData = async (filter) => {
    const result = await axios({
      method: "get",
      url: `https://the-cocktail-db.p.rapidapi.com/filter.php?c=${filter}`,
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "9625f60069msh7df0d5a3ae5a4ddp1d759ejsn0cce4042f495"
      }
    });
    setDrinks(result.data.drinks || []);
  };

  const fetchItemDetails = async (id) => {
    const result = await axios ({
      method: 'get',
      url: `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`,
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "9625f60069msh7df0d5a3ae5a4ddp1d759ejsn0cce4042f495"
      }
    });
    setDetails(result.data.drinks)
  };


  const getOptions = async () => {
    const result = await axios({
      method: "get",
      url: `https://the-cocktail-db.p.rapidapi.com/list.php?c=list`,
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "9625f60069msh7df0d5a3ae5a4ddp1d759ejsn0cce4042f495"
      }
    });
    setOptions(result.data.drinks)
  };

  const store = {
    drinks,
    options,
    fetchData,
    filter,
    setFilter,
    login,
    setLogin,
    fetchItemDetails,
    details,
    setDetails
  };

  useEffect(() => {
    fetchData('Ordinary Drink');
    getOptions()
  },[]);

  return(
    <MovieContext.Provider value={store}>
      {props.children}
    </MovieContext.Provider>
  );
};
