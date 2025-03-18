import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Landing from "../assets/Landing.jpg";

const CarRentalLanding = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6">
          <h2 className="text-danger fw-bold">
            SL Quick Ride Has Never Been Easier
          </h2>
          <p>
            Want to explore the beautiful island of Sri Lanka freely? Our team is ready to help you find the perfect car rental solution.
          </p>
          <p>
            Based in Seeduwa (10 minutes away from Colombo International Airport), SR Rent A Car is an independent car rental company in Sri Lanka since 2004. We offer luxurious customer service and affordable rates.
          </p>
          <p>
            Our helpful staff is available 24/7 to assist you with any queries.
          </p>
          <button className="btn btn-primary">Rent a car</button>
        </div>
        
        {/* Right Section */}
        <div className="col-md-6 position-relative">
          <img
            src={Landing}
            className="img-fluid rounded"
            alt="Car Rental"
          />
          <div className="position-absolute bottom-0 start-0 bg-white p-3 shadow-lg width-60" style={{ margin: "9px" }}>
            <h3 className="text-danger fw-bold m-0">5</h3>
            <p className="m-0">Years industry Expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalLanding;
