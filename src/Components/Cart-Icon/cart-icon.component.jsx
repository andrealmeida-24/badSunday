import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/Images/shopping-bag.svg";
import { CartContext } from "../../Contexts/cart.context";

import "./cart.icon.styles.scss";

const CartIcon = () => {
  const { cartIsOpen, setCartIsOpen, cartCount } = useContext(CartContext);

  const toogleCartIsOpen = () => setCartIsOpen(!cartIsOpen);

  return (
    <div className="cart-icon-container" onClick={toogleCartIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
