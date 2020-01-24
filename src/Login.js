import React,{useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {MainContext} from './MainContext';
import {LoginNotification} from './Notifications';

const Login = (props) => {
  const providerValue = useContext(MainContext)
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [notification, showNotification] = React.useState(false);
  const login = (e) => {
    e.preventDefault();
    if(providerValue.user.some(user => user.username === username && user.password === password) && providerValue.user.some(user => user.password === password)){
      providerValue.setLogin(true)
    } else if (username === '' && password === ''){
      return;
    } else{
      setTimeout(()=>showNotification(false),2000)
      setTimeout(()=> {
        setUsername('');
        setPassword('');
      });
      showNotification(true);

    }
  }

    if (providerValue.login){
      return <Redirect to="/"/>
    } else{
      return(
        <div className="Login">
          {notification && <LoginNotification user={username}/>}
          <form onSubmit={login} className="border text-center p-5">
            <p className="display-4">SIGN IN</p>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input style={{width: "400px"}} value={username} className="form-control mx-auto" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input style={{width: "400px"}} value={password} className="form-control mx-auto" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
              </div>
            </div>

            <button className="btn btn-outline-dark">Sign In</button>
            <div className="d-flex justify-content-around mx-auto pt-4" style={{width: "500px"}}>
              <p className="login-button">Create new account</p>
              <p className="login-button">Forget password?</p>
            </div>
          </form>



        </div>


      )
    }
}

export default Login;
