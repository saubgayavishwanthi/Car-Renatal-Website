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
        <button>Re</button>
        <button></button>
        <button></button>
      </div>
      <div className='footer' >
        <Footer/>
      </div>
      
    </div>
  )
}

export default RentCar
