import React from 'react';
import Whychooseus from './WhyChooseUs';
import Carlanding from './CarRentalLanding';
import Transferservices from './ServiceCards';
import ServiceCards from './ServiceCards';
import Footer from './Footer';
import MyNavbar from './MyNavbar';
import "bootstrap/dist/css/bootstrap.min.css";


function Service() {
  return (
    <div>
      <MyNavbar/>
<div className="container mt-3 mb-3 mx-auto d-flex flex-column align-items-center">
        <Whychooseus/>
        <Carlanding/>
        <Transferservices/>
        <ServiceCards/>
        </div>

      <div>
      <Footer/>
      </div>
    
    </div>
  )
}

export default Service
