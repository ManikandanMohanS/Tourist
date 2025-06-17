import React from 'react';
import { Link } from 'react-router-dom';  // import Link
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold fs-4" to="/">RCB Holidays</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link active text-light px-3 py-2 rounded hover-effect" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light px-3 py-2 rounded hover-effect" to="/places">Destination</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light px-3 py-2 rounded hover-effect" to="/Booking">Bookings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light px-3 py-2 rounded hover-effect" to="/status">Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light px-3 py-2 rounded hover-effect" to="/services">Services</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link text-light px-3 py-2 rounded hover-effect" to="/About">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
