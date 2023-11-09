import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Banner from "../components/header/Banner";
import FearturesPresentation from "../components/body/FearturesPresentation";
import Feature from "../components/body/Feature";
import Comment from "../components/body/Comment";
import Footer from "../components/footer/Footer";

import bannerCar from "../assets/images/banner/car2.png";
import regular from "../assets/images/svg/part1.svg";
import quality from "../assets/images/svg/part2.svg";
import price from "../assets/images/svg/coin.svg";

import ressource from "../assets/images/body/ressource.png";

import user1 from "../assets/images/users/user1.png";
import user2 from "../assets/images/users/user2.png";
import user3 from "../assets/images/users/user3.png";
import Newsletter from "../components/body/Newsletter";

import newsletterCar from "../assets/images/body/newsletterCar.png";
import newsletterMap from "../assets/images/body/newsletterMap.png";

function About() {
  return (
    <>
      <header className="bg-white min-vh-100 mh-100">
        <Navbar activeLink="about" />
        <Banner
          bannerCar={bannerCar}
          bannerTitle="WE ARE HERE 
          TO HELP YOU"
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
        <FearturesPresentation
          globalBg="bg-white"
          cardBg="bg-black"
          textColor="text-white"
          firstIconName="bi bi-3-circle"
          firstTitle="A wide collection of car"
          firstText="We offer a wide selection of cars of all brands, all categories
                and all engines. Find the car of your dreams, at the best price."
          secondIconName="bi bi-4-circle"
          secondTitle="Competitive prices"
          secondText="We offer competitive prices on all our cars. Compare and you
          will see."
        />
        <section className="rounded-top-5 bg-E6E9F0">
          <div className="container py-5">
            <div className="py-5">
              <div>
                <h2
                  className="text-black text-truncate mb-4"
                  title="what are our strengths"
                >
                  what are our strengths
                </h2>
                <p className="fw-light">
                  We have several competitive advantages including
                </p>
              </div>
              <div className="mt-4">
                <div className="row d-flex justify-content-around gap-5">
                  <Feature
                    regular={regular}
                    title="Regular vehicles"
                    description="They go through all the safety stages before being sold"
                  />
                  <Feature
                    regular={quality}
                    title="Quality follow-up"
                    description="Our professional team is here to help 
                    you and monitor your user 
                    experience throughout."
                  />
                  <Feature
                    regular={price}
                    title="Customizable payment"
                    description="You do not have any funds straight away, we have a customizable solvency method."
                  />
                </div>
              </div>
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
                  alt=""
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

export default About;
