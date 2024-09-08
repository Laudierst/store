/* eslint-disable eqeqeq */
// Styles
import { useSelector } from "react-redux";
import {
  CartContainer,
  CartEscapeArea,
  CartContent,
  CartTitle,
  CartIcon,
  ButtonCard,
} from "./styles";
import CartItem from "../cart-item/index";
import { SlBasket } from "react-icons/sl";
//import { Link } from "react-router-dom";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const cart = useSelector((state) => state.cart.cartItems);

  if (cart == "") {
    localStorage.removeItem("tmMedidas");
    localStorage.removeItem("tmCores");
  }

  //console.log(cart)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
      <CartContent>
        <CartTitle>
          <button
            type="submit"
            onClick={handleEscapeAreaClick}
            style={{
              background: "red",
              width: "25px",
              height: "33px",
              border: "none",
            }}
          >
            X
          </button>
          <a href="/cartFinali">
            <CartIcon>
              Seu Carrinho
              <SlBasket style={{ fontSize: "40px" }} />
            </CartIcon>
          </a>
          <hr />
        </CartTitle>
        {cart.map((product) => (
          <div key={product.id}>
            <CartItem key={product.id} product={product} />
          </div>
        ))}
        <div>
          {cart == "" ? (
            <img
              style={{ marginLeft: "-5px", width: "300px" }}
              src="https://www.pngkit.com/png/detail/411-4110678_carrinho-de-compras-vazio-shopping-cart.png"
              alt="img"
            />
          ) : (
            <a href="/cartFinali">
              <ButtonCard>Ver meu carrinho</ButtonCard>
            </a>
          )}
        </div>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
