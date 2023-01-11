import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";

import "./product-card-styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { setCartIsOpen, addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
    setCartIsOpen(true);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <div className="footer-left-side">
          <span className="name">{name}</span>
          <span className="price">{`${price}€`}</span>
        </div>
        <div className="footer-right-side">
          <span className="add-to-cart" onClick={addProductToCart}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
