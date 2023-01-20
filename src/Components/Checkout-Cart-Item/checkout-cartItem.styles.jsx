import styled from "styled-components";

export const CheckoutCartItem_Container = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 100px;
  justify-content: space-between;
  margin: 0.75em auto;
`;

export const CheckoutCartItem_Image_Container = styled.div`
  width: 20%;
  position: relative;

  img {
    width: 100%;
    height: 90%;
    border-radius: 5px;

    @media screen and (min-width: 767px) {
      width: 70%;
      height: 100%;
    }
  }

  span {
    position: absolute;
    top: -10px;
    right: -12px;
    padding: 10% 17%;
    color: white;
    font-size: 0.75em;
    font-weight: 500;
    border-radius: 50%;
    border-radius: 25px;
    background: black;

    @media screen and (min-width: 767px) {
      top: -10px;
      right: 28px;
      padding: 5% 10%;
    }
  }
`;

export const CheckoutCartItem_Info_Name = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  margin-left: 1em;

  h1 {
    margin-top: 0.75em;
    font-size: 1em;
    font-weight: 600;
  }
`;

export const CheckoutCartItem_Info_Price = styled.div`
  width: 20%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  h1 {
    font-size: 1em;
    font-weight: 600;
  }
`;
