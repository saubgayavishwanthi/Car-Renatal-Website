import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import RentCar from './components/RentCar';
import CarRent from './components/CarRent';
import Service from './components/Service';

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
      <Route path="/car-rent"element={<CarRent/>}/>
      <Route path="/service" element={<Service/></Service>}
    </Routes>
  </Router>
  );
}

export default App;
