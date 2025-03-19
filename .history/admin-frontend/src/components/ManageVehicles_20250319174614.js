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
    imageURL: "",  // Change from null to an empty string for URL input
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  // Add vehicle
const addVehicle = async () => {
  try {
    // Send vehicle data as a JSON object
    await axios.post("http://localhost:8081/vehicle/add", vehicle, {
      headers: { "Content-Type": "application/json" },  // Ensure content type is JSON
    });
    alert("Vehicle added successfully!");
  } catch (error) {
    console.error("Error adding vehicle:", error);
    alert("Error adding vehicle!");
  }
};


  // Update vehicle
  const updateVehicle = async () => {
    try {
      await axios.put(`http://localhost:8081/vehicle/update-vehicle/${vehicle.vehicleID}`, vehicle);
      alert("Vehicle updated successfully!");
    } catch (error) {
      console.error("Error updating vehicle:", error);
      alert("Error updating vehicle!");
    }
  };

  // Search vehicle by ID
  const searchVehicle = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/vehicle/search-by-id/${vehicle.vehicleID}`);
      setVehicle(response.data);
    } catch (error) {
      console.error("Error searching vehicle:", error);
      alert("Vehicle not found!");
    }
  };

  // Delete vehicle by ID
  const deleteVehicle = async () => {
    try {
      await axios.delete(`http://localhost:8081/vehicle/delete/${vehicle.vehicleID}`);
      alert("Vehicle deleted successfully!");
    } catch (error) {
      console.error("Error deleting vehicle:", error);
      alert("Error deleting vehicle!");
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
            <option value="Car">Rent A car</option>
            <option value="Bike">Air</option>
            
          </select>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Year"
            name="year"
            value={vehicle.year}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Status"
            name="status"
            value={vehicle.status}
            onChange={handleChange}
          />
          {/* Now it's a text input for the image URL */}
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Image URL"
            name="imageURL"
            value={vehicle.imageURL}
            onChange={handleChange}
          />
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
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Description"
            name="description"
            value={vehicle.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-primary btn-lg" onClick={addVehicle}>
          Add
        </button>
        <button className="btn btn-warning btn-lg" onClick={updateVehicle}>
          Update
        </button>
        <button className="btn btn-info btn-lg" onClick={searchVehicle}>
          Search
        </button>
        <button className="btn btn-danger btn-lg" onClick={deleteVehicle}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageVehicles;
