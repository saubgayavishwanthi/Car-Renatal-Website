import React, { useState } from "react";
import "../"

const carData = [
  {
    id: 1,
    name: "Perodua Axia",
    type: "Mini Cars",
    category: "Rent A Car",
    image: "https://example.com/car1.jpg", // Replace with actual image URL
    features: ["Front AC", "04 Max", "Full to Full", "150 KM per Day"],
  },
  {
    id: 2,
    name: "Toyota Camry",
    type: "Luxury Cars",
    category: "Airport Transfer",
    image: "https://example.com/car2.jpg",
    features: ["Luxury AC", "04 Max", "Full to Full", "200 KM per Day"],
  },
  {
    id: 3,
    name: "Mercedes Benz",
    type: "Premium Cars",
    category: "Wedding Rentals",
    image: "https://example.com/car3.jpg",
    features: ["Luxury AC", "04 Max", "Full to Full", "Unlimited KM"],
  },
];

function RentCar() {
  const [selectedCategory, setSelectedCategory] = useState("Rent A Car");

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
            <button className="select-btn">Select</button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default RentCar;
