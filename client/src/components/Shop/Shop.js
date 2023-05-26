import { React, useEffect, useState } from "react";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";

import "./Shop.scss";

function Shop({ shopName, shopLocation, range, className }) {
  const { chosenShop } = useSelector((state) => ({
    ...state.shops,
  }));

  const [isShopChosen, setShopChosen] = useState(false);

  useEffect(() => {
    if (chosenShop === shopName) setShopChosen(true);
  }, [chosenShop]);

  console.log(chosenShop);

  const productsList = range.map((product, index) => (
    <Product
      key={index}
      {...product}
      shopName={shopName}
      className="shop__products-item"
    />
  ));
  return (
    <li className={`${className} ${isShopChosen ? "disabled" : ""}`}>
      <div className="shop__wrapper">
        <strong className="shop__name">{shopName}</strong>
        <ul className="shop__products-list">{productsList}</ul>
      </div>
    </li>
  );
}

export default Shop;
