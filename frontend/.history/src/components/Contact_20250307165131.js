import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navrbar from './MyNavbar';
import Footer  from "./Footer";
import '../css/Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "",subject:"",message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "",subject:"" message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
    <div className="navbar">
        <Navrbar/>
    </div>
    <div className="contact-container">
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p>SL Quick Ride (Pvt) Ltd.</p>
            <p>No.04 Wasantharama Road , Wadduwa.</p>
            <p>+94704066930</p>
            <p>Vishu@gmail.com</p>
        </div>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="mb-4 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="map"></div>
    </div>
    <div className="footer">
        <Footer/>
    </div>
    </div>
  );
};

export default ContactForm;
