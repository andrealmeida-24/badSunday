import { ReactComponent as StripeLogo } from "../../Assets/Images/stripe-seeklogo.com.svg";
import { ReactComponent as AmazonPayLogo } from "../../Assets/Images/Amazon_Pay_logo.svg";
import { ReactComponent as PayPalLogo } from "../../Assets/Images/PayPal.svg";
import { ReactComponent as ApplePayLogo } from "../../Assets/Images/Apple_Pay_logo.svg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiOutlineShoppingCart, AiFillQuestionCircle } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/user.context";
import { CartContext } from "../../Contexts/cart.context";
import Modal from "react-modal";
import CheckoutCartItem from "../../Components/Checkout-Cart-Item/checkout-cartItem.component";

import "./checkout.styles.scss";

Modal.setAppElement("#root");

const Checkout = () => {
  const [refundModalIsOpen, setRefundModalIsOpen] = useState(false);
  const [shippingModalIsOpen, setShippingModalIsOpen] = useState(false);
  const { cartIsOpen, setCartIsOpen, cartItems, cartTotal } =
    useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  const toogleCartIsOpen = () => setCartIsOpen(!cartIsOpen);

  const navigate = useNavigate();

  const goToHomePage = () => {
    toogleCartIsOpen(!cartIsOpen);
    navigate("/");
  };

  const goToCart = () => {
    navigate("/shop");
  };

  const goToAuth = () => {
    //navigate to auth & close basket
    toogleCartIsOpen(!cartIsOpen);
    navigate("/auth");
  };

  const toogleRefundModal = () => {
    setRefundModalIsOpen(!refundModalIsOpen);
  };

  const toogleShippingModal = () => {
    setShippingModalIsOpen(!shippingModalIsOpen);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-nav" onClick={goToHomePage}>
        bad sunday
      </div>

      <Modal
        isOpen={refundModalIsOpen}
        onRequestClose={toogleRefundModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="modal-content-title">
          <h1>Refund Policy</h1>
          <span className="close" onClick={toogleRefundModal}>
            <RxCross1 />
          </span>
        </div>

        <p>
          Returns <br />
          Our policy lasts 14 days. If 14 days have gone by since your delivery,
          unfortunately we can’t offer you a refund or exchange.
        </p>
        <p>
          To be eligible for a return, your item must be unused and in the same
          condition that you received it. It must also be in the original
          packaging.
        </p>
        <p>
          To complete your return, we require a receipt or proof of purchase.
          Please do not send your purchase back to the manufacturer. Any item
          not in its original condition, is damaged or missing parts for reasons
          not due to our error Any item that is returned more than 14 days after
          delivery
        </p>
        <p>
          Refunds (if applicable) <br />
          Once your return is received and inspected we will process the refund
          within 5 working days. We will also notify you of the approval or
          rejection of your refund.
          <br /> If you are approved, then your refund will be processed, and a
          credit will automatically be applied to your credit card or original
          method of payment, within a certain amount of days.
        </p>
      </Modal>

      <Modal
        isOpen={shippingModalIsOpen}
        onRequestClose={toogleShippingModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="modal-content-title">
          <h1>Shipping Policy</h1>
          <span className="close" onClick={toogleShippingModal}>
            <RxCross1 />
          </span>
        </div>
        <p>
          Please allow all orders 3-5 days for processing. We Print all orders
          on demand so need to allow printing and packing times. (Bank Holidays
          & Weekends NOT Included). Once orders are processed they will be
          shipped using our Tracked Shipping Method
        </p>
        <p>
          1. PORTUGAL <br />
          When purchasing items in Portugal your order will be sent via tracked
          courier. This service is 3.49€. Free Delivery on orders over 60€.
        </p>
        <p>
          2. USA, Canada, Australia <br />
          7.99€ <br />
          PLEASE ALLOW 5-10 WORKING DAYS. Free Delivery over 125€
        </p>
        <p>
          3. EUROPE
          <br />
          Shipping times are set by the service providers we partner with.
          Estimated time for delivery is 5-7 working days, however this can be
          extended to 30 days due to customs. If your order does not arrive in
          30 days please contact us.
        </p>
        <p>
          5.99€ Non Tracked
          <br />
          10.99€ Tracked
        </p>
        <p>
          Free tracked shipping on orders over 100€
          <br />
          4. Rest of the World
          <br />
          14.99€
          <br />
          Japan
          <br />
          Brazil
          <br />
          New Zealand
          <br />
          South Africa
        </p>
      </Modal>

      <div className="checkout-elements-container">
        <div className="checkout-elements">
          <div className="checkout-info">
            <h1>
              <AiOutlineShoppingCart className="icon" /> Order summary
            </h1>
            <span>{`${cartTotal}€`}</span>
          </div>

          <div className="checkout-items">
            {cartItems.map((item) => (
              <CheckoutCartItem key={item.id} cartItem={item} />
            ))}
          </div>

          <div className="checkout-discount">
            <input type="text" placeholder="Gift card or discount code"></input>
            <button className="discount-go">
              <FaArrowRight className="icon" />
            </button>
          </div>

          <div className="checkout-totals">
            <div className="checkout-totals-line">
              <h1>Subtotal</h1>
              <span>{`${cartTotal}€`}</span>
            </div>
            <div className="checkout-totals-line">
              <h1>
                Shipping{" "}
                <AiFillQuestionCircle
                  className="icon"
                  onClick={toogleShippingModal}
                />
              </h1>
              <p>Calculated at next step</p>
            </div>
          </div>
        </div>

        <div className="checkout-others">
          <div className="checkout-express">
            <span>Express Checkout</span>
            <StripeLogo className="payment-option stripe" />
            <AmazonPayLogo className="payment-option amazon" />
            <PayPalLogo className="payment-option paypal" />
            <ApplePayLogo className="payment-option apple" />
          </div>

          <div className="checkout-info-form">
            <span>OR</span>
            <hr />
            {!currentUser ? (
              <div className="checkout-info-form-sign-in">
                <p>Already have an account?</p>
                <h1 onClick={goToAuth}>Sign In</h1>
              </div>
            ) : (
              <div className="checkout-info-form-signed">
                <p>Welcome,</p>
                <h1>{currentUser.email}</h1>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="checkout-buttons">
        <button className="goToCheckout">Continue to Shipping</button>

        <button className="checkout-return" onClick={goToCart}>
          <FaArrowLeft className="icon" />
          Return to cart
        </button>
      </div>

      <div className="checkout-footer-policies">
        <hr />
        <div className="checkout-footer-policies-links">
          <p onClick={toogleRefundModal}>Refund Policy</p>
          <p onClick={toogleShippingModal}>Shipping Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
