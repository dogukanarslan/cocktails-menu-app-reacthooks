import React,{useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {MovieContext} from './MovieContext';

const Login = (props) => {
  const providerValue = useContext(MovieContext)

    if (providerValue.login){
      return <Redirect to="/"/>
    } else{
      return(
        <div>
          <form className="border text-center p-5">
            <p className="display-4">SIGN IN</p>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input style={{width: "400px"}} type="email" className="form-control mx-auto" placeholder="Email"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input style={{width: "400px"}} className="form-control mx-auto" type="password" placeholder="Password"/>
                </div>
              </div>
            </div>

            <button onClick={() => providerValue.setLogin(true)} className="btn btn-outline-dark">Sign In</button>
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
