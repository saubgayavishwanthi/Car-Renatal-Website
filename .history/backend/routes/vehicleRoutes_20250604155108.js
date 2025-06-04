const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");
const multer = require("multer");
const path = require("path");

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/add", upload.single("image"), vehicleController.addVehicle);

router.put("/update-vehicle/:vehicleID", upload.single("image"), vehicleController.updateVehicle);

router.get("/search-by-id/:vehicleID", vehicleController.searchVehicle);

router.delete("/delete/:vehicleID", vehicleController.deleteVehicle);

module.exports = router;
