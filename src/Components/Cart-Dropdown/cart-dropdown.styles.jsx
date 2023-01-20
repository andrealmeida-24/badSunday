import styled, { css } from "styled-components";
import { ReactComponent as StripeLogo } from "../../Assets/Images/stripe-seeklogo.com.svg";
import { ReactComponent as AmazonLogo } from "../../Assets/Images/Amazon_Pay_logo.svg";
import { ReactComponent as ApplePayLogo } from "../../Assets/Images/Apple_Pay_logo.svg";
import { ReactComponent as PaypalLogo } from "../../Assets/Images/PayPal.svg";

const ButtonMainStyles = css`
  width: 100%;
  letter-spacing: 0.5px;
  font-size: 0.85em;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0.25em;
  height: 2.5em;
`;

const PaymentOptionStyles = css`
  margin: 2px;
  max-width: 40px;
  height: 18px;
  border: 1px solid rgb(149, 149, 149);

  border-radius: 2px;
  padding: 0.1em;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
  }
`;

export const CartDropdownComponent_BackgroundOverlay = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
`;

export const CartDropdownComponent_Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: white;
  z-index: 5;

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    width: 55%;
  }

  @media screen and (min-width: 1024px) {
    width: 35%;
  }
`;

export const CartDropdownComponent_Elements = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  align-items: flex-start;
`;

export const CartDropdownComponent_Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid black;

  h1 {
    font-size: 1.5em;
    font-weight: 700;
  }

  span {
    float: right;
    font-size: 1.5em;
    cursor: pointer;
    font-weight: 600;
  }
`;

export const CartDropdownComponent_CartItems = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: auto;
  flex-direction: column;
  overflow-x: visible;
  margin: 2em 0;
`;

export const CartDropdownComponent_EmptyMessage = styled.span`
  margin: 2em 0;
  font-weight: 500;
  font-size: 1em;
`;

export const CartDropdownComponent_SubTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p,
  span {
    font-size: 1em;
    font-weight: 600;
  }
`;

export const CartDropdownComponent_DiscountInfo = styled.span`
  margin: 0 auto 1em 0;
  font-size: 0.75em;
`;

export const CartDropdownComponent_BtnCheckout = styled.button`
  ${ButtonMainStyles}
  background-color: rgba(144, 238, 144, 0.6);
  color: black;

  &:hover {
    background-color: rgba(144, 238, 144, 0.8);
  }
`;

export const CartDropdownComponent_BtnShop = styled.button`
  ${ButtonMainStyles}
`;

export const CartDropdownComponent_PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0 2em 0;

  span {
    font-size: 0.85em;
    margin-bottom: 0.25em;
  }
`;

export const CartDropdownComponent_Payments = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Stripe = styled(StripeLogo)`
  ${PaymentOptionStyles}
`;

export const Amazon = styled(AmazonLogo)`
  ${PaymentOptionStyles}
`;

export const Apple = styled(ApplePayLogo)`
  ${PaymentOptionStyles}
`;

export const PayPal = styled(PaypalLogo)`
  ${PaymentOptionStyles}
`;
