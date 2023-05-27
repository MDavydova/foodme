import { React, useState } from "react";
import "./Product.scss";
import { defineShop } from "../../redux/features/shopsSlice";
import {
  addProduct,
  removeProduct,
  updateTotalAmount,
  updateTotalCost,
} from "../../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Product({ image, description, price, name, shopName, className }) {
  const [productAmount, setProductAmount] = useState(0);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    setProductAmount(productAmount + 1);
    if (productAmount >= 0) setButtonDisabled(false);
    dispatch(defineShop(shopName));
    dispatch(addProduct({ name, price }));
    dispatch(updateTotalAmount());
    dispatch(updateTotalCost());
  };

  const dicrementHandler = () => {
    setProductAmount(productAmount - 1);
    if (productAmount === 1) setButtonDisabled(true);
    dispatch(defineShop(shopName));
    dispatch(removeProduct({ name, price }));
    dispatch(updateTotalAmount());
    dispatch(updateTotalCost());
  };

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
            <button onClick={incrementHandler}>+</button>
            <input readOnly value={productAmount} />
            <button disabled={buttonDisabled} onClick={dicrementHandler}>
              -
            </button>
          </div>
        </div>

        <p className="product__description">{description}</p>
      </div>
    </li>
  );
}

export default Product;
