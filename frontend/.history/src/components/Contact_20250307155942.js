import React from 'react'
import MyNavbar from './MyNavbar';
import Footer  from './Footer';


function Contact() {
  return (
    <div>
      <div className='navbar'>
        <MyNavbar/>
      </div>
      <div className='container'>
        <div>
        <div class="mb-3">
  <label for="formGroupExampleInput" className="form-label">Example label</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Another label</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
</div>
        </div>
        <div></div>
        
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default Contact
