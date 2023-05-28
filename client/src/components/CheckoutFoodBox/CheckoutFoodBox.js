import React from "react";

import Product from "../Product/Product";

import "../CheckoutFoodBox/CheckoutFoodBox.scss";

import { useDispatch, useSelector } from "react-redux";

function CheckoutFoodBox() {
  const { products, totalCost } = useSelector((state) => ({
    ...state.cart,
  }));

  const productsList = products.map((product, index) => (
    <Product
      key={index}
      {...product}
      className="checkout__products-item"
      shop={false}
    />
  ));

  return (
    <div>
      <ul className="checkout__products-list flex flex-col list-none m-0 p-0">
        {productsList}
      </ul>

      <p className="checkout__total-price">
        Total: <span>${totalCost}</span>
      </p>
      <hr />
    </div>
  );
}

export default CheckoutFoodBox;
