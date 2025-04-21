const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminContoller");

router.post("/add", adminController.addAdmin);
router.put("/update-admin/:id", adminConroller.updateAdmin);
router.get("/search-by-id/:id", adminConroller.getAdminById);
router.delete("/delete/:id", adminConroller.deleteAdmin);


module.exports = router;