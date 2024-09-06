/* eslint-disable eqeqeq */
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

// Styles
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, decrementCart, addCart } from "../../redux/cart/cart";

const CartItem = ({ product }) => {

  const dispatch = useDispatch()
  const length = useSelector((state) => state.cart.length)

  const handleRemoveClick = (id) => {
    dispatch(removeFromCart(id))
  };

  const handleIncreaseClick = (dataProduct) => {
    dispatch(addCart(dataProduct))
  };

  const handleDecreaseClick = (dataProduct) => {
    dispatch(decrementCart(dataProduct))
  };

  let percentual = 0.25;
  let aumento = product.price * percentual;
  let novo_price = product.price - aumento;

  return (
    <div>
      <CartItemContainer>
        <CartItemImage imageUrl={product.image[0]} />

        <CartItemInfo>
          <p>{product.name}</p>
          <p><strong>R$ {novo_price * product.cartQuantity},00</strong></p>

          <CartItemQuantity>
            <AiOutlineMinus
              size={20}
              onClick={() => handleDecreaseClick(product)}
              aria-label={`Decrease quantity of ${product.name}`}
            />
            <b>{length}</b>
            <p>{product.cartQuantity}</p>
            <AiOutlinePlus
              size={20}
              onClick={() => handleIncreaseClick(product)}
              aria-label={`Increase quantity of ${product.name}`}
            />
          </CartItemQuantity>
        </CartItemInfo>

        <RemoveButton
          onClick={() => handleRemoveClick(product)}
          aria-label={`Remove`}
        >
          <AiOutlineClose size={25} />
        </RemoveButton>
      </CartItemContainer>
    </div>
  );
};

export default CartItem;
