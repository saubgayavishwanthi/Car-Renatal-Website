const db = require("../config/db");

// Add vehicle
const addVehicle = async (vehicle) => {
  const sql = `INSERT INTO vehicles(vehicleID, vehiclecategory, model, year, status, brand, fuelType, pricePerDay, description, imageURL) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    vehicle.vehicleID,
    vehicle.vehiclecategory,
    vehicle.model,
    vehicle.year,
    vehicle.status,
    vehicle.brand,
    vehicle.fuelType,
    vehicle.pricePerDay,
    vehicle.description,
    vehicle.imageURL,
  ];
  return db.execute(sql, values);
};

// Update vehicle
const updateVehicle = async (vehicle) => {
  const sql = `UPDATE vehicles SET vehiclecategory=?, model=?, year=?, status=?, brand=?, fuelType=?, pricePerDay=?, description=?, imageURL=? WHERE vehicleID=?`;
  const values = [
    vehicle.vehiclecategory,
    vehicle.model,
    vehicle.year,
    vehicle.status,
    vehicle.brand,
    vehicle.fuelType,
    vehicle.pricePerDay,
    vehicle.description,
    vehicle.imageURL,
    vehicle.vehicleID,
  ];
  return db.execute(sql, values);
};

// Get vehicle by ID
const getVehicleById = async (id) => {
  const sql = "SELECT * FROM vehicles WHERE vehicleID = ?";
  return db.execute(sql, [id]);
};

// Delete vehicle
const deleteVehicle = async (id) => {
  const sql = "DELETE FROM vehicles WHERE vehicleID = ?";
  return db.execute(sql, [id]);
};

module.exports = {
  addVehicle,
  updateVehicle,
  getVehicleById,
  deleteVehicle,
};
