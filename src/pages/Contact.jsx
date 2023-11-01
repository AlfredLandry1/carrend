import React from "react";
import Navbar from "../components/header/Navbar";
import Banner from "../components/header/Banner";
import Feature from "../components/body/Feature";
import Footer from "../components/footer/Footer";
import Ads from "../components/body/Ads";

import bannerCar from "../assets/images/banner/car3.png";
import regular from "../assets/images/svg/part1.svg";
import quality from "../assets/images/svg/part2.svg";
import price from "../assets/images/svg/coin.svg";
import Newsletter from "../components/body/Newsletter";

import newsletterCar from "../assets/images/body/newsletterCar.png";
import newsletterMap from "../assets/images/body/newsletterMap.png";

import car from "../assets/images/body/about.png";

function Contact() {
  return (
    <>
      <header className="bg-white min-vh-100 mh-100">
        <Navbar activeLink="contact" />
        <Banner
          bannerCar={bannerCar}
          bannerTitle="CONTACT OUR TEAM"
          bannerSubtitle="YOUR NEW CAR, ONLINE"
          bannerText="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae ratione dolorem in cumque qui molestias
          reprehenderit totam sint, nam dignissimos."
        />
        <Ads />
      </header>
      <main>
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
        <section className="my-5">
          <div className="container py-5">
            <div className="row g-3 ">
              <div className="col-12 col-md-4 col-lg-4">
                <div className="card border-0">
                  <div className="card-header bg-transparent border-0 text-blue d-flex flex-nowrap justify-content-between align-items-center">
                    <h5 className="text-truncate">Cell phone</h5>
                    <span className="fw-bolder fs-6 bi bi-telephone-fill"></span>
                  </div>
                  <div className="card-body">
                    <h6>+237 xxx xxx xxx</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div className="card border-0">
                  <div className="card-header bg-transparent border-0 text-blue d-flex flex-nowrap justify-content-between align-items-center">
                    <h5 className="text-truncate">Email</h5>
                    <span className="fw-bolder fs-6 bi bi-envelope-fill"></span>
                  </div>
                  <div className="card-body">
                    <h6>carrendservice@info.com</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div className="card border-0">
                  <div className="card-header bg-transparent border-0 text-blue d-flex flex-nowrap justify-content-between align-items-center">
                    <h5 className="text-truncate">Cell phone</h5>
                    <span className="fw-bolder fs-6 bi bi-telephone-fill"></span>
                  </div>
                  <div className="card-body">
                    <h6>+237 xxx xxx xxx</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-5">
          <div className="bg-black py-5">
            <div className="w-100 d-flex flex-wrap-reverse justify-content-around">
              <div className="col-md-7">
                <img src={car} alt="porche" className="img-fluid" />
              </div>
              <div className="col-md-5">
                <div className="container text-white">
                    <h1 className="display-3 fw-bolder ">Contact us</h1>
                    <p className="fw-light">Contact our technical team to find out more.</p>
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

export default Contact;
