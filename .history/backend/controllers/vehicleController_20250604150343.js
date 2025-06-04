const db = require("../config/db");

// Add vehicle
const addVehicle = async (vehicle, imageName) => {
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
        imageName // store filename or relative path
    ];

    return db.execute(sql, values);
};

// Update vehicle
const updateVehicle = async (vehicle, imageName) => {
    const sql = `UPDATE vehicles 
                 SET vehiclecategory=?, model=?, year=?, status=?, brand=?, fuelType=?, pricePerDay=?, description=?, imageURL=? 
                 WHERE vehicleID=?`;

    const values = [
        vehicle.vehiclecategory,
        vehicle.model,
        vehicle.year,
        vehicle.status,
        vehicle.brand,
        vehicle.fuelType,
        vehicle.pricePerDay,
        vehicle.description,
        imageName,
        vehicle.vehicleID
    ];

    return db.execute(sql, values);
};

// Get vehicle by ID
const getVehicleById = async (vehicleID) => {
    const sql = "SELECT * FROM vehicles WHERE vehicleID= ?";
    return db.execute(sql, [vehicleID]);
};

// Get vehicles by category
const getVehiclesByCategory = async (category) => {
    const sql = "SELECT * FROM vehicles WHERE vehiclecategory = ?";
    return db.execute(sql, [category]);
};

// Delete vehicle
const deleteVehicle = async (vehicleID) => {
    const sql = "DELETE FROM vehicles WHERE vehicleID = ?";
    return db.execute(sql, [vehicleID]);
};

module.exports = {
    addVehicle,
    updateVehicle,
    getVehicleById,
    getVehiclesByCategory,
    deleteVehicle,
};
