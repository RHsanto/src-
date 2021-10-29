import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
  const{user,logOut}=useAuth();
  return (
    <div className="header ">
      <div className='header-menu border-bottom d-none d-md-block '>
     <div className="container ">
       <div className="row">
       <div className="col-lg-6 ">
        <h1 className='logo'><span className='fw-bold className="navbar-brand"'>Trust</span> Care</h1>
       </div>

       <div className="col-lg-6 py-2">
        <div className="row icon ">
          <div className="col-4 ">
          <i className="far fa-clock text-primary"></i>
           <div className="items">
             <li>Saturday - Friday </li>
             <small>8AM - 11PM</small>
           </div>
          </div>
          <div className="col-4 ">
          <i className="fas fa-mobile-alt text-danger"></i>
          <div className="items ">
             <li>+8801 2580 7896</li>
             <small>Office@Trustcare.com</small>
           </div>
          </div>
          <div className="col-4">
          <i className="fas fa-map-marker-alt text-success"></i>
          <div className="items">
             <li>Gulshan Avenue </li>
             <small>Dhaka</small>
           </div>
          </div>
        </div>
       </div>
       </div>
     </div>
    </div>

    
{/* start nav bar section  */}
<nav className="navbar navbar-expand-lg navbar-light bg-info ">
  <div className="container">
  <span className='logo navbar-brand fs-1 d-block d-md-none'><span className='fw-bold '>Trust</span> Care</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse text-start " id="navbarNav">
{/* start nav  section  */}
  <div className="col-6 p-3 ">
  <ul className="navbar-nav fw-bold ">
             <NavLink  to='/home' > <li> Home</li></NavLink>
             <NavLink to='/services'><li>Services</li></NavLink>
             <NavLink to='/news'><li>Latest News</li></NavLink>
             <NavLink to='/pricing'><li>Pricing</li></NavLink>
             <NavLink to='/about'><li>About</li></NavLink>
             <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
  </div>


    <div className="col-6 text-center">
    <div className=" me-3  ">
{/* here login ,signup & log out button  */}
        
{
     user.email ?
        <>  
            <img className='login-img rounded-circle me-2' src={user.photoURL} alt="" />
            <span className='user-name'>{user.displayName} </span>
            
           {user.emailVerified? <></>:
            <span className='user-name'>{user.email} </span>}
            <button className='btn btn-outline-danger border-2 logout m-2' onClick={logOut}> Log-out</button> </>
        :<>
         <Link to="/login"><button className='btn btn-outline-primary m-2'>Login</button></Link>   <Link to='/signup'><button className='btn btn-success'> Sign up</button></Link></>
        
     }
           </div>
         </div>
        </div>
      </div>
     </nav>
   </div>
  );
};

export default Header;