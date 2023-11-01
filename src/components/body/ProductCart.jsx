import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCart({ car, productName, productDescription, productPrice }) {
  return (
    <div className="col-md-8 col-lg-4">
      <div className="card bg-light shadow-sm border-0">
        <div className="card-body mw-100">
          <div className="d-flex flex-wrap align-items-start gap-3">
            <div className="bg-white shadow-sm rounded-2 p-1">
              <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.7 }}>
                <Link to="/viewproduct">
                  <img src={car} alt={car} className="img-fluid" />
                </Link>
              </motion.div>
            </div>
            <div className="mw-100">
              <div className="d-flex flex-nowrap justify-content-between align-items-start">
                <h5>
                  <Link
                    to="/viewProduct"
                    className="text-decoration-none text-black text-truncate text-break fw-medium"
                    title={productName}
                  >
                    {productName}
                  </Link>
                </h5>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <span className="bi bi-trash3-fill text-danger"></span>
                </motion.div>
              </div>
              <p
                className="text-truncate text-break m-0 p-0"
                title={productDescription}
              >
                {productDescription}
              </p>
              <h5 className="fw-bold text-break" title={productPrice}>{productPrice} FCFA</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
