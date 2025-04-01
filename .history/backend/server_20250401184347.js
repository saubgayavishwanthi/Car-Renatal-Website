const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config();

const vehicleRoutes = require ("./routes/vehicleRoutes");

const app = express();
const PORT = process.