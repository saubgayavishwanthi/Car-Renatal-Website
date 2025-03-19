// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import ManageVehicles from "./components/ManageVehicles"; // ✅ Correct Import
import Login from "./components/Login";
import RegisterStaff from "./components/RegisterStaff";
import Reports from "./components/Reports";
import ManageBooking from "./components/ManageBooking";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/manage-vehicles" element={<ManageVehicles />} /> {/* ✅ Correct Path */}
        <Route path="/register-staff" element={<RegisterStaff />} />
        <Route path="/reports" element={<Reports />} /> 
        <Route path="/manage-booking" element={<ManageBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
