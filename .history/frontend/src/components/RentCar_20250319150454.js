import React from 'react'
import Navbar from './MyNavbar';
import Footer from './Footer';
import "../css/RentCar.css";

function RentCar() {
  return (
    <div>
    <div className="navbar">
        <Navbar/>
    </div>
    <div className='rentcar-container'>
      <button>Rent A Car</button>
      <button>Airport Transport</button>
      <button>Wedding rent</button>
    </div>
      
      
      <div className='footer' >
        <Footer/>
      </div>
      
    </div>
  )
}

export default RentCar
