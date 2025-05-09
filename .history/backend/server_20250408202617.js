const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const vehicleRoutes = require ("./routes/vehicleRoutes");
const adminRoutes = require(".ro")

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());
app.use("/vehicle",vehicleRoutes);

app.listen(PORT, () =>{
    console.log('server is running');
})