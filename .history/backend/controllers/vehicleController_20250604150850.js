const {
    addVehicle,
    updateVehicle,
    getVehicleById,
    deleteVehicle,
  } = require("../models/vehicleModel");
  const path = require("path");
  
  exports.createVehicle = async (req, res) => {
    try {
      const data = req.body;
      if (req.file) {
        data.imageURL = `/uploads/${req.file.filename}`;
      }
      await addVehicle(data);
      res.status(200).json("Vehicle added successfully");
    } catch (error) {
      console.error(error);
      res.status(500).json("Failed to add vehicle");
    }
  };
  
  exports.updateVehicle = async (req, res) => {
    try {
      const data = req.body;
      if (req.file) {
        data.imageURL = `/uploads/${req.file.filename}`;
      }
      await updateVehicle(data);
      res.status(200).json("Vehicle updated successfully");
    } catch (error) {
      console.error(error);
      res.status(500).json("Failed to update vehicle");
    }
  };
  
  exports.getVehicle = async (req, res) => {
    try {
      const [rows] = await getVehicleById(req.params.id);
      res.status(200).json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json("Failed to get vehicle");
    }
  };
  
  exports.removeVehicle = async (req, res) => {
    try {
      await deleteVehicle(req.params.id);
      res.status(200).json("Vehicle deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).json("Failed to delete vehicle");
    }
  };
  