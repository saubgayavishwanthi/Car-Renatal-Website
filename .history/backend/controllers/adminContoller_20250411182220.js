const Admin = require("../models/adminModel");

exports.addAdmin = (req, res) => {
  Admin.add(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Admin added successfully", result });
  });
};

exports.getAdminById = (req, res) => {
  const id = req.params.id;
  Admin.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) return res.status(404).json({ message: "Admin not found" });
    res.json(result[0]);
  });
};

exports.updateAdmin = (req, res) => {
  const id = req.params.id;
  Admin.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Admin updated successfully" });
  });
};

exports.deleteAdmin = (req, res) => {
  const id = req.params.id;
  Admin.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Admin deleted successfully" });
  });
};
