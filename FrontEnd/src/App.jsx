import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Places from './Components/Places';
import Admin from './Components/Admin';
import Booking from "./Components/Booking";
import Services from "./Components/Services";
import About from "./Components/About";
  // Assuming Services is the component for reviews
// You can create placeholder components for Review, Status, About too

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/status" element={<Admin />} />
        <Route path="/Booking" element={<Booking></Booking>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/About" element={<About></About>} />
        {/* Add routes for /review, /status, /about if needed */}
      </Routes>
    </Router>
  );
}

export default App;
