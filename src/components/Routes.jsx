import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Catalogs from "../pages/Catalogs";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ViewProduct from "../pages/ViewProduct";
import Cart from "../pages/Cart";

function Routess() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="catalog" element={<Catalogs />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="viewProduct" element={<ViewProduct />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Routess;
