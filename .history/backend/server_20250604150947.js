const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const vehicleRoutes = require ("./routes/vehicleRoutes");
const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());
app.use("/vehicle",vehicleRoutes);
app.use("/admins",adminRoutes);
app.use("/api", contactRoutes);
app.listen(PORT, () =>{
    console.log('server is running');
})