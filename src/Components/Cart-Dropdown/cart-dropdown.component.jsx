import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import { useNavigate } from "react-router-dom";
import CartItem from "../Cart-Item/cart-item.component";

import { RxCross1 } from "react-icons/rx";

import {
  CartDropdownComponent_BackgroundOverlay,
  CartDropdownComponent_Container,
  CartDropdownComponent_Elements,
  CartDropdownComponent_Header,
  CartDropdownComponent_CartItems,
  CartDropdownComponent_EmptyMessage,
  CartDropdownComponent_SubTotal,
  CartDropdownComponent_DiscountInfo,
  CartDropdownComponent_BtnCheckout,
  CartDropdownComponent_BtnShop,
  CartDropdownComponent_PaymentOptions,
  CartDropdownComponent_Payments,
  Stripe,
  Amazon,
  Apple,
  PayPal,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartIsOpen, setCartIsOpen, cartItems, cartTotal } =
    useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const toogleCartIsOpen = () => setCartIsOpen(!cartIsOpen);

  return (
    <CartDropdownComponent_BackgroundOverlay>
      <CartDropdownComponent_Container>
        <CartDropdownComponent_Elements>
          <CartDropdownComponent_Header>
            <h1>YOUR BASKET</h1>
            <span onClick={toogleCartIsOpen}>
              <RxCross1 />
            </span>
          </CartDropdownComponent_Header>

          {cartItems.length > 0 ? (
            <CartDropdownComponent_CartItems>
              {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))}
            </CartDropdownComponent_CartItems>
          ) : (
            <CartDropdownComponent_EmptyMessage>
              You have 0 items in your basket
            </CartDropdownComponent_EmptyMessage>
          )}

          {cartItems.length > 0 ? (
            <CartDropdownComponent_SubTotal>
              <p>Subtotal</p>
              <span>{cartTotal}€</span>
            </CartDropdownComponent_SubTotal>
          ) : null}

          {cartItems.length > 0 ? (
            <CartDropdownComponent_DiscountInfo>
              Discount applied at checkout*
            </CartDropdownComponent_DiscountInfo>
          ) : null}

          {cartItems.length > 0 ? (
            <CartDropdownComponent_BtnCheckout onClick={goToCheckoutHandler}>
              CHECKOUT
            </CartDropdownComponent_BtnCheckout>
          ) : null}

          <CartDropdownComponent_BtnShop onClick={toogleCartIsOpen}>
            CONTINUE SHOPPING
          </CartDropdownComponent_BtnShop>

          <CartDropdownComponent_PaymentOptions>
            <span className="payment-title">Pay with</span>
            <CartDropdownComponent_Payments>
              <Stripe />
              <Amazon />
              <Apple />
              <PayPal />
            </CartDropdownComponent_Payments>
          </CartDropdownComponent_PaymentOptions>
        </CartDropdownComponent_Elements>
      </CartDropdownComponent_Container>
    </CartDropdownComponent_BackgroundOverlay>
  );
};

export default CartDropdown;
