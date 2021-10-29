import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const {signInUsingGoogle,handleEmailChange,handlePasswordChange,error2,signInWithEmail,email,password}=useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/';

  const handleLogin=e=>{
    e.preventDefault(); 
    signInWithEmail(email,password)
    history.push(redirect_uri)
  }

  const handleGoogleLogin=()=>{
    signInUsingGoogle()
    .then(result=>{
   history.push( redirect_uri);
     })
     
  }
  
  return (
    <div className="container">
      <p className='text-danger fw-bold mt-5 fs-3 '>{error2}</p>
      <div className="row d-flex justify-content-center align-items-center mt-5 ">
        <div className="col-6">
  {/* here login submit from */}
     <form onSubmit={handleLogin} >
          <div className="form-floating mb-3">
           <input  onBlur={handleEmailChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
              <label htmlFor="floatingInput">Email address</label>
                 </div>
                     <div className="form-floating">
                   <input onBlur={handlePasswordChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                 <label htmlFor="floatingPassword">Password</label>
              </div>
              <p className='text-start mt-3'>Create a New Account <Link to='/signup'> Go to Register</Link> </p>
          <button  type="submit" className="btn btn-primary  text-light mt-4">Login</button>
          <hr />
     </form>
        </div>
      </div>
{/* here google login button */}
    <button onClick={handleGoogleLogin}  className="btn btn-success mb-5" >
    Sign in with <i className="fab fa-google"></i></button>
      </div>
  );
};

export default Login;