import React, { useState, useEffect } from "react";
import Navbar from "./MyNavbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/RentCar.css";
import axios from "axios";

function RentCar() {
  const [selectedCategory, setSelectedCategory] = useState("Rent A Car");
  const [vehicles, setVehicles] = useState([]);

  // Fetch vehicles from database when component loads or category changes
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/vehicles?vehiclecategory=${selectedCategory}`)
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vehicle data:", error);
      });
  }, [selectedCategory]); // Runs every time category changes

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>

      {/* Category Buttons */}
      <div className="button-grid d-grid d-md-flex gap-2 justify-content-md-center my-3">
        <button
          className="btn btn-outline-success btn-lg"
          onClick={() => setSelectedCategory("Rent A Car")}
        >
          Rent A Car
        </button>
        <button
          className="btn btn-outline-success btn-lg"
          onClick={() => setSelectedCategory("Airport Transport")}
        >
          Airport Transport
        </button>
        <button
          className="btn btn-outline-success btn-lg"
          onClick={() => setSelectedCategory("Wedding Rent")}
        >
          Wedding Rent
        </button>
      </div>

      {/* Vehicle Cards */}
      <div className="container mt-4">
        <div className="row">
          {vehicles.length > 0 ? (
            vehicles.map((vehicle, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img
                    src={vehicle.imageURL}
                    className="card-img-top"
                    alt={vehicle.model}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.model}</h5>
                    <p className="card-text">
                      <strong>Brand:</strong> {vehicle.brand} <br />
                      <strong>Year:</strong> {vehicle.year} <br />
                      <strong>Fuel Type:</strong> {vehicle.fuelType} <br />
                      <strong>Status:</strong> {vehicle.status} <br />
                      <strong>Price Per Day:</strong> {vehicle.pricePerDay} <br />
                      {vehicle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No vehicles found in this category.</p>
          )}
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default RentCar;
