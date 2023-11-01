import React from "react";
import Navbar from "../components/header/Navbar";
import ProductBanner from "../components/body/ProductBanner";

import productBannerImage from "../assets/images/body/catalog-banner.png";
import Ads from "../components/body/Ads";
import Newsletter from "../components/body/Newsletter";
import SortForm from "../components/body/SortForm";
import SimpleProductCard from "../components/body/SimpleProductCard";
import CTACard from "../components/body/CTACard";
import SimpleLovedProductCard from "../components/body/SimpleLovedProductCard";
import Footer from "../components/footer/Footer";

import ctaBg from "../assets/images/body/ctaBg.png";
import product1 from "../assets/images/products/product1.png";
import product2 from "../assets/images/products/product2.png";
import product3 from "../assets/images/products/product3.png";
import product4 from "../assets/images/products/product4.png";
import product5 from "../assets/images/products/product5.png";
import product6 from "../assets/images/products/product6.png";
import product7 from "../assets/images/products/product7.png";
import product8 from "../assets/images/products/product8.png";

import newsletterCar from "../assets/images/body/newsletterCar.png";
import newsletterMap from "../assets/images/body/newsletterMap.png";

function Catalogs() {
  return (
    <>
      <header>
        <Navbar activeLink="catalogs" />
        <ProductBanner
          productBannerImage={productBannerImage}
          title="All cars, at your disposal"
          description="Discover our large collection of different cars at competitive
            prices. and take advantage of our special offers."
        />
        <Ads />
      </header>

      <main>
        <section className="container">
          <div className="row py-5">
            <div className="col-12 col-lg-3">
              <SortForm />
              <div className="row d-flex">
                <div className="col-12 col-sm-6 col-lg-12 my-5 mh-100">
                  <CTACard ctaBg={ctaBg} />
                </div>
                <div className="col-12 col-sm-6 col-lg-12 mb-5 mh-100">
                  <Ads />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div>
                <h3 className="fw-bold text-black">View the products</h3>
                <div className="pt-3 pb-5">
                  <div className="row d-flex g-4">
                    <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                      <SimpleProductCard
                        productImg={product1}
                        productName="Toyota Corolla"
                        productThroughPrice="3 000 000 000"
                        productPrice="6 000 000 000 FCFA"
                        reducePercent="50% off"
                      />
                    </div>
                    <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                      <SimpleProductCard
                        productImg={product2}
                        productName="Mercedes AMG"
                        productThroughPrice="3 000 000 000"
                        productPrice="6 000 000 000 FCFA"
                        reducePercent="50% off"
                      />
                    </div>
                    <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                      <SimpleProductCard
                        productImg={product3}
                        productName="BMW"
                        productPrice="6 000 000 000 FCFA"
                      />
                    </div>
                    <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                      <SimpleProductCard
                        productImg={product4}
                        productName="Vont Va Gen"
                        productThroughPrice="3 000 000 000"
                        productPrice="6 000 000 000 FCFA"
                        reducePercent="50% off"
                      />
                    </div>
                    <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                      <SimpleProductCard
                        productImg={product5}
                        productName="Vont Va Gen"
                        productThroughPrice="3 000 000 000"
                        productPrice="6 000 000 000 FCFA"
                        reducePercent="50% off"
                      />
                    </div>
                    <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                      <SimpleProductCard
                        productImg={product6}
                        productName="Vont Va Gen"
                        productThroughPrice="3 000 000 000"
                        productPrice="6 000 000 000 FCFA"
                        reducePercent="50% off"
                      />
                    </div>
                    <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                      <SimpleProductCard
                        productImg={product7}
                        productName="Vont Va Gen"
                        productThroughPrice="3 000 000 000"
                        productPrice="6 000 000 000 FCFA"
                        reducePercent="50% off"
                      />
                    </div>
                    <div className="col-12 col-sm-9 col-md-8 col-lg-4">
                      <SimpleProductCard
                        productImg={product8}
                        productName="Vont Va Gen"
                        productThroughPrice="3 000 000 000"
                        productPrice="6 000 000 000 FCFA"
                        reducePercent="50% off"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-5">
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
                <h3 className="fw-bold text-black">Products in promotion</h3>
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

export default Catalogs;
