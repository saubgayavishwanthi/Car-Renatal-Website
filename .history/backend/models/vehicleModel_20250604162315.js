const db = require("../config/db");

const Vehicle = {
  create: async (vehicle, imageName) => {
    const sql = `INSERT INTO vehicles (vehicleID, vehiclecategory, model, year, status, brand, fuelType, pricePerDay, description, image) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [
      vehicle.vehicleID,
      vehicle.vehiclecategory,
      vehicle.model,
      vehicle.year,
      vehicle.status,
      vehicle.brand,
      vehicle.fuelType,
      vehicle.pricePerDay,
      vehicle.description,
      imageName,
    ];
    return db.execute(sql, params);
  },

  update: async (vehicleID, vehicle, imageName) => {
    // If imageName is provided, update image else skip image update
    let sql, params;
    if (imageName) {
      sql = `UPDATE vehicles SET vehiclecategory=?, model=?, year=?, status=?, brand=?, fuelType=?, pricePerDay=?, description=?, image=? WHERE vehicleID=?`;
      params = [
        vehicle.vehiclecategory,
        vehicle.model,
        vehicle.year,
        vehicle.status,
        vehicle.brand,
        vehicle.fuelType,
        vehicle.pricePerDay,
        vehicle.description,
        imageName,
        vehicleID,
      ];
    } else {
      sql = `UPDATE vehicles SET vehiclecategory=?, model=?, year=?, status=?, brand=?, fuelType=?, pricePerDay=?, description=? WHERE vehicleID=?`;
      params = [
        vehicle.vehiclecategory,
        vehicle.model,
        vehicle.year,
        vehicle.status,
        vehicle.brand,
        vehicle.fuelType,
        vehicle.pricePerDay,
        vehicle.description,
        vehicleID,
      ];
    }
    return db.execute(sql, params);
  },

  findById: async (vehicleID) => {
    const sql = `SELECT * FROM vehicles WHERE vehicleID = ?`;
    const [rows] = await db.execute(sql, [vehicleID]);
    return rows.length > 0 ? rows[0] : null;
  },

  filterByCategory: async (vehiclecategory) => {
    const sql = `SELECT * FROM vehicles WHERE vehiclecategory = ?`;
    const [rows] = await db.execute(sql, [vehiclecategory]);
    return rows;
  },

  delete: async (vehicleID) => {
    const sql = `DELETE FROM vehicles WHERE vehicleID = ?`;
    return db.execute(sql, [vehicleID]);
  },
};

module.exports = Vehicle;
