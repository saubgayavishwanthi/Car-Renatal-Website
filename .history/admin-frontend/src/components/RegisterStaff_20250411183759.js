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

  const [currentId, setCurrentId] = useState(null); // To hold current admin ID when needed

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
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
          alert("Admin added successfully!");
          console.log(response.data);
          resetForm();
        })
        .catch((error) => {
          console.error(error);
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
          setCurrentId(id); // store for update or delete
          alert("Admin found!");
        })
        .catch((error) => {
          alert("Admin Not Found!");
          console.error(error);
        });
    } else if (action === "Update") {
      const id = currentId || prompt("Enter Admin ID to update:");
      if (!id) return;
      axios
        .put(`http://localhost:8081/admins/update-admin/${id}`, formData)
        .then(() => {
          alert("Admin Updated Successfully!");
          resetForm();
        })
        .catch((error) => {
          alert("Error updating admin!");
          console.error(error);
        });
    } else if (action === "Delete") {
      const id = currentId || prompt("Enter Admin ID to delete:");
      if (!id) return;
      axios
        .delete(`http://localhost:8081/admins/delete/${id}`)
        .then(() => {
          alert("Admin deleted!");
          resetForm();
        })
        .catch((error) => {
          alert("Error deleting admin!");
          console.error(error);
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
