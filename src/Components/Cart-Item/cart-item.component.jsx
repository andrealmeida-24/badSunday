import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";

import {
  CartItemComponent_Container,
  CartItemComponent_ItemDetails,
  CartItemComponent_ItemQuantity,
  RemoveFromCart,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemToCart } = useContext(CartContext);

  const removeItemFromCart = () => {
    removeItemToCart(cartItem);
  };

  return (
    <CartItemComponent_Container>
      <img src={imageUrl} alt={name} />
      <CartItemComponent_ItemDetails>
        <p>{name}</p>
        <span>{`${price}€`}</span>
        <CartItemComponent_ItemQuantity>
          <span>{`Qty: ${quantity}`}</span>
          <RemoveFromCart onClick={removeItemFromCart} />
        </CartItemComponent_ItemQuantity>
      </CartItemComponent_ItemDetails>
    </CartItemComponent_Container>
  );
};

export default CartItem;
