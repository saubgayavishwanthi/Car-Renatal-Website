const db = require("../config/db");

const Admin = {
  add: (data, callback) => {
    const sql = "INSERT INTO admins (adminName, email, password, contactNumber) VALUES (?, ?, ?, ?)";
    db.query(sql, [data.adminName, data.email, data.password, data.contactNumber], callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM admins WHERE id = ?", [id], callback);
  },

  update: (id, data, callback) => {
    const sql = "UPDATE admins SET adminName=?, email=?, password=?, contactNumber=? WHERE id=?";
    db.query(sql, [data.adminName, data.email, data.password, data.contactNumber, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM admins WHERE id = ?", [id], callback);
  },
};

module.exports = Admin;
