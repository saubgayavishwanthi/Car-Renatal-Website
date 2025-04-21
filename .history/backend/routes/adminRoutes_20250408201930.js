const express = require("express");
const router = express.Router();
const adminConroller = require("../controllers/adminContoller");

router.post("/add",adminConroller.addAdmin);
router.put("update-admin/,")