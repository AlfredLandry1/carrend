import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 *
 * @param {string} activeLink - is the nameof the curent page
 * @returns a jsxcomponent for the navbar
 */

function Navbar({ activeLink }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white z-3">
      <div className="container">
        <Link className="navbar-brand fs-1 fw-bold" to='/'>
          Carrend
        </Link>
        <motion.div
          className="d-flex ms-5 ms-0"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <Link
            to='/cart'
            className="bg-white btn btn-light border-0 rounded-pill shadow-sm"
          >
            <i className="text-black fs-4 bi bi-cart-fill"></i>
            <span className="badge ms-2 fw-medium text-danger border-circle">
              0
            </span>
          </Link>
        </motion.div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/home"
                className={`nav-link ${
                  activeLink === "home" ? "fw-medium active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "catalogs" ? "fw-medium active" : ""
                }`}
                to='/catalog'
              >
                Catalogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "about" ? "fw-medium active" : ""
                }`}
                to='/about'
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "contact" ? "fw-medium active" : ""
                }`}
                to='/contact'
              >
                Contacts
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="d-flex flex-nowrap bg-dark rounded-2 py-1 px-2">
              <input
                className="form-control bg-transparent border-0 text-light rounded-0"
                type="search"
                placeholder="Enter your search yere. . ."
                aria-label="Search"
              />
              <motion.div whileHover={{ scale: 0.8 }}>
                <button className="btn btn-light rounded-2" type="submit">
                  <span className="bi bi-search"></span>
                </button>
              </motion.div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
