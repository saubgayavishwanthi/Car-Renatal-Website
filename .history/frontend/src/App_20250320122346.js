import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import RentCar from './components/RentCar';
import Service from './components/Service';
import VehicleReservation from './components/VehicleReservation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={< Home/>} />
      <Route path="/contact-page"element={<Contact/>}/>
      <Route path="/rent-car"element={<RentCar/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/vehicle-" element={<Service/>}/>
    </Routes>
  </Router>
  );
}

export default App;
