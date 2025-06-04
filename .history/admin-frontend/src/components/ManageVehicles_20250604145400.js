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
  });

  const [imageFile, setImageFile] = useState(null);

  // Handle text field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Add vehicle
  const addVehicle = async () => {
    try {
      const formData = new FormData();

      // Append vehicle data
      for (let key in vehicle) {
        formData.append(key, vehicle[key]);
      }

      // Append image file
      if (imageFile) {
        formData.append("image", imageFile);
      }

      await axios.post("http://localhost:8081/vehicle/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
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
      const formData = new FormData();

      for (let key in vehicle) {
        formData.append(key, vehicle[key]);
      }

      if (imageFile) {
        formData.append("image", imageFile);
      }

      await axios.put(`http://localhost:8081/vehicle/update-vehicle/${vehicle.vehicleID}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

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

  // Delete vehicle
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
          <input type="text" className="form-control mb-3" placeholder="VehicleID" name="vehicleID" value={vehicle.vehicleID} onChange={handleChange} />
          <input type="text" className="form-control mb-3" placeholder="Model" name="model" value={vehicle.model} onChange={handleChange} />

          <select className="form-control mb-3" name="vehiclecategory" value={vehicle.vehiclecategory} onChange={handleChange}>
            <option value="">Select Vehicle Category</option>
            <option value="rentcar">Rent A Car</option>
            <option value="airport">Airport Transport</option>
            <option value="wedding">Wedding Rent</option>
          </select>

          <input type="text" className="form-control mb-3" placeholder="Year" name="year" value={vehicle.year} onChange={handleChange} />
          <input type="text" className="form-control mb-3" placeholder="Status" name="status" value={vehicle.status} onChange={handleChange} />

          {/* Image Upload Input */}
          <input type="file" className="form-control mb-3" onChange={handleImageChange} />
        </div>

        <div className="col-md-6">
          <input type="text" className="form-control mb-3" placeholder="Brand" name="brand" value={vehicle.brand} onChange={handleChange} />
          <input type="text" className="form-control mb-3" placeholder="Fuel Type" name="fuelType" value={vehicle.fuelType} onChange={handleChange} />
          <input type="text" className="form-control mb-3" placeholder="Price per day" name="pricePerDay" value={vehicle.pricePerDay} onChange={handleChange} />
          <textarea className="form-control mb-3" placeholder="Description" name="description" value={vehicle.description} onChange={handleChange} rows="4"></textarea>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-primary btn-lg" onClick={addVehicle}>Add</button>
        <button className="btn btn-warning btn-lg" onClick={updateVehicle}>Update</button>
        <button className="btn btn-info btn-lg" onClick={searchVehicle}>Search</button>
        <button className="btn btn-danger btn-lg" onClick={deleteVehicle}>Delete</button>
      </div>
    </div>
  );
};

export default ManageVehicles;
