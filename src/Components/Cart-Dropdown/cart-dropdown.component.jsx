import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import { useNavigate } from "react-router-dom";
import CartItem from "../Cart-Item/cart-item.component";

import { ReactComponent as StripeLogo } from "../../Assets/Images/stripe-seeklogo.com.svg";
import { ReactComponent as AmazonLogo } from "../../Assets/Images/Amazon_Pay_logo.svg";
import { ReactComponent as ApplePayLogo } from "../../Assets/Images/Apple_Pay_logo.svg";
import { ReactComponent as PaypalLogo } from "../../Assets/Images/PayPal.svg";

import { RxCross1 } from "react-icons/rx";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartIsOpen, setCartIsOpen, cartItems, cartTotal } =
    useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const toogleCartIsOpen = () => setCartIsOpen(!cartIsOpen);

  return (
    <div className="cart-dropdown-background">
      <div className="cart-dropdown-container">
        <div className="cart-dropdown-elements">
          <div className="cart-dropdown-header">
            <h1 className="cart-dropdown-title">YOUR BASKET</h1>
            <span onClick={toogleCartIsOpen}>
              <RxCross1 />
            </span>
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
          {cartItems.length > 0 ? (
            <div className="cart-subtotal">
              <p>Subtotal</p>
              <span>{cartTotal}€</span>
            </div>
          ) : null}
          {cartItems.length > 0 ? (
            <span className="cart-discount-info">
              Discount applied at checkout*
            </span>
          ) : null}
          {cartItems.length > 0 ? (
            <button
              className="cart-button-checkout"
              onClick={goToCheckoutHandler}
            >
              CHECKOUT
            </button>
          ) : null}

          <button className="cart-button-continue" onClick={toogleCartIsOpen}>
            CONTINUE SHOPPING
          </button>
          <div className="cart-payment-options">
            <span className="payment-title">Pay with</span>
            <div className="payment-option-images">
              <StripeLogo className="payment-option" />
              <AmazonLogo className="payment-option" />
              <ApplePayLogo className="payment-option" />
              <PaypalLogo className="payment-option" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
