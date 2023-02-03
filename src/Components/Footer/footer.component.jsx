import { FaInstagram } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

import {
  FooterComponent,
  FooterComponent_Info,
  FooterComponent_Logo,
  FooterComponent_InfoTitle,
  FooterComponent_InfoBrand,
  FooterComponent_Socials,
  FooterComponent_SocialIcon,
  FooterComponent_Link,
  Stripe,
  Amazon,
  Apple,
  PayPal,
} from "./footer.styles.jsx";

const Footer = () => {
  return (
    <FooterComponent>
      <FooterComponent_Info>
        <FooterComponent_Logo>bad sunday</FooterComponent_Logo>
        <FooterComponent_InfoBrand>
          We are a Portugal based clothing brand, inspired by self-expression
          and we offer an alternative way of thinking and living.
        </FooterComponent_InfoBrand>
        <FooterComponent_Socials>
          <FooterComponent_SocialIcon>
            <FaInstagram />
            <AiFillFacebook />
          </FooterComponent_SocialIcon>
        </FooterComponent_Socials>
      </FooterComponent_Info>

      <FooterComponent_Info>
        <FooterComponent_InfoTitle>Shop</FooterComponent_InfoTitle>
        <FooterComponent_Link to="/shop/mens">All Mens</FooterComponent_Link>
        <FooterComponent_Link to="/shop/womens">
          All Womens
        </FooterComponent_Link>
        <FooterComponent_Link to="/shop/hats">All Hats</FooterComponent_Link>
        <FooterComponent_Link to="/shop/jackets">
          All Jackets
        </FooterComponent_Link>
        <FooterComponent_Link to="/shop/sneakers">
          All Sneakers
        </FooterComponent_Link>
      </FooterComponent_Info>

      <FooterComponent_Info>
        <FooterComponent_InfoTitle>Information</FooterComponent_InfoTitle>
        <FooterComponent_Link>Contact Us</FooterComponent_Link>
        <FooterComponent_Link>Delivery and Returns</FooterComponent_Link>
        <FooterComponent_Link>FAQs</FooterComponent_Link>
        <FooterComponent_Link>Terms & Conditions</FooterComponent_Link>
        <FooterComponent_Link>Privacy Policy</FooterComponent_Link>
        <FooterComponent_Link>Size Guide</FooterComponent_Link>
      </FooterComponent_Info>

      <FooterComponent_Info>
        <FooterComponent_InfoTitle>Paying Options</FooterComponent_InfoTitle>
        <Stripe />
        {/* <Amazon />
        <Apple />
        <PayPal />
      */}
      </FooterComponent_Info>
    </FooterComponent>
  );
};

export default Footer;
