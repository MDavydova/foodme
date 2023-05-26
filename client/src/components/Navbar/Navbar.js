import { CartIcon } from "../../icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  //const { amount } = useSelector((store) => store.cart);
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
                <span className="nav__cart-amount">5</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
