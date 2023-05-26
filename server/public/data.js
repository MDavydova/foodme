/*import sujuk from "./images/sujuk.jpg";
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
*/

export const products = [
  {
    name: "sujuk",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    price: 10,
    image: "https://i.postimg.cc/5Nhm1Tgw/sujuk.jpg",
  },
  {
    name: "sujukAssorti",
    price: 20,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    image: "https://i.postimg.cc/MGxbfBhH/sujuk-Assorti.jpg",
  },
  {
    name: "cherry",
    price: 11,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    image: "https://i.postimg.cc/qRJLSKLS/cherry.jpg",
  },
  {
    name: "wine",
    price: 2,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    image: "https://i.postimg.cc/435v6dg5/wine.jpg",
  },
  {
    name: "cheese",
    price: 7,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    image: "https://i.postimg.cc/LsBDxDzj/cheese.webp",
  },
  {
    name: "pizzaCheese",
    price: 17,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    image: "https://i.postimg.cc/vB0zsm2B/pizza-Cheese.webp",
  },
  {
    name: "pinapple",
    price: 30,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    image: "https://i.postimg.cc/Y2y3DhmD/pinapple.jpg",
  },
  {
    name: "macadamia",
    price: 100,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    image: "https://i.postimg.cc/X7GgR4fj/macadamia.webp",
  },
  {
    name: "granola",
    price: 50,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    image: "https://i.postimg.cc/1XTr8jQ1/granola.jpg",
  },
  {
    name: "honey",
    price: 10,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    image: "https://i.postimg.cc/Y0jxqwTx/honey.jpg",
  },
  {
    name: "lavash",
    price: 15,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    image: "https://i.postimg.cc/fLRcBNWh/lavash.jpg",
  },
  {
    name: "dolma",
    price: 99,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
    image: "https://i.postimg.cc/2Sn75G9g/dolma.jpg",
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
