/* eslint-disable eqeqeq */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  CartVazio,
  ContainerImg,
  SubTotal,
  TableCartFinalize,
} from "./styles";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPlus, FaWindowMinimize } from "react-icons/fa";
import {
  addCart,
  decrementCart,
  removeFromCart,
  cauculateTotal,
} from "../../redux/cart/cart";
//import cartVazio from "./cartVazio.png";
import cartVazio from "./images/cartVazio.png";
//import Logo from "./images/Logo.png";
import { Eletronica } from "../leadPage/Eletronica";
import { Vestidos } from "../leadPage/Vestidos";
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

  //console.log(productCor);

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
      <>
        <CartVazio>
          <br />
          <Link className="a" to="/">
            Volta para o inicio
          </Link>
        </CartVazio>
        <ContainerImg>
          <img src={cartVazio} alt="img" />
        </ContainerImg>
        <Eletronica />
        <Vestidos />
      </>
    );
  };

  //let percentual = 0.25;
  //let aumento = cart2.cartTotalAmount * percentual;
  //let novo_amount = cart2.cartTotalAmount - aumento;

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
                    PensanoEmMim
                  </Link>
                </tr>
              </thead>
              <br />
              <hr />
              <h2 style={{ textAlign: "center" }}>Seu carrimho</h2>
              <tbody>
                {cart.map((res) => {
                  const { id, image, price, name, size, cor, cartQuantity } =
                    res;

                  //let percentual = 0.25;
                  //let aumento = price * percentual;
                  //let novo_price = price - aumento;

                  return (
                    <tr>
                      <hr />
                      <div key={id}>
                        <td>
                          <a href="/desc" className="divimg">
                            <img src={image} alt="img" />
                          </a>
                        </td>
                        <td>
                          <div className="divnome">
                            <div>
                              <div>
                                <p className="namePosition">{name}</p>
                                <p className="namePosition">
                                  {size ? <b>Tamanho: {size}</b> : ""}
                                </p>
                                <p className="namePosition">
                                  {cor ? <b>Cor: {cor}</b> : ""}
                                </p>
                              </div>
                              <div className="div1"></div>
                              <div className="divButton">
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
                              <p className="pUnidade">
                                ( {cartQuantity} Unidade )
                              </p>
                            </div>

                            <br />
                          </div>
                        </td>

                        <td>
                          <div className="div2">
                            <strong>
                              Preco: R$ {price * res.cartQuantity},00
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

            <Link to="/compra">
              <Button>Avançar</Button>
            </Link>
          )}
        </div>
      )}
      <div>
        {cart2.cartTotalAmount == "" ? (
          ""
        ) : (
          <SubTotal>Total: R$ {cart2.cartTotalAmount},00</SubTotal>
        )}
      </div>
    </>
  );
}
