/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
import { toast } from "react-toastify";
import React, { useState } from "react";
//import LocationOnIcon from "@material-ui/icons/LocationOn";
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
//import { SlidsListProducts } from "./SlidsListProducts";
import { Eletronica } from "./Eletronica";
import { Vestidos } from "./Vestidos";
//import api from "../../api/api";

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
  const [dataSlug, setdataSlug] = useState("");
  const [dataCores, setDatacores] = useState("");
  const [dataTamanho, setTamanho] = useState("");
  const [dataImg5, setDataImm5] = useState("");
  const [categoroy, setCategory] = useState([]);
  //const [teste, setTeste] = useState([]);

  const lastPart = "dd90aefc-3c72-4cdc-8ab6-d40b7dd4aa11";

  //localStorage.setItem("id", lastPart);

  const navigate = useNavigate();

  const cart = useSelector((cartItems) => cartItems.cart.cartItems.length);
  const product = useSelector((productsSlice) => productsSlice.products.items);

  const productLists = [product];

  const dataProductFilter = productLists[0]?.filter(
    (productData) => productData.id === lastPart
  );

  let dataProductFilterList = [dataProductFilter];

  const priceFilter = dataProductFilterList[0]?.map((pri) => pri.price);

  const sizeFilter = dataProductFilterList[0]?.map((pri) => pri.size);
  const divideSizeArrey = { ...sizeFilter[0] };

  const imgFilterImg6 = dataProductFilterList[0]?.map((img6) => img6.image[5]);

  const ProcessoImageCor = async () => {
    const res = "category";

    console.log(res);

    const response = await imgFilterImg6;
    setDataImm5(response);
    setCategory(res);
    //setCategoryData(res);
  };

  localStorage.setItem("tm", divideSizeArrey[0]);
  const recebeTm = localStorage.getItem("tm");

  const dispatch = useDispatch();

  function handlerCartAdd(e) {
    const id = localStorage.getItem("id");

    const dataCor = { id: id, cor: dataSlug };
    const dataTm = {
      id: id,
      tm: recebeTm == "Padrão" ? recebeTm : dataTamanho,
    };

    //console.log(dataTm);

    dispatch(addTm(dataTm));
    dispatch(addCor(dataCor));

    if (dataTm.tm == "Padrão") {
      if (cart <= 4) {
        if (dataTm.tm == "") {
          alert("Você tem que escolher um tamanho antes!");
        } else {
          if (dataSlug == "") {
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
          if (dataSlug == "") {
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

    const dataCor = { id: id, cor: dataSlug };
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
          if (dataSlug == "") {
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
          if (dataSlug == "") {
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

  let percentual0 = 0.3;
  let aumento0 = priceFilter * percentual0;
  let novo_price0 = priceFilter - aumento0;

  let percentual = 0.25;
  let aumento = priceFilter * percentual;
  let novo_price = priceFilter - aumento;

  let percentual2 = 0.17;
  let aumento2 = priceFilter * percentual2;
  let novo_price2 = priceFilter - aumento2;

  let percentual3 = 0.13;
  let aumento3 = priceFilter * percentual3;
  let novo_price3 = priceFilter - aumento3;

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

  //const frete = {
  //  frete: "FRETE GRATIS PARA DODO O BRASIL",
  //};

  const priceAtual =
    dataTamanho == "64GB"
      ? novo_price0
      : dataTamanho == "128GB"
      ? novo_price
      : dataTamanho == "256GB"
      ? novo_price2
      : dataTamanho == "512GB"
      ? novo_price3
      : novo_price;
  console.log(priceAtual);

  const productProntoAddCard = [
    {
      id: dataProductFilter[0]?.id,
      name: dataProductFilter[0]?.name,
      price: priceAtual,
      quantity: dataProductFilter[0]?.quantity,
      url_product: dataProductFilter[0]?.url_product,
      description: dataProductFilter[0]?.description,
      category: categoroy,
      cor: dataCores,
      image: dataSlug,
      size: dataTamanho,
    },
  ];

  //console.log(productProntoAddCard, " t");

  /*const semImagem =
    "https://dermogral.com.br/wp-content/uploads/2023/03/FARMACIA-DERMOGRAL-SEM-FOTO.png";*/

  return (
    <>
      <Header />
      <MarginTop />
      <Pricipal>
        <section>
          {dataProductFilter == "" ? (
            <Example />
          ) : (
            dataProductFilter.map((res) => {
              const { id, image } = res;

              //console.log(slug, "11111");

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
                  <Swiper
                    className="padraoImg"
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
                        <SwiperSlide key={id}>
                          <img
                            src={dataSlug ? dataSlug : imgData}
                            id="logo"
                            alt=""
                            className="imgDiv"
                          />
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
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
              const { name, quantity, image, color, slug, frete } = res;

              return (
                <>
                  <div className="div">
                    <ProduVideoPlay2>
                      {image[5] == "" ? (
                        ""
                      ) : (
                        <Video style={{ width: 350, height: 230 }}>
                          <source src={image[5]} type="video/webm" />
                        </Video>
                      )}
                    </ProduVideoPlay2>
                    <div className="">
                      <div className="">
                        <h5>{name}</h5>
                        <div>
                          <span style={{ fontSize: 15 }}>4.8</span>
                          <GoStarFill
                            style={{ fontSize: 15, color: "#ffc107" }}
                          />
                          <GoStarFill
                            style={{ fontSize: 15, color: "#ffc107" }}
                          />
                          <GoStarFill
                            style={{ fontSize: 15, color: "#ffc107" }}
                          />
                          <GoStarFill
                            style={{ fontSize: 15, color: "#ffc107" }}
                          />
                          <TiStarHalfOutline
                            style={{ fontSize: 18, color: "#ffc107" }}
                          />
                          <span> | {quantity} Vendido</span>
                          <p></p>
                          <span>ESSE É UM DOS MAIS VENDIDOS NA LOJA</span>
                        </div>
                        <br />

                        <div>
                          {dataTamanho == "64GB" ? (
                            <h1>R$ {novo_price0},00</h1>
                          ) : dataTamanho == "128GB" ? (
                            <h1>R$ {novo_price},00</h1>
                          ) : dataTamanho == "256GB" ? (
                            <h1>R$ {novo_price2},00</h1>
                          ) : dataTamanho == "512GB" ? (
                            <h1>R$ {novo_price3},00</h1>
                          ) : (
                            <h1>R$ {novo_price},00</h1>
                          )}
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "green",
                              font: 18,
                            }}
                          >
                            Frete {frete}
                          </span>
                        </div>
                        <p style={{ fontSize: 20 }}>
                          <strong style={{ fontSize: 20 }}>Cor: </strong>
                          {dataCores}
                          <span
                            style={{
                              border: "none",
                              padding: 5,
                              borderRadius: 5,
                            }}
                          >
                            {dataSlug ? (
                              <img
                                className="slugImgDiv"
                                src={dataSlug}
                                alt={dataSlug}
                              />
                            ) : (
                              dataSlug
                            )}
                          </span>
                        </p>
                        <div>
                          <div
                            role="group"
                            aria-label="Basic example"
                            style={{ width: "80%" }}
                          >
                            {slug[0]?.charAt() == "h" ? (
                              <img
                                onClick={() =>
                                  setdataSlug(res.slug[0]) ||
                                  setDatacores(res.color[0]) ||
                                  ProcessoImageCor
                                }
                                className="slugImg"
                                src={res.slug[0]}
                                alt="img slug"
                                srcset=""
                              />
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() =>
                                  ProcessoImageCor || setdataSlug(color[0])
                                }
                              >
                                {color[0] ? color[0] : ""}
                              </button>
                            )}
                            {slug[1]?.charAt() == "h" ? (
                              <img
                                onClick={() =>
                                  setdataSlug(res.slug[1]) ||
                                  setDatacores(res.color[1]) ||
                                  ProcessoImageCor
                                }
                                className="slugImg"
                                src={res.slug[1]}
                                alt="img slug"
                                srcset=""
                              />
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() =>
                                  ProcessoImageCor || setdataSlug(color[1])
                                }
                              >
                                {color[1] ? color[1] : ""}
                              </button>
                            )}
                            {slug[2]?.charAt() == "h" ? (
                              <img
                                onClick={() =>
                                  setdataSlug(res.slug[2]) ||
                                  setDatacores(res.color[2]) ||
                                  ProcessoImageCor
                                }
                                className="slugImg"
                                src={res.slug[2]}
                                alt="img slug"
                                srcset=""
                              />
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() =>
                                  ProcessoImageCor || setdataSlug(color[2])
                                }
                              >
                                {color[2] ? color[2] : ""}
                              </button>
                            )}
                            {slug[3]?.charAt() == "h" ? (
                              <img
                                onClick={() =>
                                  setdataSlug(res.slug[3]) ||
                                  setDatacores(res.color[3]) ||
                                  ProcessoImageCor
                                }
                                className="slugImg"
                                src={res.slug[3]}
                                alt="img slug"
                                srcset=""
                              />
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() =>
                                  ProcessoImageCor || setdataSlug(color[3])
                                }
                              >
                                {color[3] ? color[3] : ""}
                              </button>
                            )}
                            {slug[4]?.charAt() == "h" ? (
                              <img
                                onClick={() =>
                                  setdataSlug(res.slug[4]) ||
                                  setDatacores(res.color[4]) ||
                                  ProcessoImageCor
                                }
                                className="slugImg"
                                src={res.slug[4]}
                                alt="img slug"
                                srcset=""
                              />
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() =>
                                  ProcessoImageCor || setdataSlug(color[4])
                                }
                              >
                                {color[4] ? color[4] : ""}
                              </button>
                            )}
                            {slug[5]?.charAt() == "h" ? (
                              <img
                                onClick={() =>
                                  setdataSlug(res.slug[5]) ||
                                  setDatacores(res.color[5]) ||
                                  ProcessoImageCor
                                }
                                className="slugImg"
                                src={res.slug[5]}
                                alt="img slug"
                                srcset=""
                              />
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() => setdataSlug(color[5])}
                              >
                                {color[5] ? color[5] : ""}
                              </button>
                            )}
                          </div>
                          <br />
                          <p className="pMarge">
                            O que você precisa saber sobre este produto É mãos
                            livres. Tipo de alto-falante: subwoofer. Possui
                            conectividade Bluetooth. Possui luzes LED. Bateria
                            recarregável. Potência de 10W. Vem com um microfone
                            de acessório. Lugar de colocação: mesa. Possui
                            microfone interno. Tempo de carga da bateria: 2h.
                          </p>
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
                              <br />
                              <p>
                                <strong style={{ fontSize: 20 }}>
                                  Tamanho:{" "}
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
                                    : divideSizeArrey[0]}
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
                              {divideSizeArrey[7] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[7])}
                                >
                                  {divideSizeArrey[7]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[8] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[8])}
                                >
                                  {divideSizeArrey[8]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[9] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[9])}
                                >
                                  {divideSizeArrey[9]}
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </div>

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
                          <p>
                            <strong>Disponivel em Estoque</strong>
                            <div>disponivel ({quantity})</div>

                            <br />
                            <strong>Finalize sua compra aqui!</strong>
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            handlerCartAdd(productProntoAddCard[0])
                          }
                          className="buttonCompra"
                        >
                          Comprar agora
                        </button>

                        <button
                          onClick={() =>
                            handlerCartAdd2(productProntoAddCard[0])
                          }
                          className="buttonCompra"
                        >
                          Adicionar ao carrinho
                        </button>

                        <br />
                        <div>
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
                            <span>
                              <FaCreditCard style={{ margin: "10px" }} /> Em até
                              12x sem juros
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
                                    border: "solid 1px",
                                  }}
                                />
                              ))}
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
              const { description, image } = res;

              return (
                <>
                  <div className="parte1">
                    <div>
                      {dataImg5 ? (
                        <div className="espaco"></div>
                      ) : (
                        <div className="espaco2"></div>
                      )}
                    </div>
                    {image[5] == "" ? (
                      ""
                    ) : (
                      <p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </p>
                    )}
                    {dataSlug == "" ? (
                      ""
                    ) : (
                      <p>
                        <br />
                        <br />
                      </p>
                    )}
                    <h4>
                      <strong>DESCRIÇÃO</strong>
                    </h4>
                    <p>{description}</p>
                  </div>
                </>
              );
            })
          )}
          <></>
        </footer>
      </Pricipal>
      <Realacionandos />
      <Eletronica />
      <Vestidos />
      {/*<SlidsListProducts />*/}
      <Comentarios />
      <Footer />
    </>
  );
};
