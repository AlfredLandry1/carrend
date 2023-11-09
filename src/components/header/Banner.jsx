import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 *
 * @param {string} bannerCar - canvas dispay img
 * @param {string} bannerTitle - the big title of the page
 * @param {string} bannerSubtitle - right title for improving ux
 * @param {string} bannerText - is the right text
 * @returns jsx element for banner
 */

function Banner({ bannerCar, bannerTitle, bannerSubtitle, bannerText }) {
  return (
    <section className="position-relative">
      <motion.div
        initial={{ translateX: -10, scale: 0.5 }}
        animate={{ translateX: +10, scale: 1 }}
        transition={{ duration: 5.3 }}
        className="position-absolute top-100 start-50 translate-middle d-none d-lg-block"
      >
        <img
          src={bannerCar}
          loading="lazy"
          alt="Carrend-banner-car"
          className="img-fluid"
        />
      </motion.div>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="container py-5">
              <h1
                className="display-1 fw-bold text-black"
                data-toggle="tooltip"
                title={bannerTitle}
              >
                {bannerTitle}
              </h1>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="container py-2 py-md-5">
              <div className="d-flex flex-column align-items-end gap-2 gap-md-5">
                <div className="text-end">
                  <h5 className="fw-medium">{bannerSubtitle}</h5>
                  <p title={bannerText}>{bannerText}</p>
                </div>
                <motion.div
                  whileHover={{ scale: 0.9 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -360,
                    borderRadius: "100%",
                  }}
                >
                  <Link
                    to="/userPage"
                    className="btn btn-light border-0 rounded-3 shadow"
                  >
                    <i className="text-black fs-4 bi bi-person-fill"></i>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link
                    to="/catalog"
                    className="bg-black btn btn-dark px-5 py-3 border-0 rounded-0 shadow-sm fw-bold"
                  >
                    SHOP NOW
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
