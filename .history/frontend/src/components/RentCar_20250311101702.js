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
        <button>Rent A Car</button>
        <button>Airport</button>
        <button></button>
      </div>
      <div className='footer' >
        <Footer/>
      </div>
      
    </div>
  )
}

export default RentCar
