import { useContext } from "react";
import Button from "../Button/button.component";
import { CartContext } from "../../Contexts/cart.context";
import CartItem from "../Cart-Item/cart-item.component";
import { ReactComponent as StripeLogo } from "../../Assets/Images/stripe-seeklogo.com.svg";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartIsOpen, setCartIsOpen } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);

  const toogleCartIsOpen = () => setCartIsOpen(!cartIsOpen);

  return (
    <div className="cart-dropdown-background">
      <div className="cart-dropdown-container">
        <div className="cart-dropdown-elements">
          <div className="cart-dropdown-header">
            <h1 className="cart-dropdown-title">YOUR BASKET</h1>
            <span onClick={toogleCartIsOpen}>X</span>
          </div>

          {cartItems.length > 0 ? (
            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))}
            </div>
          ) : (
            <span className="empty-cart">You have 0 items in your basket</span>
          )}
          <button className="cart-button-checkout">CHECKOUT</button>
          <button className="cart-button-continue" onClick={toogleCartIsOpen}>
            CONTINUE SHOPPING
          </button>
          <div className="cart-payment-options">
            <span className="payment-title">Pay with</span>
            <StripeLogo className="payment-option" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
