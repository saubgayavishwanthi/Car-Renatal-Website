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

const updateAdmin = async (admin) =>{
    const sql =`UPDATE  admins SET adminName=? , email=? ,password=?,contatcNumber=?`;

    const values = [
        admin.adminName,
        admin.email,
        admin.password,
        admin.contactNumber,
    ];

    return db.execute(sql,values);

};
 const getAdminById = async (admin) =>{
     
    const sql = `SELECT * FROM vehicles WHERE id=?`;
    return db.executes(sql,[id]);
 };

 const deleteAdmin = async (admin) =>{
    const sql = `DELETE `;
 }

