const db = require("../config/db");

const addAdmin = async (admin) =>{
    const sql = `INSERT INTO admins (adminName,email,password,contactNumber) VALUES (?,?,?,?)`;

    const values = [
        admin.adminName,
        admin.email,
        admin.password,
        admin.contactNumber,
    ];

    return db.execute(sql,values);
};

const updateAdmin = async (admin, id) => {
    const sql = `UPDATE admins SET adminName = ?, email = ?, password = ?, contactNumber = ? WHERE id = ?`;
    const values = [admin.adminName, admin.email, admin.password, admin.contactNumber, id];
    return db.execute(sql, values);
};

const getAdminById = async (id) => {
    const sql = `SELECT * FROM admins WHERE id = ?`;
    return db.execute(sql, [id]);
};


 const deleteAdmin = async (admin) =>{
    const sql = `DELETE FROM  WHERE id =?`;
    return db.execute(sql,[id]);
 };

 module.exports={addAdmin,updateAdmin,getAdminById,deleteAdmin};

