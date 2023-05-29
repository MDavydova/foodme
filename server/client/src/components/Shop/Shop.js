import { React, useEffect, useState } from "react";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { undefineShop } from "../../redux/features/shopsSlice";

import "./Shop.scss";

function Shop({ shopName, shopLocation, range, className }) {
  const [isShopChosen, setShopChosen] = useState(false);
  const { chosenShop } = useSelector((state) => ({
    ...state.shops,
  }));

  const { totalAmount } = useSelector((state) => ({
    ...state.cart,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (totalAmount === 0) {
      dispatch(undefineShop());
      setShopChosen(false);
    }
  }, [totalAmount]);

  useEffect(() => {
    if (chosenShop != "") {
      chosenShop === shopName ? setShopChosen(false) : setShopChosen(true);
    }
  }, [chosenShop]);

  const productsList = range.map((product, index) => (
    <Product
      key={index}
      {...product}
      shopName={shopName}
      className="shop__products-item"
      shop={true}
    />
  ));

  return (
    <li
      className={`${className} ${isShopChosen ? "disabled" : ""} ${
        chosenShop === shopName ? "chosen-shop" : ""
      }`}
    >
      <div className="shop__wrapper">
        <strong className="shop__name">{shopName}</strong>
        <ul className="shop__products-list">{productsList}</ul>
      </div>
    </li>
  );
}

export default Shop;
