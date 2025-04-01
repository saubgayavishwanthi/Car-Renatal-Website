const mysql = reuire("mysql2");
require("dotenv").config();

const pool = mysql.createpool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER
})