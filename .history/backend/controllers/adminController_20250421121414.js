

const Admin = require("../models/adminModel");

exports.addAdmin = (req, res) => {
  Admin.add(req.body, (err, result) => {
    if (err) return res.status(500).send("DB insert failed");
    res.status(200).send({ id: result.insertId, ...req.body });
  });
};

exports.getAdminById = (req, res) => {
  const { id } = req.params;
  Admin.findById(id, (err, result) => {
    if (err) return res.status(500).send("DB search failed");
    if (result.length === 0) return res.status(404).send("Admin not found");
    res.status(200).send(result[0]);
  });
};

exports.updateAdmin = (req, res) => {
  const { id } = req.params;
  Admin.update(id, req.body, (err, result) => {
    if (err) return res.status(500).send("Update failed");
    res.status(200).send("Admin updated");
  });
};

exports.deleteAdmin = (req, res) => {
  const { id } = req.params;
  Admin.delete(id, (err) => {
    if (err) return res.status(500).send("Delete failed");
    res.status(200).send("Admin deleted");
  });
};
