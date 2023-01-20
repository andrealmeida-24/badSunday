import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as StripeLogo } from "../../Assets/Images/stripe-seeklogo.com.svg";
import { ReactComponent as AmazonLogo } from "../../Assets/Images/Amazon_Pay_logo.svg";
import { ReactComponent as ApplePay } from "../../Assets/Images/Apple_Pay_logo.svg";
import { ReactComponent as Paypal } from "../../Assets/Images/PayPal.svg";

const PaymentOptionStyles = css`
  width: 50px;
  height: 20px;
  margin-bottom: 10px;
  background-color: white;
  padding: 2px 5px;
  border-radius: 2px;
`;

export const FooterComponent = styled.div`
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 2em;
  padding: 2em 1em 3em 1em;
  color: white;
  background-color: black;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`;

export const FooterComponent_Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  @media screen and (min-width: 767px) {
    width: 20%;
    margin: 0 2em;
  }
`;

export const FooterComponent_Logo = styled.h1`
  font-family: "Pirata One", cursive;
  letter-spacing: 5px;
  font-size: 2em;
  margin-bottom: 0;
`;

export const FooterComponent_InfoTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

export const FooterComponent_InfoBrand = styled.p`
  max-width: auto;
  line-height: 1.5em;
  font-size: 1em;
`;

export const FooterComponent_Socials = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FooterComponent_SocialIcon = styled.i`
  font-size: 1.5em;
  cursor: pointer;
`;

export const FooterComponent_Link = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  margin-bottom: 0.15em;

  &:hover {
    text-decoration: underline;
  }
`;

export const Stripe = styled(StripeLogo)`
  ${PaymentOptionStyles}
`;

export const Amazon = styled(AmazonLogo)`
  ${PaymentOptionStyles}
`;

export const Apple = styled(ApplePay)`
  ${PaymentOptionStyles}
`;

export const PayPal = styled(Paypal)`
  ${PaymentOptionStyles}
`;
