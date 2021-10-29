import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
  const {signInUsingGoogle,handleEmailChange,handlePasswordChange,error,createNewUser,email,password,}=useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/';

  const handleSubmit =e=>{
    e.preventDefault();
    createNewUser(email,password)
      history.push(redirect_uri)
      
  }

  const handleGoogleLogin=()=>{
    signInUsingGoogle()
    .then(result=>{
   history.push( redirect_uri);
     })
     
  }
  return (
    <div className='container'>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="col-lg-6">
      <p className=' p-2 rounded fs-4 text-danger '>{error}</p>
      {/* here signup from */}
         <form  onSubmit={handleSubmit}>
         <div className="form-floating mb-3">
            <input type="text" className="form-control"placeholder="Enter Your name " required/>
            <label >Your name</label>
         </div>
        <div className="form-floating mb-3">
          <input  onBlur={handleEmailChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
          <label htmlFor="floatingInput">Email address</label>
      </div>
         <div className="form-floating mb-3">
            <input  onBlur={handlePasswordChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
            <label htmlFor="floatingPassword">Password</label>
         </div>
         <p> Already a member? <Link to='/login'>Go to Login</Link></p>

        <button type="submit" className="btn btn-info ">Register </button>
         <hr />
         </form>
         {/* here google login button */}
         <button onClick={handleGoogleLogin}  className="btn btn-success mb-5" >Sign in with <i className="fab fa-google"></i></button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;