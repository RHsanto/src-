import React, { useEffect, useState } from 'react';
import Slider from './Slider/Slider';
import './Home.css'
import Team from './Team/Team';
import About from '../About/About';
import { Link } from 'react-router-dom';

const Home = () => {
  const [services,setServices] = useState([]);

  useEffect(()=>{
    fetch('./services.json')
    .then(res => res.json())
    .then(data => setServices(data.slice(3,6)))
  },[])
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <div className="container">
     <div className="row m-3 gap-4">
     <h1 className='my-5'><span className='border-3 border-bottom border-info fw-bold'>Our   Services</span> </h1>

     {services.map(service =>
    <div 
    key={service.id}
     className="card text-start" style={{width: '24rem'}}>
    <img  src={service.img} className="card-img-top img" alt="..."/>
    <div className="card-body">
      <h5 className="card-title fw-bold">{service.name}</h5>
      <p className="card-text">{service.description.slice(0,150)}</p>
      <Link to={`/service/${service.id}`}>
      <button  className="btn btn-info">Read More </button>
      </Link>
    </div>
  </div>
    )}
     </div>
   </div>
   <Team></Team>
    </div>
  );
};

export default Home;