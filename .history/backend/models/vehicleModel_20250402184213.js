const db = require("../config/db");

// Add vehicle function
const addVehicle = async (vehicle) => {
    const sql = `INSERT INTO vehicles(vehicleID, vehiclecategory, model, year, status, brand, fuelType, pricePerDay, description, imageURL) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
        vehicle.vehicleID,
        vehicle.vehiclecategory,
        vehicle.model,
        vehicle.year,
        vehicle.status,  // Fixed: `status` was misspelled as `satus`
        vehicle.brand,   // Fixed: `brand` was misspelled as `barnd`
        vehicle.fuelType,
        vehicle.pricePerDay,
        vehicle.description,
        vehicle.imageURL,
    ];

    return db.execute(sql, values); // Fixed: Changed `db.exrcute()` to `db.execute()`
};

//update vehicle



//get vehicle by id

const getVehicleById = async (vehicleID) =>{
    const sql ="SELECT * FROM vehicles WHERE vehicleID= ?";
    return db.execute(sql,[vehicleID]);
};

// delete vehicle
const deleteVehicle = async (vehicleID) => {
    const sql = "DELETE FROM vehicles WHERE vehicleID = ?"; // Fixed SQL query
    return db.execute(sql, [vehicleID]); // Pass vehicleID inside an array
};



// Export function correctly
module.exports = { addVehicle,updateVehicle,getVehicleById,deleteVehicle};
