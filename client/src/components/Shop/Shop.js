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

  const { total } = useSelector((state) => ({
    ...state.cart,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (total === 0) dispatch(undefineShop());
    setShopChosen(false);
  }, [total]);

  useEffect(() => {
    if (chosenShop != "")
      chosenShop === shopName ? setShopChosen(false) : setShopChosen(true);
  }, [chosenShop]);

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
