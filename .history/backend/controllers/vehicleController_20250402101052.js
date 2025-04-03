const vehicle = require("../models/vehicleModel");

// Add a new vehicle
exports.addVehicle = async (req, res) => {
    try {
        await vehicle.addVehicle(req.body);
        res.status(201).json({ message: "Vehicle added successfully" }); // Fixed: Changed `req.status()` to `res.status()`
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error adding vehicle" });
    }
};

//update vehicle 
e