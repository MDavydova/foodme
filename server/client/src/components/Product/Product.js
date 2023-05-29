import { React, useEffect, useState } from "react";
import ProductButtonBox from "../ProductButtonBox";
import "./Product.scss";
import { defineShop } from "../../redux/features/shopsSlice";
import {
  addProduct,
  removeProduct,
  updateTotalAmount,
  updateTotalCost,
  removeProductTotally,
} from "../../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Product({
  image,
  description,
  price,
  name,
  shopName,
  className,
  shop,
}) {
  const { products } = useSelector((state) => ({
    ...state.cart,
  }));

  const { shops, chosenShop } = useSelector((state) => ({
    ...state.shops,
  }));

  const [productAmount, setProductAmount] = useState(0);

  const [buttonDisabled, setButtonDisabled] = useState(shop ? true : false);

  const dispatch = useDispatch();

  useEffect(() => {
    const productIndex = products.findIndex((product) => product.name === name);

    setProductAmount(productIndex === -1 ? 0 : products[productIndex].amount);

    if (products.length > 0) {
      dispatch(updateTotalAmount());
      dispatch(updateTotalCost());
    }
  }, [products]);

  let priceToShow = shop
    ? price
    : shops
        .find((shop) => shop.shopName === chosenShop)
        .range.find((product) => product.name === name).price;

  let priceForCart;
  let productCost;

  if (shop) {
    priceForCart = price;
  } else {
    priceForCart = priceToShow;
    const product = products.find((product) => product.name === name);
    productCost = product.amount * priceForCart;
  }

  const incrementHandler = () => {
    productAmount >= 0 && setButtonDisabled(false);
    shop && dispatch(defineShop(shopName));
    dispatch(addProduct({ name, priceForCart, shopName }));
  };

  const decrementHandler = () => {
    productAmount === 1 && setButtonDisabled(true);
    shop && dispatch(defineShop(shopName));
    dispatch(removeProduct({ name, priceForCart }));
  };

  const removeProductHandler = () => {
    dispatch(removeProductTotally({ name }));
  };

  return (
    <li className={className}>
      <div className="product__wrapper">
        <div className="flex align-center justify-between mb-32 relative">
          <strong className="product__title">{name}</strong>
          <span className="product__price">${priceToShow}</span>
          {!shop && (
            <span className="checkout__product-cost">${productCost}</span>
          )}
        </div>
        <div className="flex align-center justify-between mb-32">
          {shop && (
            <div className="product__image">
              <img src={image} alt="image" />
            </div>
          )}
          <ProductButtonBox
            incrementHandler={incrementHandler}
            decrementHandler={decrementHandler}
            productAmount={productAmount}
            buttonDisabled={buttonDisabled}
          />
          {!shop && (
            <button
              className="product__remove-button"
              onClick={removeProductHandler}
            >
              X
            </button>
          )}
        </div>

        {shop && <p className="product__description">{description}</p>}
      </div>
    </li>
  );
}

export default Product;
