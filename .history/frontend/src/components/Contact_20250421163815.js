import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navrbar from './MyNavbar';
import Footer from "./Footer";
import '../css/Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
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
      // 🔥 SEND FORM DATA TO BACKEND
      fetch("http://localhost:8081/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
          } else {
            alert("Failed to send message.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong!");
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <div className="navbar">
        <Navrbar />
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>SL Quick Ride (Pvt) Ltd.</p>
          <p>No.04 Wasantharama Road, Wadduwa.</p>
          <p>+94704066930</p>
          <p>Vishu@gmail.com</p>
        </div>

        <div className="container-form mt-5">
          <div className="row justify-content-center">
            <div className="col-md-9">
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

        <div className="map mt-5">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.635504527447!2d79.9202483!3d6.6449281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae236b65f13f5e5%3A0x8b57e0a28b4b4e8!2sWadduwa!5e0!3m2!1sen!2slk!4v1645875044392"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ContactForm;
