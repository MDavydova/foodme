import "../CartPage/CartPage.scss";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import CheckoutFoodBox from "../../components/CheckoutFoodBox/CheckoutFoodBox";

import React from "react";

function CartPage({ pageClassName }) {
  return (
    <main className={pageClassName}>
      <div className="container">
        <h1>Checkout</h1>
        <div className="flex cart__wrapper">
          <div className="cart__col">
            <div className="cart__box">
              <h2>Food Info</h2>
              <CheckoutFoodBox />
            </div>
            <div className="cart__box"></div>
          </div>
          <div className="cart__col">
            <h2>Your Info</h2>
            <CheckoutForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
