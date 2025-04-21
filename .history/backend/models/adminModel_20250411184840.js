// models/adminModel.js
const db = require("../db");

const Admin = {
  add: (data, callback) => {
    const { adminName, email, password, contactNumber } = data;
    db.query(
      "INSERT INTO admins (adminName, email, password, contactNumber) VALUES (?, ?, ?, ?)",
      [adminName, email, password, contactNumber],
      callback
    );
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM admins WHERE id = ?", [id], callback);
  },

  updateById: (id, data, callback) => {
    const { adminName, email, password, contactNumber } = data;
    db.query(
      "UPDATE admins SET adminName = ?, email = ?, password = ?, contactNumber = ? WHERE id = ?",
      [adminName, email, password, contactNumber, id],
      callback
    );
  },

  deleteById: (id, callback) => {
    db.query("DELETE FROM admins WHERE id = ?", [id], callback);
  },
};

module.exports = Admin;