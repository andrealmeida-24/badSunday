import "./footer.styles.scss";
import { ReactComponent as StripeLogo } from "../../Assets/Images/stripe-seeklogo.com.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-component brand">
        <h1>bad sunday</h1>
        <p>
          We are a Portugal based clothing brand, inspired by self-expression
          and we offer an alternative way of thinking and living.
        </p>
        <div className="socials">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>
      </div>

      <div className="footer-component shop">
        <h2>Shop</h2>
        <span>All</span>
        <span>New Arrivals</span>
        <span>All Mens</span>
        <span>All Womens</span>
        <span>Sale</span>
      </div>

      <div className="footer-component informations">
        <h2>Information</h2>
        <span>Contact Us</span>
        <span>Delivery and Returns</span>
        <span>FAQs</span>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
        <span>Size Guide</span>
      </div>

      <div className="footer-component payment">
        <h2>Paying Options</h2>
        <StripeLogo className="payment-option" />
      </div>
    </div>
  );
};

export default Footer;
