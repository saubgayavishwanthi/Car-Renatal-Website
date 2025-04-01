const vehicle = require ("../models/vehicleModel");

//add vehicle
exports.addVehicle =async (req,res) => {
    try{
        await vehicle.addVehicle(req.body);
        req.status(201).json({message :"vehicle added sucessfully"});
    } catch(error){
        console.error(error);
        res.status(500).json({error:"Error adding vehicle"});
    }
};