const Vehicle = require("../models/vehicleModel");

// Add a new vehicle
exports.addVehicle = async (req, res) => {
    try {
        await Vehicle.addVehicle(req.body);
        res.status(201).json({ message: "Vehicle added successfully" }); // Fixed: Changed `req.status()` to `res.status()`
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error adding vehicle" });
    }
};

//update vehicle 
exports.updateVehicle = async (req,res) =>{
    try{
        await Vehicle.updateVehicle(req.body);
        res.status(200).json({message:"vehicle updated sucessfully"});
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Error  updating vehicle"});

    }
};

//get vehicle by ID
exports.getVehicleById = async (req,res) =>{
    try{
        const [rows] =await Vehicle.getVehicleById(req.params.vehicleID);
        if(rows.length === 0) return res.status(404).json({error:"vehicle not found"});
        res.status(200).json(rows[0]);
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Error  fetching vehicle"});

    }
};

//delete  vehicle
exports.deleteVehicle = async (req,res) =>{
    try{
        await Vehicle.deleteVehicle(req.params.vehicleID);
        res.status.(200).json({message})
    }
}