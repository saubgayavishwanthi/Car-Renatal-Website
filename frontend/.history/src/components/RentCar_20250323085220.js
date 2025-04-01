import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageVehicles = () => {
  const [vehicle, setVehicle] = useState({
    vehicleID: "",
    vehiclecategory: "",
    model: "",
    year: "",
    status: "",
    brand: "",
    fuelType: "",
    pricePerDay: "",
    description: "",
    imageURL: "",
  });

  const [vehicles, setVehicles] = useState([]); // To store filtered vehicles

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  // Filter vehicles by category
  const filterVehicles = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/vehicle/filter?vehiclecategory=${vehicle.vehiclecategory}`
      );
      setVehicles(response.data); // Set filtered vehicles to state
    } catch (error) {
      console.error("Error filtering vehicles:", error);
      alert("Error filtering vehicles!");
    }
  };

  return (
    <div
      className="container mt-5 text-white"
      style={{
        maxWidth: "800px",
        backgroundColor: "#111",
        padding: "30px",
        borderRadius: "10px",
        fontSize: "18px",
      }}
    >
      <h2 className="text-center mb-4">Manage Vehicles</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="VehicleID"
            name="vehicleID"
            value={vehicle.vehicleID}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Model"
            name="model"
            value={vehicle.model}
            onChange={handleChange}
          />
          {/* Dropdown for Vehicle Type */}
          <select
            className="form-control mb-3"
            name="vehiclecategory"
            value={vehicle.vehiclecategory}
            onChange={handleChange}
          >
            <option value="">Select Vehicle Category</option>
            <option value="rentcar">Rent A car</option>
            <option value="airport">Airport Transport</option>
            <option value="wedding">Wedding Rent</option>
          </select>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Brand"
            name="brand"
            value={vehicle.brand}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Fuel Type"
            name="fuelType"
            value={vehicle.fuelType}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Price per day"
            name="pricePerDay"
            value={vehicle.pricePerDay}
            onChange={handleChange}
          />
          <textarea
            className="form-control mb-3"
            placeholder="Description"
            name="description"
            value={vehicle.description}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-info btn-lg" onClick={filterVehicles}>
          Filter
        </button>
      </div>
      {/* Display filtered vehicles */}
      <div className="mt-4">
        <h3>Filtered Vehicles</h3>
        <ul>
          {vehicles.map((vehicle) => (
            <li key={vehicle.vehicleID}>
              {vehicle.model} - {vehicle.vehiclecategory}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageVehicles;
