import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * 
 * @param {string} ctaBg - var for the path to bg image
 * @returns jsx elemt for display a link to newsletter
 */

function CTACard({ ctaBg }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="position-relative w-100">
      <div>
        <img
          src={ctaBg}
          loading="lazy"
          alt="Call to action img"
          className="top-0 start-0 w-100 img-fluid"
        />
      </div>
      <div className="text-white position-absolute top-50 start-50 translate-middle text-center z-1 w-100">
        <h3>Subscribe for more</h3>
        <h6>
          <Link
            to="#newsletter"
            className="nav-link fw-light text-decoration-underline"
          >
            Click there
          </Link>
        </h6>
      </div>
    </motion.div>
  );
}

export default CTACard;
