const db = require("../config/db");

const Admin = {
  add: (data, callback) => {
    const query = "INSERT INTO admins SET ?";
    db.query(query, data, callback);
  },

  findById: (id, callback) => {
    const query = "SELECT * FROM admins WHERE id = ?";
    db.query(query, [id], callback);
  },

  update: (id, data, callback) => {
    const query = "UPDATE admins SET ? WHERE id = ?";
    db.query(query, [data, id], callback);
  },

  delete: (id, callback) => {
    const query = "DELETE FROM admins WHERE id = ?";
    db.query(query, [id], callback);
  },
};

module.exports = Admin;
