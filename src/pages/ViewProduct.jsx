import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductBanner from "../components/body/ProductBanner";
import Ads from "../components/body/Ads";

import productBannerImage from "../assets/images/body/catalog-banner.png";
import Navbar from "../components/header/Navbar";
import SimpleLovedProductCard from "../components/body/SimpleLovedProductCard";
import Comment from "../components/body/Comment";

import CTACard from "../components/body/CTACard";
import Newsletter from "../components/body/Newsletter";
import Footer from "../components/footer/Footer";
import NoProduct from "../components/body/NoProduct";

import ctaBg from "../assets/images/body/ctaBg.png";

import product1 from "../assets/images/products/product1.png";
import product2 from "../assets/images/products/product2.png";
import product3 from "../assets/images/products/product3.png";
import product4 from "../assets/images/products/product4.png";
import product5 from "../assets/images/products/product5.png";
import product6 from "../assets/images/products/product6.png";

import user1 from "../assets/images/users/user1.png";
import user2 from "../assets/images/users/user2.png";
import user3 from "../assets/images/users/user3.png";

import newsletterCar from "../assets/images/body/newsletterCar.png";
import newsletterMap from "../assets/images/body/newsletterMap.png";

function ViewProduct() {
  const productString = localStorage.getItem("productDescription");
  const product = productString ? JSON.parse(productString) : null;
  if (!product) {
    return (
      <>
        <header>
          <Navbar activeLink="catalogs" />
        </header>
        <NoProduct />
      </>
    );
  } else {
    return (
      <>
        <header>
          <Navbar activeLink="catalogs" />
          <ProductBanner
            productBannerImage={productBannerImage}
            title="All the information about 
          your dream car"
            description="Discover our large collection of different cars at competitive prices. and take advantage of 
          our special offers."
          />
          <Ads />
        </header>

        <main>
          <section className="container py-5">
            <div className="d-flex justify-content-between align-items-end py-5">
              <h2 className="text-black text-truncate" title={product.name}>
                {product.name} - Informations
              </h2>
              <h6 className="fw-normal text-truncate" title="Previews">
                <Link to="/catalog">Previews</Link>
              </h6>
            </div>
            <div className="p-3 p-lg-5 rounded-4 bg-light">
              <div>
                <div className="d-flex justify-content-between align-items-end">
                  <h3
                    className="text-black text-truncate"
                    title="Detailed information"
                  >
                    Detailed information
                  </h3>
                  <h6
                    className="fw-bolder text-truncate"
                    title={product.productPrice}
                  >
                    {product.productPrice} fcfa
                  </h6>
                </div>
                <div
                  id="viewProduct"
                  className="mt-5 carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#viewProduct"
                      data-bs-slide-to="0"
                      className="active"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#viewProduct"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                      className=""
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={product.productView1}
                        loading="lazy"
                        alt="Car"
                        className="img-fluid"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={product.productView2}
                        alt="Car"
                        className=" img-fluid"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev shadow-sm"
                    type="button"
                    data-bs-target="#viewProduct"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next shadow-sm"
                    type="button"
                    data-bs-target="#viewProduct"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                <div className="row d-flex py-5 g-5">
                  <div className="col-md-4 col-lg-3">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h3 className="text-black fw-bold pb-2">Description</h3>
                        <div>
                          <div className="d-flex flex-nowrap align-items-center gap-2">
                            <p className="text-black fw-bold">Car name :</p>
                            <p className="text-truncate">{product.name}</p>
                          </div>
                          <div className="d-flex flex-nowrap align-items-center gap-2">
                            <p className="text-black fw-bold">Brand :</p>
                            <p className="text-truncate">{product.brand}</p>
                          </div>
                          <div className="d-flex flex-nowrap align-items-center gap-2">
                            <p className="text-black fw-bold">Model :</p>
                            <p className="text-truncate">{product.model}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h3 className="text-black fw-bold pb-2">Features</h3>
                        <div>
                          <div className="d-flex flex-nowrap align-items-center gap-2">
                            <p className="text-black fw-bold">Engine :</p>
                            <p className="text-truncate">
                              {product.engineName}
                            </p>
                          </div>
                          <div className="d-flex flex-nowrap align-items-center gap-2">
                            <p className="text-black fw-bold">Transmition :</p>
                            <p className="text-truncate">
                              {product.transmission}
                            </p>
                          </div>
                          <div className="d-flex flex-nowrap align-items-center gap-2">
                            <p className="text-black fw-bold text-truncate">
                              Performance 0 to 60 mph :
                            </p>
                            <p
                              className="text-break text-truncate"
                              title={product.to_60_mph}
                            >
                              {product.to_60_mph} s
                            </p>
                          </div>
                          <div className="d-flex flex-nowrap align-items-center gap-2">
                            <p className="text-black fw-bold">Style :</p>
                            <p className="text-truncate" title={product.style}>
                              {product.style}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h3 className="text-black fw-bold pb-2">
                          Technical specifications
                        </h3>
                        <div>
                          <div className="d-flex flex-nowrap align-items-center gap-2">
                            <p className="text-black fw-bold">Dimension :</p>
                            <p className="text-truncate">
                              4,57 m x 1,96 m x 1,21 m
                            </p>
                          </div>
                          <div className="d-flex flex-nowrap align-items-center gap-2">
                            <p className="text-black fw-bold">Weight :</p>
                            <p className="text-truncate">1475 kg</p>
                          </div>
                          <div className="d-flex flex-nowrap align-items-center gap-2">
                            <p className="text-black fw-bold text-truncate">
                              Engine consommation :
                            </p>
                            <p
                              className="text-break text-truncate"
                              title="0-100 km/h in 3.0 seconds, top speed 330 km/h"
                            >
                              11,8 l/100 km
                            </p>
                          </div>
                          <div className="d-flex flex-nowrap align-items-center gap-2">
                            <p className="text-black fw-bold">Style :</p>
                            <p className="text-truncate">
                              Sporty coupe with elegant design
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-3 my-3">
                  <div>
                    <Link
                      whi
                      to=""
                      className="btn bg-light border-0 rounded-0 py-2 px-4 fw-bold shadow-sm"
                    >
                      <motion.div whileHover={{ scale: 0.8 }}>
                        <span className="fs-4 bi bi-cart-plus-fill"></span> ADD
                        TO CART
                      </motion.div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      whi
                      to=""
                      className="btn bg-black border-0 rounded-0 py-2 px-4 text-white fw-bold shadow-sm"
                    >
                      <motion.div whileHover={{ scale: 0.8 }}>
                        <span className="fs-4 bi bi-cart-fill"></span> BY NOW
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="mb-3">
                    <CTACard ctaBg={ctaBg} />
                  </div>
                  <div className="mb-3">
                    <Ads />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="mb-5">
                    <h3 className="fw-bold text-black">Most loved product</h3>
                    <div className="pt-3 pb-5">
                      <div className="row d-flex g-4">
                        <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                          <SimpleLovedProductCard
                            productImg={product1}
                            productName="Toyota Corolla"
                            likeNbr="10"
                            productThroughPrice="3 000 000 000"
                            productPrice="6 000 000 000 FCFA"
                            reducePercent="50% off"
                          />
                        </div>
                        <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                          <SimpleLovedProductCard
                            productImg={product2}
                            productName="Mercedes AMG"
                            likeNbr="15"
                            productThroughPrice="3 000 000 000"
                            productPrice="6 000 000 000 FCFA"
                            reducePercent="50% off"
                          />
                        </div>
                        <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                          <SimpleLovedProductCard
                            productImg={product3}
                            productName="BMW"
                            likeNbr="15 K"
                            productPrice="6 000 000 000 FCFA"
                          />
                        </div>
                        <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                          <SimpleLovedProductCard
                            productImg={product4}
                            productName="Vont Va Gen"
                            likeNbr="25"
                            productThroughPrice="3 000 000 000"
                            productPrice="6 000 000 000 FCFA"
                            reducePercent="50% off"
                          />
                        </div>
                        <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                          <SimpleLovedProductCard
                            productImg={product5}
                            productName="Vont Va Gen"
                            likeNbr="09"
                            productThroughPrice="3 000 000 000"
                            productPrice="6 000 000 000 FCFA"
                            reducePercent="50% off"
                          />
                        </div>
                        <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                          <SimpleLovedProductCard
                            productImg={product6}
                            productName="Vont Va Gen"
                            likeNbr="1 k"
                            productThroughPrice="3 000 000 000"
                            productPrice="6 000 000 000 FCFA"
                            reducePercent="50% off"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-5">
                    <h3 className="fw-bold text-black">
                      Products in promotion
                    </h3>
                    <div className="pt-3 pb-5">
                      <div className="row d-flex g-4">
                        <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                          <SimpleLovedProductCard
                            productImg={product1}
                            productName="Toyota Corolla"
                            likeNbr="10"
                            productThroughPrice="3 000 000 000"
                            productPrice="6 000 000 000 FCFA"
                            reducePercent="50% off"
                          />
                        </div>
                        <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                          <SimpleLovedProductCard
                            productImg={product2}
                            productName="Mercedes AMG"
                            likeNbr="15"
                            productThroughPrice="3 000 000 000"
                            productPrice="6 000 000 000 FCFA"
                            reducePercent="50% off"
                          />
                        </div>
                        <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                          <SimpleLovedProductCard
                            productImg={product4}
                            productName="Vont Va Gen"
                            likeNbr="25"
                            productThroughPrice="3 000 000 000"
                            productPrice="6 000 000 000 FCFA"
                            reducePercent="50% off"
                          />
                        </div>
                        <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                          <SimpleLovedProductCard
                            productImg={product5}
                            productName="Vont Va Gen"
                            likeNbr="09"
                            productThroughPrice="3 000 000 000"
                            productPrice="6 000 000 000 FCFA"
                            reducePercent="50% off"
                          />
                        </div>
                        <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                          <SimpleLovedProductCard
                            productImg={product6}
                            productName="Vont Va Gen"
                            likeNbr="1 k"
                            productThroughPrice="3 000 000 000"
                            productPrice="6 000 000 000 FCFA"
                            reducePercent="50% off"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-top-5 bg-E6E9F0">
            <div className="container py-5">
              <div className="py-5">
                <h2
                  className="text-black text-truncate mb-5"
                  title="Some comments"
                >
                  Some comments
                </h2>
                <div className="row d-flex g-5">
                  <Comment
                    userImg={user1}
                    comment="I was very pleased with the delivery. The car arrived on time and in
            perfect condition."
                  />
                  <Comment
                    userImg={user2}
                    comment="Customer service was very responsive and helped me choose the right car for me."
                  />
                  <Comment
                    userImg={user3}
                    comment="I am an automotive professional and have been
                  very impressed with the quality of the cars
                  offered on this site."
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="my-5">
            <div className="bg-black">
              <Newsletter
                newsletterCar={newsletterCar}
                newsletterMap={newsletterMap}
              />
            </div>
          </section>

          <Footer />
        </main>
      </>
    );
  }
}

export default ViewProduct;
