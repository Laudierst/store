/* eslint-disable eqeqeq */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, CartVazio, SubTotal, TableCartFinalize } from "./styles";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPlus, FaWindowMinimize } from "react-icons/fa";
import {
  addCart,
  decrementCart,
  removeFromCart,
  cauculateTotal,
} from "../../redux/cart/cart";
//teste

export default function CartFinalize() {
  useEffect(() => {
    window.scroll({
      top: 100,
    });
  }, []);

  //const navigate = useNavigate()

  const cart = useSelector((state) => state.cart.cartItems);
  const items = useSelector((state) => state.cart.cartItems.length);
  const cart2 = useSelector((state) => state.cart);

  //let id = localStorage.getItem("id")

  const productSize = useSelector((cartItems) => cartItems.cart.tmMedidas);
  const productCor = useSelector((cartItems) => cartItems.cart.tmCores);

  console.log(productCor);

  if (cart == "") {
    localStorage.removeItem("tmMedidas");
    localStorage.removeItem("tmCores");
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cauculateTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveClick = (id) => {
    dispatch(removeFromCart(id));
    window.location.reload();
  };

  const handleIncreaseClick = (e) => {
    dispatch(addCart(e));
    window.location.reload();
  };

  const handleDecreaseClick = (e) => {
    //console.log({e: e})
    dispatch(decrementCart(e));
    window.location.reload();
  };

  const carrinhoVazio = () => {
    return (
      <CartVazio>
        <Link to="/">Volta para as compras</Link>
        <img
          src="https://www.roboticaeducacional.art.br/images/cart-vazio.jpg"
          alt="img"
        />
      </CartVazio>
    );
  };

  let percentual = 0.25;
  let aumento = cart2.cartTotalAmount * percentual;
  let novo_amount = cart2.cartTotalAmount - aumento;

  return (
    <>
      {items === 0 || productCor == "" || productSize == "" ? (
        carrinhoVazio()
      ) : (
        <div>
          <TableCartFinalize>
            <table>
              <thead>
                <tr className="m-auto h3">
                  <Link to="/" className="logoTitle">
                    StylesTop
                  </Link>
                  <h2>Seu carrimho</h2>
                </tr>
              </thead>
              <hr />
              <tbody>
                {cart.map((res) => {
                  const { id, image, price, name, cartQuantity } = res;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <tr>
                      <div key={id}>
                        <td>
                          <a href="/desc" className="divimg">
                            <img src={image[0]} alt="img" />
                          </a>
                        </td>
                        <td>
                          <div className="divnome">
                            <div>
                              {productCor.map((cor) =>
                                productSize.map((resp) => (
                                  <div key={resp.id}>
                                    <p className="namePosition">
                                      {res.id === resp.id && res.id === cor.id
                                        ? name +
                                          " Tamanho: " +
                                          resp.tm +
                                          " Cor: " +
                                          cor.cor
                                        : ""}
                                    </p>
                                  </div>
                                ))
                              )}
                            </div>
                            <br />
                          </div>
                        </td>
                        <td>
                          <div className="div1">
                            <button
                              className="btnButton"
                              onClick={() => handleIncreaseClick(res)}
                            >
                              <FaPlus />
                            </button>
                            {cartQuantity}
                            <button
                              className="btnButton"
                              onClick={() => handleDecreaseClick(res)}
                            >
                              <FaWindowMinimize className="mb-2" />
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="div2">
                            <strong>
                              Preco: R$ {novo_price * res.cartQuantity},00
                            </strong>

                            <button
                              className="button"
                              onClick={() => handleRemoveClick(res)}
                            >
                              {" "}
                              Excluir
                              <RiDeleteBin2Fill className="text-danger h5 ml-2" />
                            </button>
                          </div>
                        </td>
                      </div>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableCartFinalize>
          {cart2.cartTotalAmount == 0 ? (
            <Button>
              <Link to="/">Volta para pagina inicial</Link>
            </Button>
          ) : (
            /*<Button onClick={ async () => {
						await api.post("/payment", ...prod).then((res) => (window.location.href = res.data.response.body.init_point))}}>
								Proceguir com pagamento
						</Button>*/

            <Button>
              <Link to="/compra">Finaliza comprar</Link>
            </Button>
          )}
        </div>
      )}
      <div>
        <SubTotal>Total: R$ {novo_amount},00</SubTotal>
      </div>
    </>
  );
}
