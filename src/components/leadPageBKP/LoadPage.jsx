/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
import { toast } from "react-toastify";
import React, { useState } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addCor, addTm } from "../../redux/cart/cart";
import { useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";
import { Header } from "../header";
import { LoadingPage } from "../products/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { Comentarios } from "./comentarios";
import { Realacionandos } from "./relacionados";
import { ProduVideoPlay2 } from "./ReactVideoPlay";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { MarginTop, Pricipal } from "./desc";
//import { ImageList } from "@material-ui/core";
import { ProductImageMini } from "./products_desc";
import Footer from "./footer/footer";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

setTimeout(() => {
  scrollToTop();
}, 500);

export const LoadPage = () => {
  const [dataCores, setDatacores] = useState("");
  const [dataTamanho, setTamanho] = useState("");

  //let url = window.location.pathname;
  //let parts = url.split("/");
  //let lastPart = parts.pop() || parts.pop();

  const navigate = useNavigate();

  const cart = useSelector((cartItems) => cartItems.cart.cartItems.length);
  const product = useSelector((productsSlice) => productsSlice.products.items);

  const dataProductFilter = product.filter(
    (productData) => productData.id === "790e0e23-e3ec-4084-b61d-986aa062e8c6"
  );

  const priceFilter = dataProductFilter.map((pri) => pri.price);

  const sizeFilter = dataProductFilter.map((pri) => pri.size);
  const divideSizeArrey = { ...sizeFilter[0] };

  localStorage.setItem("tm", divideSizeArrey[0]);
  const recebeTm = localStorage.getItem("tm");

  const dispatch = useDispatch();

  function handlerCartAdd(e) {
    const id = localStorage.getItem("id");

    const dataCor = { id: id, cor: dataCores };
    const dataTm = {
      id: id,
      tm: recebeTm == "Padrão" ? recebeTm : dataTamanho,
    };

    console.log(dataTm);

    dispatch(addTm(dataTm));
    dispatch(addCor(dataCor));

    if (dataTm.tm == "Padrão") {
      if (cart <= 4) {
        if (dataTm.tm == "") {
          alert("Você tem que escolher um tamanho antes!");
        } else {
          if (dataCores == "") {
            alert("Você tem que escolher uma cor antes!");
          } else {
            setTimeout(() => {
              dispatch(addCart(e));
              navigate("/cartFinali");
            }, 1000);
            <LoadingPage>
              <ReactLoading
                type="spokes"
                color="aqua"
                height={"100%"}
                width={"100%"}
                delay={"100"}
              />
            </LoadingPage>;
          }
        }
      } else {
        alert("Você so pode adiciona 5 itens no carrio por vez");
      }
    }

    if (dataTm.tm != "Padrão") {
      if (cart <= 4) {
        if (dataTm.tm == "") {
          alert("Você tem que escolher um tamanho antes!");
        } else {
          if (dataCores == "") {
            alert("Você tem que escolher uma cor antes!");
          } else {
            setTimeout(() => {
              dispatch(addCart(e));
              navigate("/cartFinali");
            }, 1000);
            <LoadingPage>
              <ReactLoading
                type="spokes"
                color="aqua"
                height={"100%"}
                width={"100%"}
                delay={"100"}
              />
            </LoadingPage>;
          }
        }
      } else {
        alert("Você so pode adiciona 5 itens no carrio por vez");
      }
    }
  }

  function handlerCartAdd2(e) {
    let id = localStorage.getItem("id");
    let nameProduct = localStorage.getItem("name");

    const dataCor = { id: id, cor: dataCores };
    const dataTm = {
      id: id,
      tm: recebeTm == "Padrão" ? recebeTm : dataTamanho,
    };

    dispatch(addTm(dataTm));
    dispatch(addCor(dataCor));

    if (dataTm.tm == "Padrão") {
      if (cart <= 4) {
        if (dataTm.tm == "") {
          alert("Você tem que escolher um tamanho antes!");
        } else {
          if (dataCores == "") {
            alert("Você tem que escolher uma cor antes!");
          } else {
            dispatch(addCart(e));
            toast.success(
              `O produto ${nameProduct} foi adicionado ao carrinho!`,
              { position: toast.POSITION.TOP_CENTER }
            );

            scrollToTop();
          }
        }
      } else {
        alert("Você so pode adiciona 5 itens no carrio por vez");
      }
    }

    if (dataTm.tm != "Padrão") {
      if (cart <= 4) {
        if (dataTm.tm == "") {
          alert("Você tem que escolher um tamanho antes!");
        } else {
          if (dataCores == "") {
            alert("Você tem que escolher uma cor antes!");
          } else {
            dispatch(addCart(e));
            toast.success(
              `O produto ${nameProduct} foi adicionado ao carrinho!`,
              { position: toast.POSITION.TOP_CENTER }
            );

            scrollToTop();
            //toast.success(`O produto ${nameProduct}`)
          }
        }
      } else {
        alert("Você so pode adiciona 5 itens no carrio por vez");
      }
    }
  }

  let percentual = 0.25;
  let aumento = priceFilter * percentual;
  let novo_price = priceFilter - aumento;

  //imagem de meio de pagamentos bandeiras
  const imgCart = [
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/aura@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/elo@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/hipercard@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/payment-method-types/pix@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/discover@2x.png",
    },
    { img: "img_outras/horizontal_logo.png" },
  ];

  const Example = () => (
    /*
    blank
    balls
    bars
    bubbles
    cubes
    cylon
    spin
    spinningBubbles
    spokes 
    */
    <LoadingPage>
      <ReactLoading
        type="spokes"
        color="aqua"
        height={"100%"}
        width={"100%"}
        delay={"100"}
      />
    </LoadingPage>
  );

  const frete = {
    frete: "FRETE GRATIS",
  };

  /*const semImagem =
    "https://dermogral.com.br/wp-content/uploads/2023/03/FARMACIA-DERMOGRAL-SEM-FOTO.png";*/

  return (
    <>
      <Header/>
      <MarginTop/>
      <Pricipal>
        <section>
          {dataProductFilter == "" ? (
            <Example />
          ) : (
            dataProductFilter.map((res) => {
              const { id, image, color } = res;

              console.log(color, "11111");

              const imgList = [
                image[0],
                image[1],
                image[2],
                image[3],
                image[4],
                image[5],
                image[6],
              ];

              //const mostra = image[5] == undefined ? "none" : "initial"

              //console.log(mostra)

              function over0() {
                document.getElementById("logo").src = `${image[0] || image[1]}`;
              }
              function over1() {
                document.getElementById("logo").src = `${image[1] || image[4]}`;
              }
              function over2() {
                document.getElementById("logo").src = `${image[2] || image[1]}`;
              }

              function over3() {
                document.getElementById("logo").src = `${image[3] || image[0]}`;
              }

              function over4() {
                document.getElementById("logo").src = `${image[4] || image[1]}`;
              }

              return (
                <div>
                  <Swiper
                    style={{ border: "" }}
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                      },
                      next: {
                        translate: ["100%", 0, 0],
                      },
                    }}
                    modules={[EffectCreative]}
                  >
                    {imgList.map((imgData) =>
                    
                      imgData == "" ? (
                        ""
                      ) : (
                        <SwiperSlide
                          key={id}
                          style={{ background: "transparent" }}
                        >
                          <img
                            src={imgData}
                            id="logo"
                            alt=""
                            className="imgDev"
                          />
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                  <ProductImageMini>
                    <div className="imgMini">
                      <div className="imgMini">
                        <img
                          src={image[0] || image[1]}
                          alt="img0"
                          onMouseOver={() => over0(over0)}
                        />
                      </div>
                      <div className="imgMini">
                        <img
                          src={image[1] || image[0]}
                          alt="img0"
                          onMouseOver={() => over1(over1)}
                        />
                      </div>
                      <div className="imgMini">
                        <img
                          src={image[2] || image[0]}
                          alt="img0"
                          onMouseOver={() => over2(over2)}
                        />
                      </div>
                      <div className="imgMini">
                        <img
                          src={image[3] || image[2]}
                          alt="img0"
                          onMouseOver={() => over3(over3)}
                        />
                      </div>
                      <div className="imgMini">
                        <img
                          src={image[4] || image[1]}
                          alt="img0"
                          onMouseOver={() => over4(over4)}
                        />
                      </div>
                    </div>
                  </ProductImageMini>
                </div>
              );
            })
          )}
        </section>
        <aside>
          {dataProductFilter == "" ? (
            <Example />
          ) : (
            dataProductFilter.map((res) => {
              const { name, quantity, image, color } = res;

              return (
                <>
                  <div className="div">
                    <ProduVideoPlay2>
                      {image[5] == "" ? (
                        ""
                      ) : (
                        <Video style={{width: 350, height: 230}}>
                          <source src={image[5]} type="video/webm" />
                        </Video>
                      )}
                    </ProduVideoPlay2>
                    <div className="">
                      <div className="">
                        <h5>
                          <strong>{name}</strong>
                        </h5>
                        <div>
                          <span className="mr-2">4.8</span>
                          <GoStarFill className="text-warning mb-1" />
                          <GoStarFill className="text-warning mb-1" />
                          <GoStarFill className="text-warning mb-1" />
                          <GoStarFill className="text-warning mb-1" />
                          <TiStarHalfOutline className="text-warning mb-1 h4" />
                          <span className="ml-2">({quantity})</span>
                          <p></p>
                          <span>ESSE É UM DOS MAIS VENDIDOS NA LOJA</span>
                        </div>
                        <br />

                        <div>
                          <h1>R$ {novo_price},00</h1>
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "green",
                              font: 15,
                            }}
                          >
                            {frete.frete}
                          </span>
                        </div>

                        <span>
                          <FaCreditCard style={{ margin: "10px" }} /> Em até 12x
                          sem juros
                          <br />
                          {imgCart.map((imgCard) => (
                            <img
                              src={imgCard.img}
                              alt="img"
                              style={{
                                width: "12%",
                                height: 25,
                                display: "inline-block",
                                margin: "5PX",
                                border: "solid 1px"
                              }}
                            />
                          ))}
                        </span>
                        <br />
                        <br />
                        <br />
                        <p>
                          <strong style={{ fontSize: 20 }}>Cor: </strong>
                          <span
                            style={{
                              border: "solid 1px",
                              padding: 5,
                              borderRadius: 5,
                            }}
                          >
                            {dataCores ? dataCores : "Sem cor"}
                          </span>
                        </p>
                        <div>
                          <div
                            role="group"
                            aria-label="Basic example"
                            style={{ width: "80%" }}
                          >
                            {color[0] ? (
                              <button
                                type="button"
                                className="buttonColor"
                                onClick={() => setDatacores(color[0])}
                              >
                                {color[0]}
                              </button>
                            ) : (
                              ""
                            )}
                            {color[1] ? (
                              <button
                                type="button"
                                className="buttonColor"
                                onClick={() => setDatacores(color[1])}
                              >
                                {color[1]}
                              </button>
                            ) : (
                              ""
                            )}
                            {color[2] ? (
                              <button
                                type="button"
                                className="buttonColor"
                                onClick={() => setDatacores(color[2])}
                              >
                                {color[2]}
                              </button>
                            ) : (
                              ""
                            )}
                            {color[3] ? (
                              <button
                                type="button"
                                className="buttonColor"
                                onClick={() => setDatacores(color[3])}
                              >
                                {color[3]}
                              </button>
                            ) : (
                              ""
                            )}
                            {color[4] ? (
                              <button
                                type="button"
                                className="buttonColor"
                                onClick={() => setDatacores(color[4])}
                              >
                                {color[4]}
                              </button>
                            ) : (
                              ""
                            )}
                            {color[5] ? (
                              <button
                                type="button"
                                className="buttonColor"
                                onClick={() => setDatacores(color[5])}
                              >
                                {color[5]}
                              </button>
                            ) : (
                              ""
                            )}
                            {color[6] ? (
                              <button
                                type="button"
                                className="buttonColor"
                                onClick={() => setDatacores(color[6])}
                              >
                                {color[6]}
                              </button>
                            ) : (
                              ""
                            )}
                            {color[7] ? (
                              <button
                                type="button"
                                className="buttonColor"
                                onClick={() => setDatacores(color[7])}
                              >
                                {color[7]}
                              </button>
                            ) : (
                              ""
                            )}
                            {color[8] ? (
                              <button
                                type="button"
                                className="buttonColor"
                                onClick={() => setDatacores(color[8])}
                              >
                                {color[8]}
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                          <br />
                        </div>
                        <div>
                          {divideSizeArrey[0] == "Padrão" ||
                          divideSizeArrey[0] == "padrao" ||
                          divideSizeArrey[0] == "PADRÃO" ||
                          divideSizeArrey[0] == "Padrao" ||
                          divideSizeArrey[0] == "Ùnico" ||
                          divideSizeArrey[0] == "padrão" ||
                          divideSizeArrey[0] == "único" ||
                          divideSizeArrey[0] == "unico" ||
                          divideSizeArrey[0] == "Unico" ? (
                            ""
                          ) : (
                            <div>
                              <p>
                                <strong style={{ fontSize: 20 }}>
                                  Tamnho:{" "}
                                </strong>
                                <span
                                  style={{
                                    border: "solid 1px",
                                    padding: 5,
                                    borderRadius: 5,
                                  }}
                                >
                                  {dataTamanho
                                    ? dataTamanho
                                    : "Sem tamanho"}
                                </span>
                              </p>
                              {divideSizeArrey[0] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[0])}
                                >
                                  {divideSizeArrey[0]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[1] ? (
                                <button
                                  className="btnButtonTamanho"  
                                  onClick={() => setTamanho(divideSizeArrey[1])}
                                >
                                  {divideSizeArrey[1]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[2] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[2])}
                                >
                                  {divideSizeArrey[2]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[3] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[3])}
                                >
                                  {divideSizeArrey[3]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[4] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[4])}
                                >
                                  {divideSizeArrey[4]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[5] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[5])}
                                >
                                  {divideSizeArrey[5]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[6] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[6])}
                                >
                                  {divideSizeArrey[6]}
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </div>

                        {/*image[5] == "" ? (
                          ""
                        ) : (
                          <ProduVideoPlay>
                            <Video
                              style={{ width: 550, height: 310, marginTop: 35 }}
                            >
                              <source src={image[5]} type="video/webm" />
                            </Video>
                          </ProduVideoPlay>
                        )*/}
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="div">
                    <div>
                      <div className="">
                        <strong>Envio para todo o país</strong>
                        <br />
                        <span>
                          Saiba os prazos de entrega e as formas de envio.
                        </span>
                        <div>
                          <br />
                          <LocationOnIcon /> Frete Gratis
                        </div>
                        <br />
                        <div>
                          <p>
                            <strong>Disponivel em Estoque</strong>
                            <div>disponivel ({quantity})</div>
                            <br />
                            <br />
                            <strong>Finalize sua compra aqui!</strong>
                          </p>
                        </div>

                        <button
                          onClick={() => handlerCartAdd(dataProductFilter[0])}
                          className="buttonCompra"
                        >
                          Comprar agora
                        </button>

                        <button
                          onClick={() => handlerCartAdd2(dataProductFilter[0])}
                          className="buttonCompra"
                        >
                          Adicionar ao carrinho
                        </button>

                        <br />
                        <div>
                          <br />
                          <br />
                          <p>
                            <SwapHorizIcon /> <strong>Devolução Gratis</strong>{" "}
                            <br />
                            <span>
                              Você tem 7 dias a partir da data de recebimento.
                            </span>
                          </p>
                        </div>
                        <br />
                        <div>
                          <p>
                            <VerifiedUserIcon />{" "}
                            <strong>Compra Garantida</strong> <br />
                            <span>
                              eceba o produto que está esperando ou devolvemos o
                              dinheiro.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </aside>
        <footer>
          {dataProductFilter == "" ? (
            <Example />
          ) : (
            dataProductFilter.map((res) => {
              const { description } = res;

              return (
                <div className="parte1">
                  <h4>
                    <strong>DESCRIÇÃO</strong>
                  </h4>
                  <p>{description}</p>
                </div>
              );
            })
          )}
          <>
          
          </>
        </footer>
      </Pricipal>
      <Realacionandos/>
      <Comentarios/>
      <Footer/>
    </>
  );
};
