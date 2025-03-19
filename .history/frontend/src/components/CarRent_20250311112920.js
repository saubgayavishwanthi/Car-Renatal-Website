import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Navbar from "./MyNavbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CarRent.css";
import Perodua- Axia

const carData = [
  {
    id: 1,
    name: "Perodua Axia",
    type: "Mini Cars",
    category: "Rent A Car",
    image: "https://example.com/car1.jpg",
    features: ["Front AC", "04 Max", "Full to Full", "150 KM per Day"],
    basicInfo: {
      drivingLicense: "Required",
      securityDeposit: "$200",
      damageExcess: "$500",
      mileage: "150 KM/day",
      fuelPolicy: "Full to Full",
    },
    rates: {
      perDay: "$30",
      perWeek: "$200",
      perMonth: "$700",
    },
  },
  {
    id: 2,
    name: "Toyota Camry",
    type: "Luxury Cars",
    category: "Airport Transfer",
    image: "https://example.com/car2.jpg",
    features: ["Luxury AC", "04 Max", "Full to Full", "200 KM per Day"],
    basicInfo: {
      drivingLicense: "Required",
      securityDeposit: "$500",
      damageExcess: "$1000",
      mileage: "200 KM/day",
      fuelPolicy: "Full to Full",
    },
    rates: {
      perDay: "$50",
      perWeek: "$300",
      perMonth: "$1000",
    },
  },
];

function RentCar() {
  const [selectedCategory, setSelectedCategory] = useState("Rent A Car");
  const filteredCars = carData.filter((car) => car.category === selectedCategory);

  return (
    <div>
      <Navbar />
      <div className="category-tab">
        <button className="btn-category" onClick={() => setSelectedCategory("Rent A Car")}>
          Rent A Car
        </button>
        <button className="btn-category" onClick={() => setSelectedCategory("Airport Transfer")}>
          Airport Transfer
        </button>
        <button className="btn-category" onClick={() => setSelectedCategory("Wedding Rentals")}>
          Wedding Rentals
        </button>
      </div>
      <div className="car-list">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h3 className="car-name">{car.name}</h3>
            <p className="car-type">({car.type})</p>
            <ul className="car-features">
              {car.features.map((feature, index) => (
                <li key={index}>⭐ {feature}</li>
              ))}
            </ul>
            <Tabs defaultActiveKey="basicInfo" className="car-tabs">
              <Tab eventKey="basicInfo" title="Basic Info">
                <p><strong>Driving License:</strong> {car.basicInfo.drivingLicense}</p>
                <p><strong>Security Deposit:</strong> {car.basicInfo.securityDeposit}</p>
                <p><strong>Damage Excess:</strong> {car.basicInfo.damageExcess}</p>
                <p><strong>Mileage:</strong> {car.basicInfo.mileage}</p>
                <p><strong>Fuel Policy:</strong> {car.basicInfo.fuelPolicy}</p>
              </Tab>
              <Tab eventKey="rates" title="Rates">
                <p><strong>Per Day:</strong> {car.rates.perDay}</p>
                <p><strong>Per Week:</strong> {car.rates.perWeek}</p>
                <p><strong>Per Month:</strong> {car.rates.perMonth}</p>
              </Tab>
              <Tab eventKey="terms" title="Terms & Conditions">
                <p>Flexible cancellation with every booking.</p>
              </Tab>
            </Tabs>
            <button className="select-btn">Select</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default RentCar;
