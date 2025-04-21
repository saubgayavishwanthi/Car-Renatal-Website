const express = require("express");
const router = express.Router();
const adminConroller = require("../controllers/adminContoller");

router.post("/admins/add",adminConroller.addAdmin);
router.put("/admins/update-admin/:id",adminConroller.updateAdmin);
router.get("/admins//search-by-id/:id",adminConroller.getAdminById);
router.delete("/delete/:id",adminConroller.deleteAdmin);

module.exports = router;