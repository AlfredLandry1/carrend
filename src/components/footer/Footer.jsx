import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-5">
      <div className="pt-5">
        <div className="bg-black">
          <div className="py-5">
            <div className="container py-5">
              <h1 className="text-white display-4 fw-bolder">Carrend</h1>
              <div className="row g-5 text-white mt-5">
                <div className="col-md-3 col-lg-4 fw-light">
                  <h2 className="" title="Utils">
                    Utils
                  </h2>
                  <p className="text-break">
                    We are located in Douala Cameroon, facing . . . and in
                    nearby Yaounde. . . .
                  </p>
                  <ul>
                    <li>
                      <a
                        href="mailto:carrendservices@info.com"
                        className="text-decoration-none text-white"
                      >
                        carrendservices@info.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2">
                  <h2 title="Menu">Menu</h2>
                  <ol className="d-flex gap-3 flex-column">
                    <li>
                      <Link to="/" className="nav-link active">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/catalog" className="nav-link">
                        Catalogs
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-link">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" className="nav-link">
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="nav-link">
                        Contacts
                      </Link>
                    </li>
                  </ol>
                </div>
                <div className="col-md-3">
                  <h2 title="Quick links">Quick links</h2>
                  <ol className="d-flex gap-3 flex-column">
                    <li>
                      <Link to="/cart" className="nav-link active">
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/userPage" className="nav-link">
                        Account
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-link">
                        Privacy police
                      </Link>
                    </li>
                  </ol>
                </div>
                <div className="col-md-3">
                  <h2 title="Social links">Social links</h2>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <Link to="/" className="text-white fs-6">
                        <span className="bi bi-tiktok"></span>{" "}
                        @carrend_the_solution
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="/" className="text-white fs-6">
                        <span className="bi bi-instagram"></span>{" "}
                        @carrend_the_solution237
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-white fs-6">
                        <span className="bi bi-linkedin"></span>{" "}
                        @carrend_the_pro
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
