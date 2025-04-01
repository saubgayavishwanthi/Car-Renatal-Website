const db = require("../config/db"); // Import MySQL database connection

// Add a new vehicle
exports.addVehicle = (req, res) => {
    const { vehicleID, vehiclecategory, model, year, status, brand, fuelType, pricePerDay, description, imageURL } = req.body;

    if (!vehicleID) {
        return res.status(400).json({ error: "Vehicle ID is required" });
    }

    const query = `INSERT INTO vehicles (vehicleID, vehiclecategory, model, year, status, brand, fuelType, pricePerDay, description, imageURL) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [vehicleID, vehiclecategory, model, year, status, brand, fuelType, pricePerDay, description, imageURL], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Error inserting vehicle" });
        }
        res.status(201).json({ message: "Vehicle added successfully" });
    });
};
