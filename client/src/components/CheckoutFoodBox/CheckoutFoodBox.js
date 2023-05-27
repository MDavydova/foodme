import React from "react";

import Product from "../Product/Product";

import { useDispatch, useSelector } from "react-redux";

function CheckoutFoodBox() {
  const { products, total } = useSelector((state) => ({
    ...state.cart,
  }));

  const dispatch = useDispatch();

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

      <span className="checkout__total-price">Total: ${total}</span>
    </div>
  );
}

export default CheckoutFoodBox;
