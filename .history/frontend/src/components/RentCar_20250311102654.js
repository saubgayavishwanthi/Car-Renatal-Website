import React from 'react'
import MyNavbar from './MyNavbar';
import Footer from './Footer';

function RentCar() {
  return (
    <div>
    <div>
        <NavBar />
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
