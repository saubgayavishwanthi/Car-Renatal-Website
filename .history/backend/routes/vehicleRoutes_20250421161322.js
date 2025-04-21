const express =require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");
const { getVehiclesByCategory } = require("../controllers/vehicleController");


router.get("/filter", vehicleController.getVehiclesByCategory)
router.post("/add",vehicleController.addVehicle);
router.put("/update-vehicle/:vehicleID",vehicleController.updateVehicle);
router.get("/search-by-id/:vehicleID",vehicleController.getVehicleById);
router.delete("/delete/:vehicleID",vehicleController.deleteVehicle)


module.exports = router;