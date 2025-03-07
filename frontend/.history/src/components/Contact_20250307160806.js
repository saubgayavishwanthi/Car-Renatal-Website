import React from 'react'
import MyNavbar from './MyNavbar';
import Footer  from './Footer';


function Contact() {
  return (
    
      <div className='navbar'>
        <MyNavbar/>
      </div>
      <div className='container'>
        <div>
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
        <div></div>
        
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    
  )
}

export default Contact
