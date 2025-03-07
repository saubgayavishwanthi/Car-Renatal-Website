import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={< Home/>} />
     
    </Routes>
  </Router>
  );
}

export default App;
