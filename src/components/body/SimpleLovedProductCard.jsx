import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 *
 * @param {string} productImg - set the img of the product
 * @param {string} productName - set the name and the tile of the product
 * @param {number} likeNbr - set the likes number for the product
 * @param {string} productThroughPrice - set the through price if the product have and reduction
 * @param {string} productPrice - set the price of the product
 * @param {string} reducePercent - set the percent reduction whose is applied for the old price of the product
 *
 * @returns jsx element for the simple product card
 */

function SimpleLovedProductCard({
  id,
  likeNbr,
  productImg,
  productView1,
  productView2,
  productName,
  productThroughPrice,
  productPrice,
  reducePercent,
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
    productImg,
    productView1: productView1,
    productView2: productView2,
    name: productName,
    productThroughPrice: productThroughPrice,
    productPrice: productPrice,
    reducePercent: reducePercent,
    model: model,
    brand: brand,
    transmission: transmission,
    engineType: engineType,
    engineName: engineName,
    to_60_mph: to_60_mph,
    top_speed: top_speed,
    style,
  };

  let carts = [
    {
      ...productDes,
      index: productDes.length + 1,
    },
  ];

  let handleProductCart = () => {
    if (!window.localStorage.getItem("cartProducts")) {
      window.localStorage.setItem("cartProducts", JSON.stringify(carts));
    } else {
      carts = JSON.parse(window.localStorage.getItem("cartProducts"));
      carts.push({
        ...productDes,
        index: carts.length + 1,
      });
      window.localStorage.setItem("cartProducts", JSON.stringify(carts));
    }
  };

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="card border-0 h-100 shadow-sm"
      >
        <div className="card-header bg-transparent border-0">
          <div className="d-flex flex-nowrap justify-content-between align-items-center">
            <div className="p-1 m-0 bg-light rounded-3 shadow-sm">
              <span className="fs-5 text-blue bi bi-heart-fill"></span>
              <span className="badge text-muted">{likeNbr}</span>
            </div>
            <h5 className="text-black text-uppercase fw-bold">
              {reducePercent}
            </h5>
          </div>
        </div>
        <motion.div whileHover={{ scale: 0.9 }} className="card-body">
          <Link
            to={`/viewProduct`}
            onClick={() =>
              window.localStorage.setItem(
                "productDescription",
                JSON.stringify(productDes)
              )
            }
          >
            <img
              src={productImg}
              alt={productName}
              loading="lazy"
              className="img-fluid"
            />
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
              {productThroughPrice} fcfa
            </p>
            <h5 className="text-truncate text-bold" title={productPrice}>
              {productPrice} fcfa
            </h5>
          </div>
          <div className="mb-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="btn btn-light border-0 bg-white shadow"
              onClick={handleProductCart}
            >
              <span className="fs-4 text-blue bi bi-cart-plus-fill"></span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SimpleLovedProductCard;
