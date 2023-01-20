import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";

export const CartItemComponent_Container = styled.div`
  height: 80px;
  display: flex;
  margin-bottom: 15px;

  img {
    width: 20%;
  }
  @media screen and (max-width: 767px) and (orientation: landscape) {
    img {
      width: 10%;
    }
  }

  @media screen and (min-width: 765px) {
    img {
      width: 15%;
    }
  }
`;

export const CartItemComponent_ItemDetails = styled.div`
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 0.75em;

  p {
    font-size: 1.15em;
    font-weight: 600;
    margin-bottom: 0.5em;
  }

  span {
    font-size: 0.95em;
    margin-top: 2px;
    font-weight: 400;
  }

  @media screen and (max-width: 767px) and (orientation: landscape) {
    width: 90%;
  }
`;

export const CartItemComponent_ItemQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const RemoveFromCart = styled(RxCross1)`
  font-size: 0.85em;
  font-weight: 500;
  cursor: pointer;
  margin-right: 0.25em;
`;

{
  /*




  //media: mobile landscape
  @media screen and (max-width: 767px) and (orientation: landscape) {
    .item-details {
      width: 90%;
    }
  }
}

*/
}
