const db = require("../config/db");

const Admin = {
  add: (data, callback) => {
    const sql = "INSERT INTO admins SET ?";
    db.query(sql, data, callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM admins WHERE id = ?", [id], callback);
  },

  update: (id, data, callback) => {
    db.query("UPDATE admins SET ? WHERE id = ?", [data, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM admins WHERE id = ?", [id], callback);
  },
};

module.exports = Admin;
