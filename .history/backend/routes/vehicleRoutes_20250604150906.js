const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");
const multer = require("multer");
const path = require("path");

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage });

// Routes
router.post("/add", upload.single("image"), vehicleController.createVehicle);
router.put("/update-vehicle/:id", upload.single("image"), vehicleController.updateVehicle);
router.get("/search-by-id/:id", vehicleController.getVehicle);
router.delete("/delete/:id", vehicleController.removeVehicle);

module.exports = router;
