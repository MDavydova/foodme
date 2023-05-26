import React from "react";
import Product from "../Product/Product";
import "./Shop.scss";

function Shop({ shopName, shopLocation, range, className }) {
  const productsList = range.map((product, index) => (
    <Product key={index} {...product} className="shop__products-item" />
  ));
  return (
    <li className={className}>
      <div className="shop__wrapper">
        <strong className="shop__name">{shopName}</strong>

        <ul className="shop__products-list">{productsList}</ul>
      </div>
    </li>
  );
}

export default Shop;
