import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel as BootstrapCarousel } from "react-bootstrap"; // Renaming Bootstrap Carousel
import CountUp from "react-countup";
import NavBar from './MyNavbar';
import Carousel from './Carousel';
import Footer from './Footer';
import Contact from ''
import "../css/Home.css";
import aboutcar from '../assets/bense.jpg';
import WeddingCar from "../assets/WeddingCar.jpg";
import RentACar from "../assets/RentACar.jpg";
import AirportCar from "../assets/AirportCar.jpg";
import hoursacess from "../assets/24.7 access.jpg";
import rates from "../assets/afforable rates.jpg";
import multipledrop from "../assets/multiple drop off.jpg";
import experience from "../assets/5  years exprience.jpg";
import insuarance from "../assets/insuarance coveage.jpg";
import roadassisrance from "../assets/roadside assistance.jpg";
import sara from "../assets/sara.jpeg";
import john from "../assets/john.jpeg";
import michel from "../assets/michel.jpeg";


function Home() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setStartCount(true); // Start the count animation when the component mounts
  }, []);

  const offers = [
    {
      title: "Rent A Car",
      description:
        "SL Quick Ride is an independent car rental company in Sri Lanka since 2004. We offer luxurious customer service for you at the most affordable rental car rates.",
      image: RentACar,
    },
    {
      title: "Airport Transfer",
      description:
        "SL Quick Ride offers chauffeur-driven Airport Transfer and Hotel Transfer in Sri Lanka. We offer our service for Colombo International Airport & all hotels in Sri Lanka.",
      image: AirportCar,
    },
    {
      title: "Wedding Rentals",
      description:
        "Your wedding day is the most memorable day which you'll remember for the rest of your life. You try your very best to make it perfect with many items.",
      image: WeddingCar,
    },
  ];

  const statsData = [
    { value: 5, label: "AWARDS" },
    { value: 5, label: "YEARS OF EXPERIENCE" },
    { value: 20, label: "VEHICLES" },
    { value: 100, label: "CHAUFFEURS" },
    { value: 500, label: "HAPPY CUSTOMERS ANNUALLY" },
  ];

  const images = [
    {  src: hoursacess, title: "24/7 service", bgColor: "#FF5733",height:"100px" },
    {  src: multipledrop, title: "Multiple drop offs", bgColor: "#33A1FF",height:"100px" },
    {  src: experience, title: "5 years experience", bgColor: "#28A745",height:"100px" },
    {  src: rates, title: "Affordable rates", bgColor: "#FFC107",height:"100px" },
    {  src: insuarance, title: "Insuarance Coverage", bgColor: "#6F42C1",height:"100px" },
    {  src: roadassisrance, title: "Roadside Assistance", bgColor: "#E83E8C",height:"100px" },
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback: "Amazing service! The cars are well-maintained and the staff is super friendly.",
      image: john,
    },
    {
      name: "Sarah Smith",
      feedback: "Highly recommended! The rental process was smooth and hassle-free.",
      image: sara,
    },
    {
      name: "Michael Lee",
      feedback: "Great experience! The roadside assistance was prompt and professional.",
      image: michel,
    },
  ];

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='carousel'>
        <Carousel />
      </div>
      <div className="who-we-are-container">
        <div className="image-section">
          <img src={aboutcar} alt="Red Car" className="car-image" />
        </div>
        <div className="text-section">
          <h2>
            <span className="highlight">Who</span> We Are
          </h2>
          <p>
          <strong className="brand-name">SR Rent A Car</strong> is a locally owned and operated
          car rental company in Sri Lanka that provides affordable options for all travelers.
          The SR Team has been welcoming visitors from all over the world since 2004. We
          understand what our clients expect and deliver because we know what it’s like to be
          a consumer.
        </p>
        <p>
          We offer a fleet of clean, reliable, and safe new and pre-owned vehicles that have
          been meticulously maintained and are suitable for all Sri Lankan roads. We take
          safety very seriously, making it easier for you to relax and enjoy a family
          vacation. From a fleet of more than 100 vehicles, you can find the perfect match
          between budget and space from well-known brands such as Toyota.
        </p>
        <p>
          With offices conveniently located near Bandaranaike International Airport, we're able
          to meet and greet you with a smile and provide a two-way airport shuttle. You can
          also try our doorstep delivery service anywhere in the country for a nominal fee.
        </p>
        </div>
      </div>

      <div className="offer-container">
        <h2>
          <span className="red-text">What</span> <strong>We Offer</strong>
        </h2>
        <div className="offer-grid">
          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>
              <img src={offer.image} alt={offer.title} />
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <button className="explore-btn">Explore More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-box">
            <h2 className="stat-value">
              {startCount && (
                <CountUp start={0} end={stat.value} duration={3} separator="," redraw={true} />
              )}
            </h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
        
      <div className="container" style={{backgroundColor:"#f5f5f5"}}>
        <h1 style={{textAlign:"center",marginTop:"30px",marginBottom:"30px",fontFamily:"cursive",color:"#a24747"}}>Why We Special</h1>
  <div className="row">
    {images.map((image, index) => (
      <div key={index} className="col-md-4 mb-4"style={{backgroundColor:"#f5f5f5"}}>
        <div className="position-relative text-center">
          <img
            src={image.src}
            alt={image.title}
            className="img-fluid w-100"
            style={{ maxHeight: "250px", objectFit: "cover", backgroundColor: image.bgColor,borderRadius:"5px" }}
          />
          <div
            className="position-absolute top-50 start-50 translate-middle text-white p-3"
            style={{
              
              backgroundColor: "rgba( 65, 58, 58, 0.4)",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h5 className="fw-bold">{image.title}</h5>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<div className="container my-5">
      <h2 className="text-center mb-4">
        <span className="text-danger">Customer</span> Feedback
      </h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card p-3 shadow border-0 text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "80px", height: "80px" }}
              />
              <p className="fst-italic">"{testimonial.feedback}"</p>
              <h5 className="fw-bold">{testimonial.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
