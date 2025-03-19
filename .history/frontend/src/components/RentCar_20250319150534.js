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
    <div className='rentcar-container mt-'>
      <button>Rent A Car</button>
      <button>Airport Transport</button>
      <button>Wedding Rent</button>
    </div>
      
      
      <div className='footer' >
        <Footer/>
      </div>
      
    </div>
  )
}

export default RentCar
