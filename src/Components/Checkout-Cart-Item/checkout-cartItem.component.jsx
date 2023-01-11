import "./checkout-cartItem.styles.scss";

const CheckoutCartItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="checkout-cart-item">
      <div className="cart-item-image">
        <img src={imageUrl} alt={name} />
        <span>{quantity}</span>
      </div>

      <div className="cart-item-info">
        <h1>{name}</h1>
      </div>

      <div className="cart-item-price">
        <h1>{`${price * quantity}€`}</h1>
      </div>
    </div>
  );
};

export default CheckoutCartItem;
