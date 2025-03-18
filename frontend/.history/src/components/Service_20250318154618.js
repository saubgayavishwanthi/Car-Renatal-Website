import React from 'react';
import Whychooseus from './WhyChooseUs';
import Carlanding from './CarRentalLanding';
import Transferservices from './ServiceCards';
import ServiceCards from './ServiceCards';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";


function Service() {
  return (
    <div className='service-container m-'>
        <Whychooseus/>
        <Carlanding/>
        <Transferservices/>
        <ServiceCards/>
        <Footer/>

      
    </div>
  )
}

export default Service
