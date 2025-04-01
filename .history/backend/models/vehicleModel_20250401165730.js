const db = require("../config/db");

//add vehicle

const addVehicle = async (vehicle) =>{
    const sql ="INSERT INTO vehicles(vehicleID,vehiclecategory,model,year,satus,brand,fuelType, pricePerDay, description, imageURL) VALUES (?,?,?,?,?,?,?,?,?,?)";
    const values =[
        vehicle.vehicleID,
        vehicle.vehiclecategory,
        vehicle.model,
        vehicle.year,
        vehicle.status,
        vehicle.barnd,
        vehicle.fuelType,
        veh
    ]
}
