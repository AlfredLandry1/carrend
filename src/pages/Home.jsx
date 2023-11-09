import React from "react";
import { Link } from "react-router-dom";

import bannerCar from "../assets/images/banner/car1.png";
import Navbar from "../components/header/Navbar";
import Banner from "../components/header/Banner";
import FearturesPresentation from "../components/body/FearturesPresentation";
import SimpleProductCard from "../components/body/SimpleProductCard";
import Comment from "../components/body/Comment";
import Newsletter from "../components/body/Newsletter";
import Footer from "../components/footer/Footer";
import Car from "../apis/CarsDescription";

import ressource from "../assets/images/body/ressource.png";

import user1 from "../assets/images/users/user1.png";
import user2 from "../assets/images/users/user2.png";
import user3 from "../assets/images/users/user3.png";

import newsletterCar from "../assets/images/body/newsletterCar.png";
import newsletterMap from "../assets/images/body/newsletterMap.png";

function Home() {
  return (
    <>
      <header className="bg-white min-vh-100 mh-100">
        <Navbar activeLink="home" />
        <Banner
          bannerCar={bannerCar}
          bannerTitle="YOUR DREAM CAR, JUST A CLICK AWAY."
          bannerSubtitle="YOUR NEW CAR, ONLINE"
          bannerText="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae ratione dolorem in cumque qui molestias
          reprehenderit totam sint, nam dignissimos."
        />
      </header>

      <main>
        <FearturesPresentation
          globalBg="bg-black"
          cardBg="bg-white"
          textColor="text-black"
          firstIconName="bi bi-1-circle"
          firstTitle="A wide collection of car"
          firstText="We offer a wide selection of cars of all brands, all categories
                and all engines. Find the car of your dreams, at the best price."
          secondIconName="bi bi-2-circle"
          secondTitle="Competitive prices"
          secondText="We offer competitive prices on all our cars. Compare and you
          will see."
        />

        <section className="bg-E6E9F0 rounded-top-5">
          <div className="container py-5">
            <div className="d-flex justify-content-between align-items-end py-5">
              <h2
                className="text-black text-truncate"
                title="Most popular products"
              >
                Most popular products
              </h2>
              <h6 className="fw-normal text-truncate" title="View all products">
                View all products
              </h6>
            </div>
            <div className="row d-flex g-4">
              {Car.map((car) => (
                <div className="col-12 col-sm-9 col-md-5 col-lg-3">
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
        </section>

        <section className="section-why-us rounded-top-5">
          <div className="container py-5">
            <div className="row text-white d-flex align-items-center">
              <div className="col-12 col-md-6 py-5">
                <div>
                  <h1 className="display-4 fw-bolder">Why us ?</h1>
                  <p className="mt-3">
                    Our website offers you a wide selection of first-hand cars,
                    of all brands and categories. You are sure to find the car
                    that suits you, whatever your budget or your needs.
                  </p>
                  <p className="my-2">
                    Our prices are unbeatable. We offer discounts of up to 50%
                    on the new price.
                  </p>
                  <p>
                    We also offer additional services, such as free shipping,
                    warranty, and financing.
                  </p>
                </div>
                <div className="mt-5">
                  <h5 className="text-uppercase fw-bolder">
                    So don't wait any longer! Visit our website today and find
                    the car of your dreams!
                  </h5>
                  <div className="mt-5">
                    <Link
                      to="/catalog"
                      className="fw-bold fs-6 btn btn-light py-3 px-5 border-0 rounded-0"
                    >
                      <span className=" d-flex align-items-center">
                        <span className="fs-3 bi bi-cart-fill"></span> SHOP NOW
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2 d-none d-lg-block"></div>
              <div className="col-12 col-md-4 d-none d-lg-block">
                <img
                  src={ressource}
                  loading="lazy"
                  alt={ressource}
                  className="img-fluid"
                />
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

export default Home;
