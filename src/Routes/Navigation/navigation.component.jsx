import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";

import CartIcon from "../../Components/Cart-Icon/cart-icon.component";
import CartDropdown from "../../Components/Cart-Dropdown/cart-dropdown.component";

import Footer from "../../Components/Footer/footer.component";

import { signOutUser } from "../../Utilities/Firebase/firebase.utils";
import { CartContext } from "../../Contexts/cart.context";

import {
  NavbarComponent,
  NavbarComponent_Logo,
  NavbarComponent_LinksContainer,
  NavbarComponent_Link,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { cartIsOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavbarComponent>
        <NavbarComponent_Logo to="/">bad sunday</NavbarComponent_Logo>
        <NavbarComponent_LinksContainer>
          <NavbarComponent_Link to="shop">SHOP</NavbarComponent_Link>
          {currentUser ? (
            <NavbarComponent_Link as="span" onClick={signOutUser}>
              SIGN OUT
            </NavbarComponent_Link>
          ) : (
            <NavbarComponent_Link to="auth">SIGN IN</NavbarComponent_Link>
          )}
          <CartIcon />
        </NavbarComponent_LinksContainer>
        {cartIsOpen && <CartDropdown />}
      </NavbarComponent>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
