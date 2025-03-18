import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyChooseUs = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "blue", fontWeight: "bold" }}>
        Why Choose <span className="text-danger">SL Quick Ride?</span>
      </h2>
      <p className="text-center">
        SL Quick Ride offers reliable, flexible, and cheap car rental services in Sri Lanka. As a rent-a-car company, we take pride in our trustworthy services to all our esteemed clients. Our wide range of rental cars is available all year round, from short-term rentals to long-term rentals at very affordable prices. Whether you are looking for a saloon car, station wagon, minivans, coaster bus, or SUVs, we have you covered with low prices and ultimate customer care service. Below are some of the reasons why you should choose us.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="p-5 border border-dark rounded">
            <h5 className="fw-bold">Professional Services</h5>
            <p>
              The happiness & satisfaction of our customers is the most valued component of our business. You will be provided with a vehicle that ensures relaxation, safety, and extreme comfort. We guarantee you exceptional, first-class services that give 100% customer satisfaction.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-5 border border-dark rounded">
            <h5 className="fw-bold">Knowledgeable Staff</h5>
            <p>
              Because our staff are local residents and have years of experience offering vehicle rentals in Sri Lanka, you can be confident that you’ll get answers to all your questions. You’ll also receive satisfactory solutions to any problems along the way.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="p-5 border border-dark rounded">
            <h5 className="fw-bold">Flexible Pick Up and Drop Off Service</h5>
            <p>
              Our friendly staff pick you up from the terminal of your choice. From there you can enjoy your trip with the seamless comforts of your own transportation. Once you are ready to hand back the keys, simply meet our team at a prearranged time and we’ll happily drop you off at the airport with plenty of time to spare.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-5 border border-dark rounded">
            <h5 className="fw-bold">Diverse Fleet</h5>
            <p>
            We can provide you with a wide range of different vehicles. Our diverse fleet includes Economy, Family Sedan, Pickup 2x4 Seven-Seaters, Luxury Sedans Hybrids, Executive Cars, and many more. Whether you need a fuel-efficient ride for city travel, a spacious vehicle for family trips, or a rugged 4x4 for off-road adventures, we have the perfect option for you
            </p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default WhyChooseUs;
