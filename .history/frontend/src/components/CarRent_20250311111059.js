import React, { useState } from "react";
import Navbar from "./MyNavbar";
import Footer from "./Footer";

const carData = [
  {
    id: 1,
    name: "Perodua Axia",
    type: "Mini Cars",
    category: "Rent A Car",
    image: "https://example.com/car1.jpg", // Replace with actual image URL
    features: ["Front AC", "04 Max", "Full to Full", "150 KM per Day"],
    basicInfo: {
      licenseRequirement: "Valid Local/International Driving License",
      securityDeposit: "$200",
      damageExcess: "$500",
      mileage: "150 KM per Day",
      fuelPolicy: "Full to Full",
    },
    rates: {
      daily: "$40",
      weekly: "$250",
      monthly: "$900",
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
      licenseRequirement: "Valid Local/International Driving License",
      securityDeposit: "$300",
      damageExcess: "$700",
      mileage: "200 KM per Day",
      fuelPolicy: "Full to Full",
    },
    rates: {
      daily: "$70",
      weekly: "$450",
      monthly: "$1500",
    },
  },
  {
    id: 3,
    name: "Mercedes Benz",
    type: "Premium Cars",
    category: "Wedding Rentals",
    image: "https://example.com/car3.jpg",
    features: ["Luxury AC", "04 Max", "Full to Full", "Unlimited KM"],
    basicInfo: {
      licenseRequirement: "Valid Local/International Driving License",
      securityDeposit: "$500",
      damageExcess: "$1000",
      mileage: "Unlimited",
      fuelPolicy: "Full to Full",
    },
    rates: {
      daily: "$150",
      weekly: "$900",
      monthly: "$3000",
    },
  },
];

function RentCar() {
  const [selectedCategory, setSelectedCategory] = useState("Rent A Car");
  const [activeTab, setActiveTab] = useState({});

  const handleTabClick = (carId, tab) => {
    setActiveTab((prev) => ({ ...prev, [carId]: tab }));
  };

  const filteredCars = carData.filter((car) => car.category === selectedCategory);

  return (
    <div>
      <Navbar />

      {/* Category Buttons */}
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

      {/* Car Cards */}
      <div className="car-list">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h3>{car.name}</h3>
            <p className="car-type">({car.type})</p>
            <ul>
              {car.features.map((feature, index) => (
                <li key={index}>⭐ {feature}</li>
              ))}
            </ul>

            {/* Tabs for Basic Info & Rates */}
            <div className="tab-buttons">
              <button
                className={activeTab[car.id] === "basic" ? "tab-active" : ""}
                onClick={() => handleTabClick(car.id, "basic")}
              >
                Basic Info
              </button>
              <button
                className={activeTab[car.id] === "rates" ? "tab-active" : ""}
                onClick={() => handleTabClick(car.id, "rates")}
              >
                Rates
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab[car.id] === "basic" && (
                <div className="basic-info">
                  <p><strong>License:</strong> {car.basicInfo.licenseRequirement}</p>
                  <p><strong>Security Deposit:</strong> {car.basicInfo.securityDeposit}</p>
                  <p><strong>Damage Excess:</strong> {car.basicInfo.damageExcess}</p>
                  <p><strong>Mileage:</strong> {car.basicInfo.mileage}</p>
                  <p><strong>Fuel Policy:</strong> {car.basicInfo.fuelPolicy}</p>
                </div>
              )}
              {activeTab[car.id] === "rates" && (
                <div className="rates-info">
                  <p><strong>Daily:</strong> {car.rates.daily}</p>
                  <p><strong>Weekly:</strong> {car.rates.weekly}</p>
                  <p><strong>Monthly:</strong> {car.rates.monthly}</p>
                </div>
              )}
            </div>

            <button className="select-btn">Select</button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default RentCar;
