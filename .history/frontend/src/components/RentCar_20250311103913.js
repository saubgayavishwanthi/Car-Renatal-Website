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
      <div className='category-tab'>
        <button className='btn-categroy'>Rent A Car</button>
        <button className='btn-categroy'>Airport Transfer</button>
        <button className='btn-categroy'>Wedding Rentals</button>
      </div>
      
      <div className='footer' >
        <Footer/>
      </div>
      
    </div>
  )
}

export default RentCar
