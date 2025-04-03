const express =require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.post("/add",vehicleController.addVehicle);
router.put("/update-vehicle/:")


module.exports = router;