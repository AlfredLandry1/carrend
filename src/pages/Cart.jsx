import React from "react";
import { Link } from "react-router-dom";
import ProductCart from "../components/body/ProductCart";
import Navbar from "../components/header/Navbar";
import NoProduct from "../components/body/NoProduct";

// import car1 from "../assets/images/products/cart/cartCar1.png";
// import car2 from "../assets/images/products/cart/cartCar2.png";
// import car3 from "../assets/images/products/cart/cartCar3.png";
// import car4 from "../assets/images/products/cart/cartCar4.png";

function Cart() {
  const productString = localStorage.getItem("cartProducts");
  const products = productString ? JSON.parse(productString) : null;
  if (!products) {
    return (
      <>
        <header>
          <Navbar activeLink="catalogs" />
        </header>
        <NoProduct />
      </>
    );
  } else {
    const products = JSON.parse(productString);
    let sumPrice = 0;
    const price = products.map((product) => sumPrice + product.productPrice);

    sumPrice = price;

    return (
      <>
        <header>
          <Navbar activeLink="catalogs" />
        </header>
        <section className="my-5">
          <div className="container">
            <Link>Previews</Link>
            <div className="py-5">
              <div className="d-flex justify-content-between align-items-end py-1">
                <h2
                  className="text-black text-truncate"
                  title="Your product(s) list 05"
                >
                  Your product(s) list
                  <code className="fs-2 fw-bolder ms-3">{products.length}</code>
                </h2>
                <h5 className="fw-normal text-truncate" title={sumPrice}>
                  {sumPrice} fcfa
                </h5>
              </div>
              <div className="row d-flex gap-3">
                {products.map((product) => (
                  <ProductCart
                  id={product.id}
                    car={product.productImg}
                    productName={product.name}
                    productDescription={product.style}
                    productPrice={product.productPrice}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Cart;
