const db = require("../config/db");

const addAdmin = async (admin) =>{
    const sql ="INSERT INTO admins (adminName,email,password,contactNumber) VALUES (?,?,?,?)";

    const values = [
        admin.adminName,
        admin.email,
        admin.password,
        admin
    ]
}