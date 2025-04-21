const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/add", adminController.addAdmin);
router.get("/search-by-id/:id", adminController.getAdminById);
router.put("/update-admin/:id", adminController.updateAdmin);
router.delete("/delete/:id", adminController.deleteAdmin);

module.exports = router;
