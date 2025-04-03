const express =require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.post("/add",vehicleController.addVehicle);
router.put("/update-vehicle/:vehicleID",vehicleController.updateVehicle);
router.get("/serach-by-id/:vehicleID",)


module.exports = router;