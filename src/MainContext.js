import React,{useState,useEffect,createContext} from 'react';
import axios from 'axios';

export const MainContext = createContext();

export const MainComponent = props => {

  const users = [
    {username:'admin', password: 'admin'},
    {username: 'anotheruser',password:'123456'},
    {username:'',password:''}
  ];

  const [drinks, setDrinks] = useState([]);
  const [options, setOptions] = useState([]);
  const [filter, setFilter] = useState("");
  const [login, setLogin] = useState(false);
  const [details, setDetails] = useState([{}]);
  const [user, setUser] = useState(users)



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
    setDetails(result.data.drinks || [])
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
    setOptions(result.data.drinks || [])
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
    setDetails,
    user
  };

  useEffect(() => {
    fetchData('Ordinary Drink');
    getOptions()
  },[]);


  return(
    <MainContext.Provider value={store}>
      {props.children}
    </MainContext.Provider>
  );
};


//Test starts here

/*
const initialState = {count: 0};

const reducer = (state,action) => {
  switch(action.type){
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count -1};
    default:
      throw new Error();
  }
}

export const Counter = () =>{
  const [state, dispatch] = React.useReducer(reducer,initialState);
  return(
    <>
      Count: {state.count}
      <button onClick={()=>dispatch({type: 'increment'})}>+</button>
      <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
*/
//Test ends here
