import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../Assets/Images/shopping-bag.svg";

export const ShoppingIconImage = styled(ShoppingIcon)`
  width: 3em;
  height: 1.7em;
  filter: invert(1);
`;

export const CartIconComponent = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CartIconComponent_ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: 400;
  bottom: 12px;
  color: white;
`;
