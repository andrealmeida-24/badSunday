import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/Images/shopping-bag.svg";
import { CartContext } from "../../Contexts/cart.context";

import {
  ShoppingIconImage,
  CartIconComponent,
  CartIconComponent_ItemCount,
} from "./cart.icon.styles";

const CartIcon = () => {
  const { cartIsOpen, setCartIsOpen, cartCount } = useContext(CartContext);

  const toogleCartIsOpen = () => setCartIsOpen(!cartIsOpen);

  return (
    <CartIconComponent onClick={toogleCartIsOpen}>
      <ShoppingIconImage />
      <CartIconComponent_ItemCount className="item-count">
        {cartCount}
      </CartIconComponent_ItemCount>
    </CartIconComponent>
  );
};

export default CartIcon;
