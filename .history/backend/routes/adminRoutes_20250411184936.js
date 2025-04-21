const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/add", adminController.addAdmin);
router.get("/search-by-id/:id", adminController.getAdminById);
router.put("/update-admin/:id", adminController.updateAdminById);
router.delete("/delete/:id", adminController.deleteAdminById);

module.exports = router;