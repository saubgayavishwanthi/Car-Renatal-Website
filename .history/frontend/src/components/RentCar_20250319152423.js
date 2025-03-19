import React from 'react'
import Navbar from './MyNavbar';
import Footer from './Footer';
import "../css/RentCar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function RentCar() {
  return (
    <div>
    <div className="navbar">
        <Navbar/>
    </div>
   
    <div className=' button-d-grid  d-md-flex gap-2 justify-content-md-center'>
      <button className='btn btn-outline-success btn-lg'>Rent A Car</button>
      <button className='btn btn-outline-success btn-lg'>Airport Transport</button>
      <button className='btn btn-outline-success btn-lg'>Wedding Rent</button>
    </div>
      
      
      <div className='footer' >
        <Footer/>
      </div>
      
    </div>
  )
}

export default RentCar
