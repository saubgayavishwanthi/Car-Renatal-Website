import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={< Home/>} />
      <Route path="/contact-page"element={<Contact/>}/>
     
    </Routes>
  </Router>
  );
}

export default App;
