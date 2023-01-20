import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";

import {
  ProductCardComponent_Card,
  ProductCardComponent_CardInfo,
  ProductCardComponent_CardInfo_NamePrice,
  ProductCardComponent_Card_AddToCart,
} from "./product-card-styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { setCartIsOpen, addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
    setCartIsOpen(true);
  };

  return (
    <ProductCardComponent_Card onClick={addProductToCart}>
      <img src={imageUrl} alt={name} />
      <ProductCardComponent_CardInfo>
        <ProductCardComponent_CardInfo_NamePrice>
          <p>{name}</p>
          <span className="price">{`${price}€`}</span>
        </ProductCardComponent_CardInfo_NamePrice>
        <ProductCardComponent_Card_AddToCart>
          <span onClick={addProductToCart}>+</span>
        </ProductCardComponent_Card_AddToCart>
      </ProductCardComponent_CardInfo>
    </ProductCardComponent_Card>
  );
};

export default ProductCard;
