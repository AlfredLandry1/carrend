import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 *
 * @param {string} productImg - set the img of the product
 * @param {string} productName - set the name and the tile of the product
 * @param {string} productThroughPrice - set the through price if the product have and reduction
 * @param {string} productPrice - set the price of the product
 * @param {string} reducePercent - set the percent reduction whose is applied for the old price of the product
 *
 * @returns jsx element for the simple product card
 */

function SimpleProductCard({
  productImg,
  productName,
  productThroughPrice,
  productPrice,
  reducePercent,
}) {
  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="card border-0 h-100 shadow-sm"
      >
        <div className="card-header bg-transparent border-0">
          <div className="d-flex flex-nowrap justify-content-between align-items-center">
            <div className="p-1 m-0 bg-light rounded-3 shadow-sm">
              <span className="fs-5 bi bi-heart"></span>
              <span className="badge text-muted">0</span>
            </div>
            <h5 className="text-black text-uppercase fw-bold">
              {reducePercent}
            </h5>
          </div>
        </div>
        <motion.div whileHover={{ scale: 0.9 }} className="card-body">
          <Link to="/viewProduct">
            <img src={productImg} alt={productName} className="img-fluid" />
          </Link>
        </motion.div>
        <div className="footer mb-2 px-3 d-flex flex-wrap justify-content-between align-items-end">
          <div>
            <h4 className="text-truncate text-black fw-bolder">
              {productName}
            </h4>
            <p
              className="text-truncate p-0 m-0 text-decoration-line-through"
              title={productThroughPrice}
            >
              {productThroughPrice}
            </p>
            <h5 className="text-truncate text-bold" title={productPrice}>
              {productPrice}
            </h5>
          </div>
          <div className="mb-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="btn btn-light border-0 bg-white shadow"
            >
              <span className="fs-4 text-blue bi bi-cart-plus-fill"></span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SimpleProductCard;
