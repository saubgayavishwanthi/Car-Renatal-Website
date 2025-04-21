const db = require("../config/db");

const saveMessage = async (name, email, subject, message) => {
  const sql = "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)";
  return db.execute(sql, [name, email, subject, message]);
};

module.exports = { saveMessage };
