import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCart({
  id,
  productImg,
  productView1,
  productView2,
  productName,
  productDescription,
  productPrice,
  model,
  brand,
  transmission,
  engineType,
  engineName,
  to_60_mph,
  top_speed,
  style,
}) {
  const productDes = {
    id: id,
    productView1: productView1,
    productView2: productView2,
    name: productName,
    productPrice: productPrice,
    model: model,
    brand: brand,
    transmission: transmission,
    engineType: engineType,
    engineName: engineName,
    to_60_mph: to_60_mph,
    top_speed: top_speed,
    style,
  };

  return (
    <div className="col-md-12 col-lg-4">
      <div className="card bg-light shadow-sm border-0 h-100">
        <div className="card-body mw-100">
          <div className="row d-flex">
            <div className="d-flex align-items-center justify-content-center col-4 col-lg-3 bg-white shadow-sm rounded-2 p-1">
              <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.7 }}>
                <Link
                  to="/viewproduct"
                  onClick={() =>
                    window.localStorage.setItem(
                      "productDescription",
                      JSON.stringify(productDes)
                    )
                  }
                >
                  <img
                    src={productImg}
                    loading="lazy"
                    alt={productImg}
                    className="img-fluid"
                  />
                </Link>
              </motion.div>
            </div>
            <div className="col-8 col-lg-9 mw-100">
              <div className="d-flex flex-nowrap justify-content-between align-items-start">
                <h5>
                  <Link
                    to="/viewProduct"
                    className="text-decoration-none text-black text-truncate text-break fw-medium"
                    title={productName}
                    onClick={() =>
                      window.localStorage.setItem(
                        "productDescription",
                        JSON.stringify(productDes)
                      )
                    }
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
              <p className="text-break m-0 p-0" title={productDescription}>
                {productDescription}
              </p>
              <h5 className="fw-bold text-break" title={productPrice}>
                {productPrice}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
