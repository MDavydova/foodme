import React from "react";
import {
  addProduct,
  removeProduct,
  updateTotalAmount,
  updateTotalCost,
  removeProductTotally,
} from "../../redux/features/cartSlice";

import { useDispatch, useSelector } from "react-redux";

function CheckoutFoodBox() {
  const { products, total } = useSelector((state) => ({
    ...state.cart,
  }));

  const dispatch = useDispatch();

  return (
    <div>
      <ul className="flex flex-col list-none m-0 p-0">
        {products.map((product, index) => {
          return (
            <li key={index} className="flex">
              <span>{product.name}</span>
              <div className="product__buttons flex"></div>
              <button
                className="checkout__remove-product"
                onClick={() => {
                  dispatch(removeProductTotally(product.name));
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <span class="checkout__total-price">Total: ${total}</span>
    </div>
  );
}

export default CheckoutFoodBox;
