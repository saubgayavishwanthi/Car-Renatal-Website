import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterStaff = () => {
  const [formData, setFormData] = useState({
    adminName: "",
    email: "",
    password: "",
    contactNumber: "",
  });

  const [currentId, setCurrentId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    console.log("Resetting form...");
    setFormData({
      adminName: "",
      email: "",
      password: "",
      contactNumber: "",
    });
    setCurrentId(null);
  };

  const handleSubmit = (action) => {
    if (action === "Add") {
      axios
        .post("http://localhost:8081/admins/add", formData)
        .then((response) => {
          resetForm(); // Clear fields first
          alert("Admin added successfully!");
          console.log("Add response:", response.data);
        })
        .catch((error) => {
          console.error("Add error:", error.response?.data || error.message);
          alert("Error adding admin!");
        });
    } else if (action === "Search") {
      const id = prompt("Enter Admin ID to search:");
      if (!id) return;
      axios
        .get(`http://localhost:8081/admins/search-by-id/${id}`)
        .then((response) => {
          const admin = response.data;
          setFormData({
            adminName: admin.adminName,
            email: admin.email,
            password: admin.password,
            contactNumber: admin.contactNumber,
          });
          setCurrentId(id);
          alert("Admin found!");
        })
        .catch((error) => {
          console.error("Search error:", error.response?.data || error.message);
          alert("Admin Not Found!");
        });
    } else if (action === "Update") {
      const id = currentId || prompt("Enter Admin ID to update:");
      if (!id) return;
      axios
        .put(`http://localhost:8081/admins/update-admin/${id}`, formData)
        .then(() => {
          resetForm();
          alert("Admin Updated Successfully!");
        })
        .catch((error) => {
          console.error("Update error:", error.response?.data || error.message);
          alert("Error updating admin!");
        });
    } else if (action === "Delete") {
      const id = currentId || prompt("Enter Admin ID to delete:");
      if (!id) return;
      axios
        .delete(`http://localhost:8081/admins/delete/${id}`)
        .then(() => {
          resetForm();
          alert("Admin deleted!");
        })
        .catch((error) => {
          console.error("Delete error:", error.response?.data || error.message);
          alert("Error deleting admin!");
        });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-5 bg-dark text-light shadow-lg"
        style={{ width: "500px", borderRadius: "10px" }}
      >
        <h3 className="text-center mb-4 fw-bold">Register Staff Member</h3>
        <input
          type="text"
          name="adminName"
          placeholder="Admin Name"
          className="form-control mb-3 py-2"
          value={formData.adminName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="form-control mb-3 py-2"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3 py-2"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          className="form-control mb-4 py-2"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => handleSubmit("Add")}
          >
            Add
          </button>
          <button
            className="btn btn-warning btn-lg"
            onClick={() => handleSubmit("Search")}
          >
            Search
          </button>
          <button
            className="btn btn-success btn-lg"
            onClick={() => handleSubmit("Update")}
          >
            Update
          </button>
          <button
            className="btn btn-danger btn-lg"
            onClick={() => handleSubmit("Delete")}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterStaff;
