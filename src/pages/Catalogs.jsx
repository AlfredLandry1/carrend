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
import Car from "../apis/CarsDescription";

import ctaBg from "../assets/images/body/ctaBg.png";

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
                  <div className="row d-flex justify-content-center justify-content-lg-start g-4">
                    {Car.map((car) => (
                      <div className="col-11 col-sm-8 col-md-6 col-lg-4">
                        <SimpleProductCard
                          id={car.id}
                          productImg={car.directory}
                          productView1={car.bigView.view1}
                          productView2={car.bigView.view2}
                          productName={car.name}
                          carId={car.id}
                          productThroughPrice={car.price}
                          productPrice={car.price_cfa}
                          reducePercent="50% off"
                          model={car.model}
                          brand={car.brand}
                          transmission={car.transmission}
                          engineType={car.engine_type}
                          engineName={car.engine_name}
                          to_60_mph={car.performance.to_60_mph}
                          top_speed={car.performance.top_speed}
                          style={car.style}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="my-5">
                <h3 className="fw-bold text-black">Most loved product</h3>
                <div className="pt-3 pb-5">
                  <div className="row d-flex justify-content-center justify-content-lg-start g-4">
                    {Car.map((car) => (
                      <div className="col-11 col-sm-8 col-md-6 col-lg-4">
                        <SimpleLovedProductCard
                          id={car.id}
                          productImg={car.directory}
                          productView1={car.bigView.view1}
                          productView2={car.bigView.view2}
                          productName={car.name}
                          likeNbr={car.like}
                          carId={car.id}
                          productThroughPrice={car.price}
                          productPrice={car.price_cfa}
                          reducePercent="50% off"
                          model={car.model}
                          brand={car.brand}
                          transmission={car.transmission}
                          engineType={car.engine_type}
                          engineName={car.engine_name}
                          to_60_mph={car.performance.to_60_mph}
                          top_speed={car.performance.top_speed}
                          style={car.style}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="my-5">
                <h3 className="fw-bold text-black">Products in promotion</h3>
                <div className="pt-3 pb-5">
                  <div className="row d-flex justify-content-center justify-content-lg-start g-4">
                    {Car.map((car) => (
                      <div className="col-11 col-sm-8 col-md-6 col-lg-4">
                        <SimpleLovedProductCard
                          id={car.id}
                          productImg={car.directory}
                          productView1={car.bigView.view1}
                          productView2={car.bigView.view2}
                          productName={car.name}
                          likeNbr={car.like}
                          carId={car.id}
                          productThroughPrice={car.price}
                          productPrice={car.price_cfa}
                          reducePercent="50% off"
                          model={car.model}
                          brand={car.brand}
                          transmission={car.transmission}
                          engineType={car.engine_type}
                          engineName={car.engine_name}
                          to_60_mph={car.performance.to_60_mph}
                          top_speed={car.performance.top_speed}
                          style={car.style}
                        />
                      </div>
                    ))}
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
