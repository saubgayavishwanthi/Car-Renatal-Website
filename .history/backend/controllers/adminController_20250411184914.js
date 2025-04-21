const Admin = require("../models/adminModel");

exports.addAdmin = (req, res) => {
  Admin.add(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Admin added", id: result.insertId });
  });
};

exports.getAdminById = (req, res) => {
  const id = req.params.id;
  Admin.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) return res.status(404).json({ message: "Not found" });
    res.json(result[0]);
  });
};

exports.updateAdminById = (req, res) => {
  const id = req.params.id;
  Admin.updateById(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Admin updated" });
  });
};

exports.deleteAdminById = (req, res) => {
  const id = req.params.id;
  Admin.deleteById(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Admin deleted" });
  });
};