import React from "react";
import "./Product.scss";

function Product({ image, description, price, name, className }) {
  return (
    <li className={className}>
      <div className="product__wrapper">
        <div className="flex align-center justify-between mb-32">
          <strong className="product__title">{name}</strong>
          <span className="product__price">${price}</span>
        </div>
        <div className="flex align-center justify-between mb-32">
          <div className="product__image">
            <img src={image} alt="image" />
          </div>
          <div className="product__buttons flex">
            <button>+</button>
            <button>-</button>
          </div>
        </div>

        <p className="product__description">{description}</p>
      </div>
    </li>
  );
}

export default Product;
