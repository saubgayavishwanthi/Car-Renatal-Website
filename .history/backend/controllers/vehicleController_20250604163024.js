const Vehicle = require("../models/vehicleModel");
const path = require("path");
const fs = require("fs");

const addVehicle = async (req, res) => {
  try {
    const vehicle = req.body;
    let imageName = null;

    if (req.file) {
      imageName = req.file.filename;
    }

    // Check if vehicle with same vehicleID exists
    const existing = await Vehicle.findById(vehicle.vehicleID);
    if (existing) {
      return res.status(400).json({ message: "Vehicle ID already exists." });
    }

    await Vehicle.create(vehicle, imageName);

    res.status(201).json({ message: "Vehicle added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const vehicleID = req.params.vehicleID;
    const vehicle = req.body;
    let imageName = null;

    if (req.file) {
      imageName = req.file.filename;

      // Optional: delete old image from uploads folder
      const existing = await Vehicle.findById(vehicleID);
      if (existing && existing.image) {
        const oldImagePath = path.join(__dirname, "..", "uploads", existing.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
    }

    const existingVehicle = await Vehicle.findById(vehicleID);
    if (!existingVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    await Vehicle.update(vehicleID, vehicle, imageName);

    res.json({ message: "Vehicle updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const searchVehicle = async (req, res) => {
  try {
    const vehicleID = req.params.vehicleID;
    const vehicle = await Vehicle.findById(vehicleID);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    res.json(vehicle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Filter vehicles by category (for your React frontend)
const filterVehicles = async (req, res) => {
    try {
      const vehiclecategory = req.query.vehiclecategory;
      if (!vehiclecategory) {
        return res.status(400).json({ message: "vehiclecategory query parameter is required" });
      }
      const vehicles = await Vehicle.filterByCategory(vehiclecategory);
      res.json(vehicles);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };

const deleteVehicle = async (req, res) => {
  try {
    const vehicleID = req.params.vehicleID;

    const vehicle = await Vehicle.findById(vehicleID);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    // Delete image from uploads folder if exists
    if (vehicle.image) {
      const imagePath = path.join(__dirname, "..", "uploads", vehicle.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Vehicle.delete(vehicleID);

    res.json({ message: "Vehicle deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addVehicle,
  updateVehicle,
  searchVehicle,
  
  deleteVehicle,
};
