import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import bannerCar from "../assets/images/banner/car1.png";
import Navbar from "../components/header/Navbar";
import Banner from "../components/header/Banner";
import FearturesPresentation from "../components/body/FearturesPresentation";
import SimpleProductCard from "../components/body/SimpleProductCard";
import Comment from "../components/body/Comment";
import Newsletter from "../components/body/Newsletter";
import Footer from "../components/footer/Footer";
import Car from "../apis/CarsDescription";

import product1 from "../assets/images/products/product1.png";
import product2 from "../assets/images/products/product2.png";
import product3 from "../assets/images/products/product3.png";
import product4 from "../assets/images/products/product4.png";
import product5 from "../assets/images/products/product5.png";
import product6 from "../assets/images/products/product6.png";
import product7 from "../assets/images/products/product7.png";
import product8 from "../assets/images/products/product8.png";

import ressource from "../assets/images/body/ressource.png";

import user1 from "../assets/images/users/user1.png";
import user2 from "../assets/images/users/user2.png";
import user3 from "../assets/images/users/user3.png";

import newsletterCar from "../assets/images/body/newsletterCar.png";
import newsletterMap from "../assets/images/body/newsletterMap.png";

function Home() {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Fonction qui fait une requête HTTP vers le serveur React
  const getImages = async () => {
    try {
      // Fait la requête HTTP
      const response = await axios.get("localhost:3000/src/assets/images/products");

      // Si la requête a réussi
      if (response.status === 200) {
        // Récupère le corps de la réponse
        const body = response.data;

        // Ajoute les images à la liste des images
        setImages(body.images);
      }
    } catch (error) {
      // Gère l'erreur
      setErrorMessage("Une erreur est survenue lors du chargement des images.");
    }
  };

  // Initialise la liste des images
  getImages();


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
                    productImg={car.directory}
                    productName={car.name}
                    productThroughPrice={car.price_cfa}
                    productPrice="6 000 000 000 FCFA"
                    reducePercent="50% off"
                  />
                </div>
              ))}
              <div className="col-12 col-sm-9 col-md-5 col-lg-3">
                <SimpleProductCard
                  productImg={product1}
                  productName="Toyota Corolla"
                  productThroughPrice="3 000 000 000"
                  productPrice="6 000 000 000 FCFA"
                  reducePercent="50% off"
                />
              </div>
              <div className="col-12 col-sm-9 col-md-5 col-lg-3">
                <SimpleProductCard
                  productImg={product2}
                  productName="Mercedes AMG"
                  productThroughPrice="3 000 000 000"
                  productPrice="6 000 000 000 FCFA"
                  reducePercent="50% off"
                />
              </div>
              <div className="col-12 col-sm-9 col-md-5 col-lg-3">
                <SimpleProductCard
                  productImg={product3}
                  productName="BMW"
                  productPrice="6 000 000 000 FCFA"
                />
              </div>
              <div className="col-12 col-sm-9 col-md-5 col-lg-3">
                <SimpleProductCard
                  productImg={product4}
                  productName="Vont Va Gen"
                  productThroughPrice="3 000 000 000"
                  productPrice="6 000 000 000 FCFA"
                  reducePercent="50% off"
                />
              </div>
              <div className="col-12 col-sm-9 col-md-5 col-lg-3">
                <SimpleProductCard
                  productImg={product5}
                  productName="Vont Va Gen"
                  productThroughPrice="3 000 000 000"
                  productPrice="6 000 000 000 FCFA"
                  reducePercent="50% off"
                />
              </div>
              <div className="col-12 col-sm-9 col-md-5 col-lg-3">
                <SimpleProductCard
                  productImg={product6}
                  productName="Vont Va Gen"
                  productThroughPrice="3 000 000 000"
                  productPrice="6 000 000 000 FCFA"
                  reducePercent="50% off"
                />
              </div>
              <div className="col-12 col-sm-9 col-md-5 col-lg-3">
                <SimpleProductCard
                  productImg={product7}
                  productName="Vont Va Gen"
                  productThroughPrice="3 000 000 000"
                  productPrice="6 000 000 000 FCFA"
                  reducePercent="50% off"
                />
              </div>
              <div className="col-12 col-sm-9 col-md-5 col-lg-3">
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
                <img src={ressource} alt="" className="img-fluid" />
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
