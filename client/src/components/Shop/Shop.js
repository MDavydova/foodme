import React from "react";
import "./Shop.scss";

function Shop({ shopName, shopLocation, range, className }) {
  return (
    <li className={className}>
      <div className="shop__wrapper">
        <strong className="shop__name">{shopName}</strong>
      </div>
    </li>
  );
}

export default Shop;
