const vehicle = require("../models/vehicleModel");


exports.getVehiclesByCategory = async (req, res) => {
    try {
      const category = req.query.vehiclecategory;
  
      if (!category) {
        return res.status(400).json({ error: "Vehicle category is required" });
      }
  
      const vehicles = await vehicleModel.getVehiclesByCategory(category);
      res.status(200).json(vehicles);
    } catch (error) {
      console.error("Error fetching vehicles by category:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
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
exports.updateVehicle = async (req,res) =>{
    try{
        await vehicle.updateVehicle(req.body);
        res.status(200).json({message:"vehicle updated sucessfully"});
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Error  updating vehicle"});

    }
};

//get vehicle by ID
exports.getVehicleById = async (req,res) =>{
    try{
        const [rows] =await vehicle.getVehicleById(req.params.vehicleID);
        if(rows.length === 0) return res.status(404).json({error:"vehicle not found"});
        res.status(200).json(rows[0]);
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Error  fetching vehicle"});

    }
};



//delete  vehicle
exports.deleteVehicle = async (req, res) => {
    try {
        await vehicle.deleteVehicle(req.params.vehicleID); // Fixed model name
        res.status(200).json({ message: "Vehicle deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting vehicle" });
    }
};