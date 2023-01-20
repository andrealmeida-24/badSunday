import {
  CheckoutCartItem_Container,
  CheckoutCartItem_Image_Container,
  CheckoutCartItem_Info_Name,
  CheckoutCartItem_Info_Price,
} from "./checkout-cartItem.styles";

const CheckoutCartItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <CheckoutCartItem_Container>
      <CheckoutCartItem_Image_Container>
        <img src={imageUrl} alt={name} />
        <span>{quantity}</span>
      </CheckoutCartItem_Image_Container>

      <CheckoutCartItem_Info_Name>
        <h1>{name}</h1>
      </CheckoutCartItem_Info_Name>

      <CheckoutCartItem_Info_Price>
        <h1>{`${price * quantity}€`}</h1>
      </CheckoutCartItem_Info_Price>
    </CheckoutCartItem_Container>
  );
};

export default CheckoutCartItem;
