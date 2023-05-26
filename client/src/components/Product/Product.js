import React from "react";

function Product({ image, description, price, name }) {
  return (
    <div>
      <div className="product__wrapper">
        <strong>{name}</strong>
        <img src={image} alt="image" />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Product;
