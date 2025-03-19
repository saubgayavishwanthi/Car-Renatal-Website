import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/adminPanel");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#000" }} // Black Background
    >
      <div
        className="card p-4 shadow-lg text-light bg-dark"
        style={{ width: "380px", borderRadius: "12px" }} // Reduced width
      >
        <h2 className="text-center mb-3">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fs-5">Username</label>
            <input
              type="text"
              className="form-control bg-secondary text-light fs-5 py-2"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fs-5">Password</label>
            <input
              type="password"
              className="form-control bg-secondary text-light fs-5 py-2"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 fs-5 py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
