import carA1 from "../assets/images/products/slideShow/card10.png";
import carA2 from "../assets/images/products/slideShow/card10.png";

import carB1 from "../assets/images/products/slideShow/card3.png";
import carB2 from "../assets/images/products/slideShow/card3.png";

import carC1 from "../assets/images/products/slideShow/card4.png";
import carC2 from "../assets/images/products/slideShow/card4.png";

import carE1 from "../assets/images/products/slideShow/card5.png";
import carE2 from "../assets/images/products/slideShow/card5.png";

import carF1 from "../assets/images/products/slideShow/card7.png";
import carF2 from "../assets/images/products/slideShow/card7.png";

import carG1 from "../assets/images/products/slideShow/card8.png";
import carG2 from "../assets/images/products/slideShow/card8.png";

import carH1 from "../assets/images/products/slideShow/card6.png";
import carH2 from "../assets/images/products/slideShow/card6.png";

import carI1 from "../assets/images/products/slideShow/card9.png";
import carI2 from "../assets/images/products/slideShow/card9.png";

import product1 from "../assets/images/products/product1.png";
import product2 from "../assets/images/products/product2.png";
import product3 from "../assets/images/products/product3.png";
import product4 from "../assets/images/products/product4.png";
import product5 from "../assets/images/products/product5.png";
import product6 from "../assets/images/products/product6.png";
import product7 from "../assets/images/products/product7.png";
import product8 from "../assets/images/products/product8.png";

const cars = [
  {
    id: 1,
    directory: product1,
    bigView: {
      view1: carB1,
      view2: carB2,
    },
    name: "Tesla Model 3",
    like: 12,
    brand: "Tesla",
    model: "Model 3",
    transmission: "Electric",
    engine_type: "Electric",
    engine_name: "Tesla electric motor",
    performance: {
      to_60_mph: 5.8,
      top_speed: 225,
    },
    style: "Sport sedan",
    price: 46990,
    price_cfa: 29844250,
  },
  {
    id: 2,
    directory: product2,
    bigView: {
      view1: carA1,
      view2: carA2,
    },
    name: "Porsche Taycan",
    like: 120,
    brand: "Porsche",
    model: "Taycan",
    transmission: "Electric",
    engine_type: "Electric",
    engine_name: "Porsche electric motor",
    performance: {
      to_60_mph: 3.5,
      top_speed: 260,
    },
    style: "Sport coupe",
    price: 79900,
    price_cfa: 50675625,
  },
  {
    id: 3,
    directory: product3,
    bigView: {
      view1: carE1,
      view2: carE2,
    },
    name: "Audi e-tron GT",
    like: "12k",
    brand: "Audi",
    model: "e-tron GT",
    transmission: "Electric",
    engine_type: "Electric",
    engine_name: "Audi electric motor",
    performance: {
      to_60_mph: 3.3,
      top_speed: 245,
    },
    style: "Sport coupe",
    price: 104900,
    price_cfa: 65740000,
  },
  {
    id: 4,
    directory: product4,
    bigView: {
      view1: carC1,
      view2: carC2,
    },
    name: "BMW i4",
    like: 19,
    brand: "BMW",
    model: "i4",
    transmission: "Electric",
    engine_type: "Electric",
    engine_name: "BMW electric motor",
    performance: {
      to_60_mph: 5.7,
      top_speed: 240,
    },
    style: "Sport sedan",
    price: 55900,
    price_cfa: 35447500,
  },
  {
    id: 5,
    directory: product5,
    bigView: {
      view1: carF1,
      view2: carF2,
    },
    name: "Mercedes-Benz EQS",
    like: 120,
    brand: "Mercedes-Benz",
    model: "EQS",
    transmission: "Electric",
    engine_type: "Electric",
    engine_name: "Mercedes-Benz electric motor",
    performance: {
      to_60_mph: 4.3,
      top_speed: 220,
    },
    style: "Luxury sedan",
    price: 102350,
    price_cfa: 64920625,
  },
  {
    id: 6,
    directory: product6,
    bigView: {
      view1: carG1,
      view2: carG2,
    },
    name: "Tesla Model S",
    like: "15k",
    brand: "Tesla",
    model: "Model S",
    transmission: "Electric",
    engine_type: "Electric",
    engine_name: "Tesla electric motor",
    performance: {
      to_60_mph: 2.1,
      top_speed: 261,
    },
    style: "Sport sedan",
    price: 94990,
    price_cfa: 59994000,
  },
  {
    id: 7,
    directory: product7,
    bigView: {
      view1: carH1,
      view2: carH2,
    },
    name: "Porsche 911",
    like: 110,
    brand: "Porsche",
    model: "911",
    transmission: "Manual",
    engine_type: "Gas",
    engine_name: "Porsche flat-six engine",
    performance: {
      to_60_mph: 3.7,
      top_speed: 261,
    },
    style: "luxury sedam",
    price: 94990,
    price_cfa: 59994000,
  },
  {
    id: 8,
    directory: product8,
    bigView: {
      view1: carI1,
      view2: carI2,
    },
    name: "Mercedes-Benz EQS",
    like: 12,
    brand: "Mercedes-Benz",
    model: "EQS",
    transmission: "Electric",
    engine_type: "Electric",
    engine_name: "Mercedes-Benz electric motor",
    performance: {
      to_60_mph: 4.3,
      top_speed: 220,
    },
    style: "Luxury sedan",
    price: 102350,
    price_cfa: 64920625,
  },
];
export default cars;
