const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminContoller");

router.post("/add", adminController.addAdmin);
router.put("/update-admin/:id", adminController.updateAdmin);
router.get("/search-by-id/:id", adminController.getAdminById);
router.delete("/delete/:id", adminController.deleteAdmin);


module.exports = router;