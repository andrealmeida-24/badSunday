import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemToCart } = useContext(CartContext);

  const removeItemFromCart = () => {
    removeItemToCart(cartItem);
  };
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
        <div className="item-quantity">
          <span className="quantity">{`Qty: ${quantity}`}</span>
          <span className="remove-from-cart" onClick={removeItemFromCart}>
            x
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
