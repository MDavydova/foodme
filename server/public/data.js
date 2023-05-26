import sujuk from "./images/sujuk.jpg";
import sujukAssorti from "./images/sujukAssorti.jpg";
import wine from "./images/wine.jpg";
import cheese from "./images/cheese.webp";
import pizzaCheese from "./images/pizzaCheese.webp";
import pinapple from "./images/pinapple.jpg";
import macadamia from "./images/macadamia.webp";
import granola from "./images/granola.jpg";
import honey from "./images/honey.jpg";
import lavash from "./images/lavash.jpg";
import dolma from "./images/cherry.jpg";

export const products = [
  {
    name: "sujuk",
    price: 10,
    image: sujuk,
  },
  {
    name: "sujukAssorti",
    price: 20,
    image: sujukAssorti,
  },
  {
    name: "wine",
    price: 2,
    image: wine,
  },
  {
    name: "cheese",
    price: 7,
    image: cheese,
  },
  {
    name: "pizzaCheese",
    price: 17,
    image: pizzaCheese,
  },
  {
    name: "pinapple",
    price: 30,
    image: pinapple,
  },
  {
    name: "macadamia",
    price: 100,
    image: macadamia,
  },
  {
    name: "granola",
    price: 50,
    image: granola,
  },
  {
    name: "honey",
    price: 10,
    image: honey,
  },
  {
    name: "lavash",
    price: 15,
    image: lavash,
  },
  {
    name: "dolma",
    price: 99,
    image: dolma,
  },
];

export const shops = [
  {
    shopName: "Hayastan",
    shopLocation: "",
    range: [products[10], products[9], products[0], products[1]],
  },
  {
    shopName: "Dimukache",
    shopLocation: "",
    range: [products[5], products[6], products[8], products[2]],
  },
  {
    shopName: "Kievtown",
    shopLocation: "",
    range: [products[7], products[3], products[4]],
  },
];
