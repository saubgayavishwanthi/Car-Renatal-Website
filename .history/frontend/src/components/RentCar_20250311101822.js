import React from 'react'
import MyNavbar from './MyNavbar';
import Footer from './Footer';

function RentCar() {
  return (
    <div>
      <div className='navbar' >
        <MyNavbar/>
      </div>
      <div className='category-tab'>
        <button className='btn-catgry'>Rent A Car</button>
        <button className=''>Airport Transfer</button>
        <button>Wedding Rentals</button>
      </div>
      <div className='footer' >
        <Footer/>
      </div>
      
    </div>
  )
}

export default RentCar
