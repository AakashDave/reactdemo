import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand ps-5" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-auto" id="navbarNav">
          <ul className="navbar-nav ms-auto pe-5">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
