import { CartIcon } from "../../icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getTotal } from "../../redux/features/cartSlice";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  const { total } = useSelector((state) => ({
    ...state.cart,
  }));

  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper container">
          <strong className="nav__logo">FoodMe</strong>

          <ul className="nav__items">
            <li className="nav__item">
              <Link to="/">Shops</Link>
            </li>
            <li className="nav__item">
              <Link to="/orderInfo">Order</Link>
            </li>
            <li className="nav__cart-box nav__item">
              <Link to="/cart">
                <CartIcon />
                <span className="nav__cart-amount">{total}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
