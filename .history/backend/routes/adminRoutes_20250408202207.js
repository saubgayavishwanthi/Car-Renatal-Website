const express = require("express");
const router = express.Router();
const adminConroller = require("../controllers/adminContoller");

router.post("/add",adminConroller.addAdmin);
router.put("/update-admin/:id",adminConroller.updateAdmin);
router.get("/search-by-id/:id",adminConroller.getAdminById);
router.delete("/delete/:id",adminConroller.deleteAdmin);

module.exports