// src/components/AdminPanel.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-dark"
      style={{ fontSize: "18px" }}
    >
      <div
        className="card text-center p-5 bg-secondary text-white"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h2 className="mb-4">
          <i>Admin Panel</i>
        </h2>
        <button
          className="btn btn-dark mb-4 btn-lg"
          style={{ padding: "15px 30px", fontSize: "18px" }}
          onClick={() => navigate("/manage-vehicles")}
        >
          Manage Vehicles
        </button>
        <button
          className="btn btn-dark mb-4 btn-lg"
          style={{ padding: "15px 30px", fontSize: "18px" }}
          onClick={() => navigate("/manage-booking")}
        >
          Manage Booking
        </button>
        <button
          className="btn btn-dark mb-4 btn-lg"
          style={{ padding: "15px 30px", fontSize: "18px" }}
          onClick={() => navigate("/register-staff")}
        >
          Register Staff Member
        </button>
        <button
          className="btn btn-dark mb-4 btn-lg"
          style={{ padding: "12px 25px", fontSize: "16px" }} // Smaller size for Reports button
          onClick={() => navigate("/reports")}
        >
          Reports
        </button>
        <button
          className="btn btn-danger btn-lg"
          style={{ padding: "10px 20px", fontSize: "18px" }}
          onClick={() => navigate("/login")}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
