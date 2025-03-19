import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Reports = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card text-center bg-dark text-light shadow-lg"
        style={{ width: "500px", padding: "30px", borderRadius: "12px" }}
      >
        <div className="card-header bg-primary text-white fw-bold fs-3 py-3">
          Reports
        </div>
        <div className="card-body">
          <button className="btn btn-outline-info btn-lg w-100 mb-4 py-3 fs-5">
            Available Vehicles
          </button>
          <button className="btn btn-outline-info btn-lg w-100 mb-4 py-3 fs-5">
            Booking Report
          </button>
          <button className="btn btn-outline-info btn-lg w-100 py-3 fs-5">
            All Admins
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
