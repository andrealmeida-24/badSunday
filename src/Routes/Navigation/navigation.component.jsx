import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import CartIcon from "../../Components/Cart-Icon/cart-icon.component";
import CartDropdown from "../../Components/Cart-Dropdown/cart-dropdown.component";

import Footer from "../../Components/Footer/footer.component";

import { UserContext } from "../../Contexts/user.context";
import { signOutUser } from "../../Utilities/Firebase/firebase.utils";
import { CartContext } from "../../Contexts/cart.context";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartIsOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="nav">
        <Link className="nav-logo-container" to="/">
          <h1>bad sunday</h1>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartIsOpen && <CartDropdown />}
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
