import React from "react";
import { Link } from "react-router-dom";

function ProductNavbar() {
  return (
    <nav className="navbar navbar-expand-lg border bg-white z-3">
      <div className="container">
          <h6 className="nav-item dropdown">
            <Link
              className="fs-5 fw-normal nav-link active dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All catalogs
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="" className="dropdown-item">
                  Muscle cars
                </Link>
              </li>
              <li>
                <Link to="" className="dropdown-item">
                  Running cars
                </Link>
              </li>
              <li>
                <Link to="" className="dropdown-item">
                  Familial cars
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link to="" className="dropdown-item">
                  Collection cars
                </Link>
              </li>
            </ul>
          </h6>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarProduct"
          aria-controls="navbarProduct"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarProduct">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-medium active">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All catalogs
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="" className="dropdown-item">
                    Muscle cars
                  </Link>
                </li>
                <li>
                  <Link to="" className="dropdown-item">
                    Running cars
                  </Link>
                </li>
                <li>
                  <Link to="" className="dropdown-item">
                    Familial cars
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="" className="dropdown-item">
                    Collection cars
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ProductNavbar;
