/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { ButtonBox, InputBox, CompraStyle, Title } from "./stylend";
import { FormBox, LoadingPage } from "./FormBox";
import api from "../../api/api";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import emailjs from "@emailjs/browser";
//import { toast } from "react-toastify";
import axios from "axios";

console.clear();

function Compra() {
  //Aqui estamos recebendo os respequitivos valores de arrey contido no estados gerenciado pelo redux
  const cartUm = useSelector((state) => state.cart.cartItems);
  const cartDois = useSelector((state) => state.cart.cartItems);
  const cartTres = useSelector((state) => state.cart.cartItems);
  const cartQuatro = useSelector((state) => state.cart.cartItems);
  const cartSinco = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart);
  //const tmItens = useSelector((state) => state.cart.tmMedidas);
  //const tmCor = useSelector((state) => state.cart.tmCores);

  console.log(cartUm[0].price, cartDois[1].price);

  const productAmount = [cartTotal.cartTotalAmount];
  //const productQuantity = [cartTotal.cartTotalQuantyti]

  const GeraCode = Math.random();
  const ConvertCode = JSON.stringify(GeraCode);

  // Aqui abaixo estamos criando arrey de estados para receber os valores do input vindo co form compra com useSatate
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [house, setHouse] = useState("");
  const [cpf, setCpf] = useState("");
  const [code_compra] = useState(ConvertCode);
  //const [ productslist] = useState(res)

  const onchangeCep = (e) => {
    e.preventDefault();
    const envento = e.target.value;
    //const onlyNumbers = /[0-9]/;
    //const key = String.fromCharCode(e.keyCode);

    //let regex = /^[A-Za-z][0-9]{7}$/;
    if (envento.length === 8) {
      console.log(envento);

      (async () => {
        await axios
          .get(`https://brasilapi.com.br/api/cep/v2/${envento}`)
          .then((response) => {
            //console.log(response.data);
            //const res = await req.data;
            setCep(response.data);
          })
          .catch((erro) => {
            alert("Coloque um cep valido");
          });
      })();
    }
  };

  const Example = () => (
    //Aqui ja criamos um componente com ReactLoading para aaguarda o carregamento da pagia
    <LoadingPage>
      <ReactLoading type="spokes" color="aqua" height={"100%"} width={"100%"} />
    </LoadingPage>
  );

  //Criei esse arrey para os dados formatado para melhor manuzeio dos dados que vem do input via useState
  const data = {
    name,
    email,
    phone,
    state,
    city,
    cep,
    street,
    number,
    district,
    cpf,
    /*productslist,*/
    apartment_or_house: house,
    code_compra,
  };

  let percentual = 0.25;
  let aumento = productAmount[0] * percentual;
  let novo_amount = productAmount[0] - aumento;
  let aumentoPriceUm = cartUm[0]?.price * percentual;
  let novo_priceUm = cartUm[0]?.price - aumentoPriceUm;

  let aumentoPriceDois = cartDois[1]?.price * percentual;
  let novo_priceDois = cartDois[1]?.price - aumentoPriceDois;

  let aumentoPriceTres = cartTres[2]?.price * percentual;
  let novo_priceTres = cartTres[2]?.price - aumentoPriceTres;

  let aumentoPriceQuatro = cartQuatro[3]?.price * percentual;
  let novo_priceQuatro = cartQuatro[3]?.price - aumentoPriceQuatro;

  let aumentoPriceSinco = cartSinco[4]?.price * percentual;
  let novo_priceSinco = cartSinco[4]?.price - aumentoPriceSinco;

  //E usso elas para esse arrey que vai ser enviado para api do mercado pado contida em minha api

  const priceProduct = Number(novo_amount);

  let prod = {
    title: cartUm[0]?.name,
    price: priceProduct,
    image: cartUm[0]?.image,
    category: "OnShops",
    description: "OnShops toda loja em promoção",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      cartUm[0] &&
      cartDois[1] === undefined &&
      cartTres[2] === undefined &&
      cartQuatro[3] == undefined &&
      cartSinco[4] == undefined
    ) {
      let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

      //let res1 = JSON.stringify(cartUm[0].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(novo_amount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${cartTres[0].image}` ? `${cartTres[0].image}` : "",
        nameproduct1: `${cartTres[0].name}` ? `${cartTres[0].name}` : "",
        quanty1: `${cartTres[0].cartQuantity}`
          ? `${cartTres[0].cartQuantity}`
          : "",
        price1: `${novo_priceUm}`
          ? `${novo_priceUm * cartTres[0].cartQuantity}`
          : "",
        cor1: `${cartTres[0].cor}` ? `${cartTres[0].cor}` : "",
        medidas1: `${cartTres[0].size}` ? `${cartTres[0].size}` : "",
        url_product1: `${cartTres[0].url_product}`
          ? `${cartTres[0].url_product}`
          : "",

        total: `${res5}` ? `${res5}` : "",
      };

      //console.log(prod);

      emailjs
        .send(
          "service_lflbrlm",
          "template_6bgdvos",
          templeteParams,
          "uh-vq_J-Q9IBlCdVH"
        )
        .then(
          (res) => {
            console.log("EMAIL ENVIADO", res.status, res.text);
          },
          (err) => {
            console.log("ERRO: ", err);
          }
        );

      const PagamentoMercadoPago = async () => {
        await api.post("payment", prod).then(
          (res) => (window.location.href = res.data.response.body.init_point),
          (err) => {
            alert(err.response.data);
            //console.log(prod)
          }
        );
      };
      PagamentoMercadoPago();
    }

    if (
      cartUm[0] &&
      cartDois[1] &&
      cartTres[2] === undefined &&
      cartQuatro[3] == undefined &&
      cartSinco[4] == undefined
    ) {
      let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

      //let res1 = JSON.stringify(cartUm[0].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(novo_amount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${cartTres[0].image}` ? `${cartTres[0].image}` : "",
        nameproduct1: `${cartTres[0].name}` ? `${cartTres[0].name}` : "",
        quanty1: `${cartTres[0].cartQuantity}`
          ? `${cartTres[0].cartQuantity}`
          : "",
        price1: `${novo_priceUm}`
          ? `${novo_priceUm * cartTres[0].cartQuantity}`
          : "",
        cor1: `${cartTres[0].cor}` ? `${cartTres[0].cor}` : "",
        medidas1: `${cartTres[0].size}` ? `${cartTres[0].size}` : "",
        url_product1: `${cartTres[0].url_product}`
          ? `${cartTres[0].url_product}`
          : "",

        image2: `${cartTres[1].image}` ? `${cartTres[1].image}` : "",
        nameproduct2: `${cartDois[1].name}` ? `${cartTres[1].name}` : "",
        quanty2: `${cartTres[1].cartQuantity}`
          ? `${cartTres[1].cartQuantity}`
          : "",
        price2: `${novo_priceDois}`
          ? `${novo_priceDois * cartTres[1].cartQuantity}`
          : "",
        cor2: `${cartTres[1].cor}` ? `${cartTres[1].cor}` : "",
        medidas2: `${cartTres[1].size}` ? `${cartTres[1].size}` : "",
        url_product2: `${cartTres[1].url_product}`
          ? `${cartTres[1].url_product}`
          : "",

        total: `${res5}` ? `${res5}` : "",
      };

      //console.log(prod);

      emailjs
        .send(
          "service_lflbrlm",
          "template_6bgdvos",
          templeteParams,
          "uh-vq_J-Q9IBlCdVH"
        )
        .then(
          (res) => {
            console.log("EMAIL ENVIADO", res.status, res.text);
          },
          (err) => {
            console.log("ERRO: ", err);
          }
        );

      const PagamentoMercadoPago = async () => {
        await api.post("payment", prod).then(
          (res) => (window.location.href = res.data.response.body.init_point),
          (err) => {
            alert(err.response.data);
            //console.log(prod)
          }
        );
      };
      PagamentoMercadoPago();
    }
    if (
      cartUm[0] &&
      cartDois[1] &&
      cartTres[2] &&
      cartQuatro[3] == undefined &&
      cartSinco[4] == undefined
    ) {
      let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

      //let res1 = JSON.stringify(cartUm[0].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(novo_amount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${cartTres[0].image}` ? `${cartTres[0].image}` : "",
        nameproduct1: `${cartTres[0].name}` ? `${cartTres[0].name}` : "",
        quanty1: `${cartTres[0].cartQuantity}`
          ? `${cartTres[0].cartQuantity}`
          : "",
        price1: `${novo_priceUm}`
          ? `${novo_priceUm * cartTres[0].cartQuantity}`
          : "",
        cor1: `${cartTres[0].cor}` ? `${cartTres[0].cor}` : "",
        medidas1: `${cartTres[0].size}` ? `${cartTres[0].size}` : "",
        url_product1: `${cartTres[0].url_product}`
          ? `${cartTres[0].url_product}`
          : "",

        image2: `${cartTres[1].image}` ? `${cartTres[1].image}` : "",
        nameproduct2: `${cartDois[1].name}` ? `${cartTres[1].name}` : "",
        quanty2: `${cartTres[1].cartQuantity}`
          ? `${cartTres[1].cartQuantity}`
          : "",
        price2: `${novo_priceDois}`
          ? `${novo_priceDois * cartTres[1].cartQuantity}`
          : "",
        cor2: `${cartTres[1].cor}` ? `${cartTres[1].cor}` : "",
        medidas2: `${cartTres[1].size}` ? `${cartTres[1].size}` : "",
        url_product2: `${cartTres[1].url_product}`
          ? `${cartTres[1].url_product}`
          : "",

        image3: `${cartTres[2].image}` ? `${cartTres[2].image}` : "",
        nameproduct3: `${cartTres[2].name}` ? `${cartTres[2].name}` : "",
        quanty3: `${cartTres[2].cartQuantity}`
          ? `${cartTres[2].cartQuantity}`
          : "",
        price3: `${novo_priceTres}`
          ? `${novo_priceTres * cartTres[2].cartQuantity}`
          : "",
        cor3: `${cartTres[2].cor}` ? `${cartTres[2].cor}` : "",
        medidas3: `${cartTres[2].size}` ? `${cartTres[2].size}` : "",
        url_product3: `${cartTres[2].url_product}`
          ? `${cartTres[2].url_product}`
          : "",

        total: `${res5}` ? `${res5}` : "",
      };

      //console.log(prod);

      emailjs
        .send(
          "service_lflbrlm",
          "template_6bgdvos",
          templeteParams,
          "uh-vq_J-Q9IBlCdVH"
        )
        .then(
          (res) => {
            console.log("EMAIL ENVIADO", res.status, res.text);
          },
          (err) => {
            console.log("ERRO: ", err);
          }
        );

      const PagamentoMercadoPago = async () => {
        await api.post("payment", prod).then(
          (res) => (window.location.href = res.data.response.body.init_point),
          (err) => {
            alert(err.response.data);
            //console.log(prod)
          }
        );
      };
      PagamentoMercadoPago();
    }

    if (
      cartUm[0] &&
      cartDois[1] &&
      cartTres[2] &&
      cartQuatro[3] &&
      cartSinco[4] == undefined
    ) {
      let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

      //let res1 = JSON.stringify(cartUm[0].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(novo_amount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${cartQuatro[0].image}` ? `${cartQuatro[0].image}` : "",
        nameproduct1: `${cartQuatro[0].name}` ? `${cartQuatro[0].name}` : "",
        quanty1: `${cartQuatro[0].cartQuantity}`
          ? `${cartQuatro[0].cartQuantity}`
          : "",
        price1: `${novo_priceUm}`
          ? `${novo_priceUm * cartQuatro[0].cartQuantity}`
          : "",
        cor1: `${cartQuatro[0].cor}` ? `${cartQuatro[0].cor}` : "",
        medidas1: `${cartQuatro[0].size}` ? `${cartQuatro[0].size}` : "",
        url_product1: `${cartQuatro[0].url_product}`
          ? `${cartQuatro[0].url_product}`
          : "",

        image2: `${cartQuatro[1].image}` ? `${cartQuatro[1].image}` : "",
        nameproduct2: `${cartQuatro[1].name}` ? `${cartQuatro[1].name}` : "",
        quanty2: `${cartQuatro[1].cartQuantity}`
          ? `${cartQuatro[1].cartQuantity}`
          : "",
        price2: `${novo_priceDois}`
          ? `${novo_priceDois * cartQuatro[1].cartQuantity}`
          : "",
        cor2: `${cartQuatro[1].cor}` ? `${cartQuatro[1].cor}` : "",
        medidas2: `${cartQuatro[1].size}` ? `${cartQuatro[1].size}` : "",
        url_product2: `${cartQuatro[1].url_product}`
          ? `${cartQuatro[1].url_product}`
          : "",

        image3: `${cartQuatro[2].image}` ? `${cartTres[2].image}` : "",
        nameproduct3: `${cartQuatro[2].name}` ? `${cartTres[2].name}` : "",
        quanty3: `${cartQuatro[2].cartQuantity}`
          ? `${cartQuatro[2].cartQuantity}`
          : "",
        price3: `${novo_priceTres}`
          ? `${novo_priceTres * cartQuatro[2].cartQuantity}`
          : "",
        cor3: `${cartQuatro[2].cor}` ? `${cartTres[2].cor}` : "",
        medidas3: `${cartQuatro[2].size}` ? `${cartTres[2].size}` : "",
        url_product3: `${cartQuatro[2].url_product}`
          ? `${cartQuatro[2].url_product}`
          : "",

        image4: `${cartQuatro[3].image}` ? `${cartQuatro[3].image}` : "",
        nameproduct4: `${cartQuatro[3].name}` ? `${cartQuatro[3].name}` : "",
        quanty4: `${cartQuatro[3].cartQuantity}`
          ? `${cartQuatro[3].cartQuantity}`
          : "",
        price4: `${novo_priceQuatro}`
          ? `${novo_priceQuatro * cartQuatro[3].cartQuantity}`
          : "",
        cor4: `${cartQuatro[3].cor}` ? `${cartQuatro[3].cor}` : "",
        medidas4: `${cartQuatro[3].size}` ? `${cartQuatro[3].size}` : "",
        url_product4: `${cartQuatro[3].url_product}`
          ? `${cartQuatro[3].url_product}`
          : "",

        total: `${res5}` ? `${res5}` : "",
      };

      //console.log(prod);

      emailjs
        .send(
          "service_lflbrlm",
          "template_6bgdvos",
          templeteParams,
          "uh-vq_J-Q9IBlCdVH"
        )
        .then(
          (res) => {
            console.log("EMAIL ENVIADO", res.status, res.text);
          },
          (err) => {
            console.log("ERRO: ", err);
          }
        );

      const PagamentoMercadoPago = async () => {
        await api.post("payment", prod).then(
          (res) => (window.location.href = res.data.response.body.init_point),
          (err) => {
            alert(err.response.data);
            //console.log(prod)
          }
        );
      };
      PagamentoMercadoPago();
    }

    if (
      cartUm[0] &&
      cartDois[1] &&
      cartTres[2] &&
      cartQuatro[3] &&
      cartSinco[4]
    ) {
      let adress = `Estado: ${cep.state} , Cidade: ${cep.city} , Cep: ${cep.cep} , Barrio: ${cep.neighborhood} , Rua: ${cep.street}, Numero: ${data.number} , AP/Casa: ${data.apartment_or_house} , CPF: ${cpf}`;

      //let res1 = JSON.stringify(cartUm[0].image[0]);
      let res4 = JSON.stringify(adress);
      let res5 = JSON.stringify(novo_amount);

      const templeteParams = {
        from_name: name ? name : "",
        adress: `${res4}` ? `${res4}` : "",
        email: email ? email : "",
        phone: phone ? phone : "",

        image1: `${cartSinco[0].image}` ? `${cartSinco[0].image}` : "",
        nameproduct1: `${cartSinco[0].name}` ? `${cartSinco[0].name}` : "",
        quanty1: `${cartSinco[0].cartQuantity}`
          ? `${cartSinco[0].cartQuantity}`
          : "",
        price1: `${novo_priceUm}`
          ? `${novo_priceUm * cartSinco[0].cartQuantity}`
          : "",
        cor1: `${cartSinco[0].cor}` ? `${cartUm[0].cor}` : "",
        medidas1: `${cartSinco[0].size}` ? `${cartSinco[0].size}` : "",
        url_product1: `${cartSinco[0].url_product}`
          ? `${cartSinco[0].url_product}`
          : "",

        image2: `${cartSinco[1].image}` ? `${cartSinco[1].image}` : "",
        nameproduct2: `${cartSinco[1].name}` ? `${cartSinco[1].name}` : "",
        quanty2: `${cartSinco[1].cartQuantity}`
          ? `${cartSinco[1].cartQuantity}`
          : "",
        price2: `${novo_priceDois}`
          ? `${novo_priceDois * cartSinco[1].cartQuantity}`
          : "",
        cor2: `${cartSinco[1].cor}` ? `${cartSinco[1].cor}` : "",
        medidas2: `${cartSinco[1].size}` ? `${cartSinco[1].size}` : "",
        url_product2: `${cartSinco[1].url_product}`
          ? `${cartSinco[1].url_product}`
          : "",

        image3: `${cartSinco[2].image}` ? `${cartTres[2].image}` : "",
        nameproduct3: `${cartSinco[2].name}` ? `${cartTres[2].name}` : "",
        quanty3: `${cartSinco[2].cartQuantity}`
          ? `${cartSinco[2].cartQuantity}`
          : "",
        price3: `${novo_priceTres}`
          ? `${novo_priceTres * cartSinco[2].cartQuantity}`
          : "",
        cor3: `${cartSinco[2].cor}` ? `${cartTres[2].cor}` : "",
        medidas3: `${cartSinco[2].size}` ? `${cartTres[2].size}` : "",
        url_product3: `${cartSinco[2].url_product}`
          ? `${cartSinco[2].url_product}`
          : "",

        image4: `${cartSinco[3].image}` ? `${cartQuatro[3].image}` : "",
        nameproduct4: `${cartSinco[3].name}` ? `${cartQuatro[3].name}` : "",
        quanty4: `${cartSinco[3].cartQuantity}`
          ? `${cartSinco[3].cartQuantity}`
          : "",
        price4: `${novo_priceQuatro}`
          ? `${novo_priceQuatro * cartSinco[3].cartQuantity}`
          : "",
        cor4: `${cartSinco[3].cor}` ? `${cartQuatro[3].cor}` : "",
        medidas4: `${cartSinco[3].size}` ? `${cartQuatro[3].size}` : "",
        url_product4: `${cartSinco[3].url_product}`
          ? `${cartSinco[3].url_product}`
          : "",

        image5: `${cartSinco[4].image}` ? `${cartSinco[4].image}` : "",
        nameproduct5: `${cartSinco[4].name}` ? `${cartSinco[4].name}` : "",
        quanty5: `${cartSinco[4].cartQuantity}`
          ? `${cartSinco[4].cartQuantity}`
          : "",
        price5: `${novo_priceSinco}`
          ? `${novo_priceSinco * cartSinco[4].cartQuantity}`
          : "",
        cor5: `${cartSinco[4].cor}` ? `${cartSinco[4].cor}` : "",
        medidas5: `${cartSinco[4].size}` ? `${cartSinco[4].size}` : "",
        url_product5: `${cartSinco[4].url_product}`
          ? `${cartSinco[4].url_product}`
          : "",

        total: `${res5}` ? `${res5}` : "",
      };

      //console.log(prod);

      emailjs
        .send(
          "service_lflbrlm",
          "template_6bgdvos",
          templeteParams,
          "uh-vq_J-Q9IBlCdVH"
        )
        .then(
          (res) => {
            console.log("EMAIL ENVIADO", res.status, res.text);
          },
          (err) => {
            console.log("ERRO: ", err);
          }
        );

      const PagamentoMercadoPago = async () => {
        await api.post("payment", prod).then(
          (res) => (window.location.href = res.data.response.body.init_point),
          (err) => {
            alert(err.response.data);
            //console.log(prod)
          }
        );
      };
      PagamentoMercadoPago();
    }
  };

  //Nova mudança

  return (
    <>
      {cartUm == "" ? (
        <Example />
      ) : (
        <CompraStyle>
          <FormBox>
            <Title>Preencha com seus dados</Title>
            <img src="Logo.png" alt="logo" />
            <hr />
            <form onSubmit={handleSubmit}>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  data-ls-module="charCounter"
                  maxlength="30"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name.name}
                  required
                />
                <label htmlFor="">Nome completo</label>
              </InputBox>
              <InputBox>
                <input
                  name="email"
                  data-ls-module="charCounter"
                  maxlength="40"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email.email}
                  required
                />
                <label htmlFor="">E-mail</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone.phone}
                  required
                />
                <label htmlFor="">Telefone</label>
              </InputBox>

              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="number"
                  name="cep"
                  id="cep"
                  onChange={(e) => onchangeCep(e)}
                  value={cep.cep}
                  required
                />
                <label htmlFor="">Cep</label>
              </InputBox>
              {cep ? (
                <button
                  type="submit"
                  className="btn-cep"
                  onClick={() => setCep("")}
                >
                  Trocar cep
                </button>
              ) : (
                ""
              )}
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="state"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                  value={cep.state}
                  required
                />
                <label htmlFor="">Estado</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  value={cep.city}
                  required
                />
                <label htmlFor="">Cidade</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="district"
                  id="district"
                  onChange={(e) => setDistrict(e.target.value)}
                  value={cep.neighborhood}
                  required
                />
                <label htmlFor="">Bairro</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="street"
                  id="street"
                  onChange={(e) => setStreet(e.target.value)}
                  value={cep.street}
                  required
                />
                <label htmlFor="">Rua</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="number"
                  name="number"
                  id="number"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number.number}
                  required
                />
                <label htmlFor="">Numero</label>
              </InputBox>
              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="house"
                  id="house"
                  onChange={(e) => setHouse(e.target.value)}
                  value={house.house}
                  required
                />
                <label htmlFor="">Complemento AP/CASA</label>
              </InputBox>

              <InputBox>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="text"
                  name="house"
                  id="house"
                  onChange={(e) => setCpf(e.target.value)}
                  value={house.cpf}
                  required
                />
                <label htmlFor="">CPF/CNPJ</label>
              </InputBox>
              <ButtonBox type="submit">Finaliza Compra</ButtonBox>
            </form>
          </FormBox>
        </CompraStyle>
      )}
    </>
  );
}

export default Compra;