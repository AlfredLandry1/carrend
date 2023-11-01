import React from "react";
import { Link } from "react-router-dom";
import ProductCart from "../components/body/ProductCart";
import Navbar from "../components/header/Navbar";

import car1 from "../assets/images/products/cart/cartCar1.png";
import car2 from "../assets/images/products/cart/cartCar2.png";
import car3 from "../assets/images/products/cart/cartCar3.png";
import car4 from "../assets/images/products/cart/cartCar4.png";
import car5 from "../assets/images/products/cart/cartCar5.png";

function Cart() {
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
                Your product(s) list <code className="fs-4 ms-3">05</code>
              </h2>
              <h5 className="fw-normal text-truncate" title="View all products">
                x xxx xxx xxx FCFA
              </h5>
            </div>
            <div className="row gap-3">
              <ProductCart
                car={car1}
                productName="Ferrari"
                productDescription="sporty coupe with elegant design"
                productPrice="3 000 000"
              />
              <ProductCart
                car={car2}
                productName="Jeep"
                productDescription="SUV coupe for family"
                productPrice="3 000 000"
              />
              <ProductCart
                car={car3}
                productName="Toyota hillux"
                productDescription="SUV coupe with elegant design and all roads"
                productPrice="3 000 000"
              />
              <ProductCart
                car={car4}
                productName="Ferrari"
                productDescription="sporty coupe with elegant design"
                productPrice="3 000 000"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
